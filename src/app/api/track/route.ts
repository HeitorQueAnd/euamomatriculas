import { NextResponse } from "next/server";
import { appendLog, type LogEntry, type LogType } from "@/lib/logs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface TrackPayload {
  type?: LogType;
  route?: string;
  query?: string;
  nome?: string;
  email?: string;
  telefone?: string;
  escola?: string;
}

/** Recebe os eventos do browser (pageview e envio de form) e grava no log. */
export async function POST(request: Request) {
  let body: TrackPayload = {};
  try {
    body = (await request.json()) as TrackPayload;
  } catch {
    // corpo vazio/invalido: segue com defaults
  }

  const h = request.headers;
  const entry: LogEntry = {
    type: body.type === "lead" ? "lead" : "pageview",
    route: typeof body.route === "string" ? body.route.slice(0, 200) : "/",
    at: new Date().toISOString(),
    ip: h.get("x-forwarded-for")?.split(",")[0].trim() ?? undefined,
    userAgent: h.get("user-agent")?.slice(0, 300) ?? undefined,
    referer: h.get("referer")?.slice(0, 300) ?? undefined,
    country: h.get("x-vercel-ip-country") ?? undefined,
    city: h.get("x-vercel-ip-city")
      ? decodeURIComponent(h.get("x-vercel-ip-city")!)
      : undefined,
    query: body.query?.slice(0, 300) || undefined,
  };

  if (entry.type === "lead") {
    entry.nome = body.nome?.slice(0, 200);
    entry.email = body.email?.slice(0, 200);
    entry.telefone = body.telefone?.slice(0, 40);
    entry.escola = body.escola?.slice(0, 200);
  }

  try {
    await appendLog(entry);
  } catch (err) {
    // Log nunca pode quebrar a experiencia do visitante.
    console.error("[track] falha ao gravar", err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true });
}
