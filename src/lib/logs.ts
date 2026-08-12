/**
 * Log de acesso simples: pageviews das rotas da landing (ver ORIGINS em
 * lib/origin.ts) e envios do form.
 *
 * Persistencia: Prisma Postgres (tabela access_log). Se DATABASE_URL nao
 * estiver definida — dev local sem banco — cai para um arquivo JSONL no
 * diretorio temporario, so para nao quebrar nada; o /admin avisa nesse caso.
 */

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export type LogType = "pageview" | "lead";

export interface LogEntry {
  type: LogType;
  /** Rota visitada: "/", "/revista" ou "/palestra". */
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

export const hasStorage = Boolean(process.env.DATABASE_URL);

/** Fallback sem banco: arquivo JSONL no diretorio temporario. */
const FILE = path.join(os.tmpdir(), "euamomatriculas-logs.jsonl");

export async function appendLog(entry: LogEntry): Promise<void> {
  const line = JSON.stringify(entry);
  // O log tambem vai pro console, onde aparece nos Runtime Logs da Vercel.
  console.log("[track]", line);

  if (!hasStorage) {
    await fs.appendFile(FILE, line + "\n", "utf8");
    return;
  }

  const { prisma } = await import("./prisma");
  await prisma.accessLog.create({
    data: {
      type: entry.type,
      route: entry.route,
      createdAt: new Date(entry.at),
      ip: entry.ip,
      userAgent: entry.userAgent,
      referer: entry.referer,
      country: entry.country,
      city: entry.city,
      query: entry.query,
      nome: entry.nome,
      email: entry.email,
      telefone: entry.telefone,
      escola: entry.escola,
    },
  });
}

export async function listLogs(limit = 500): Promise<LogEntry[]> {
  if (!hasStorage) {
    let content: string;
    try {
      content = await fs.readFile(FILE, "utf8");
    } catch {
      return [];
    }
    return content
      .trim()
      .split("\n")
      .filter(Boolean)
      .reverse()
      .slice(0, limit)
      .map((line) => {
        try {
          return JSON.parse(line) as LogEntry;
        } catch {
          return null;
        }
      })
      .filter((e): e is LogEntry => e !== null);
  }

  const { prisma } = await import("./prisma");
  const rows = await prisma.accessLog.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  return rows.map((r) => ({
    type: r.type === "lead" ? "lead" : "pageview",
    route: r.route,
    at: r.createdAt.toISOString(),
    ip: r.ip ?? undefined,
    userAgent: r.userAgent ?? undefined,
    referer: r.referer ?? undefined,
    country: r.country ?? undefined,
    city: r.city ?? undefined,
    query: r.query ?? undefined,
    nome: r.nome ?? undefined,
    email: r.email ?? undefined,
    telefone: r.telefone ?? undefined,
    escola: r.escola ?? undefined,
  }));
}
