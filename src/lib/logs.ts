/**
 * Log de acesso simples: pageviews (/ e /revista) e envios do form.
 *
 * Persistencia: Upstash Redis via REST (a integracao Redis da Vercel injeta
 * KV_REST_API_URL/KV_REST_API_TOKEN, ou UPSTASH_REDIS_REST_URL/TOKEN). Sem
 * dependencia nova: e so `fetch`. Se as envs nao existirem (dev local), cai
 * para uma lista em memoria — some no restart, mas serve pra testar.
 */

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export type LogType = "pageview" | "lead";

export interface LogEntry {
  type: LogType;
  /** Rota visitada: "/" ou "/revista". */
  route: string;
  /** ISO timestamp. */
  at: string;
  ip?: string;
  userAgent?: string;
  referer?: string;
  country?: string;
  city?: string;
  /** Query string da visita (utm_source, etc). */
  query?: string;
  /** Dados do form — so em type: "lead". */
  nome?: string;
  email?: string;
  telefone?: string;
  escola?: string;
}

const KEY = "euamomatriculas:logs";
const MAX = 5000;

const REST_URL =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const hasStorage = Boolean(REST_URL && REST_TOKEN);

/**
 * Fallback sem Redis: arquivo JSONL no diretorio temporario. Funciona local
 * (dev) e nao quebra na Vercel, onde /tmp e o unico caminho gravavel — mas la
 * some a cada deploy/instancia, por isso o /admin avisa.
 */
const FILE = path.join(os.tmpdir(), "euamomatriculas-logs.jsonl");

async function appendFile(line: string) {
  await fs.appendFile(FILE, line + "\n", "utf8");
}

async function readFileLines(limit: number): Promise<string[]> {
  try {
    const content = await fs.readFile(FILE, "utf8");
    return content.trim().split("\n").filter(Boolean).reverse().slice(0, limit);
  } catch {
    return [];
  }
}

async function redis(command: unknown[]): Promise<unknown> {
  const res = await fetch(REST_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { result?: unknown };
  return json.result;
}

export async function appendLog(entry: LogEntry): Promise<void> {
  const line = JSON.stringify(entry);

  // O log tambem vai pro console, onde aparece nos Runtime Logs da Vercel.
  console.log("[track]", line);

  if (!hasStorage) {
    await appendFile(line);
    return;
  }

  // LPUSH mantem o mais recente na frente; LTRIM segura o tamanho da lista.
  await redis(["LPUSH", KEY, line]);
  await redis(["LTRIM", KEY, "0", String(MAX - 1)]);
}

export async function listLogs(limit = 500): Promise<LogEntry[]> {
  const raw = hasStorage
    ? ((await redis(["LRANGE", KEY, "0", String(limit - 1)])) as string[])
    : await readFileLines(limit);

  return raw
    .map((line) => {
      try {
        return JSON.parse(line) as LogEntry;
      } catch {
        return null;
      }
    })
    .filter((e): e is LogEntry => e !== null);
}
