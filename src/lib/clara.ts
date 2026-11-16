/**
 * Aviso de inscrição para a Clara (agente de WhatsApp da Claraval).
 *
 * Depois que o form grava a inscrição, a rota /api/track chama `avisarClara`.
 * A Clara usa o aviso para parar de convidar quem já se inscreveu e para mandar
 * os lembretes do evento. Hoje essa lista chega por CSV importado no CRM; com
 * isso ela passa a chegar sozinha, uma inscrição por vez.
 *
 * Tudo vem de variáveis de ambiente. Sem elas, nada é enviado (a LP segue
 * exatamente como antes):
 *
 *   CLARA_LP_WEBHOOK_URL      ex.: https://agente.academiaclaraval.com.br/agente/lp
 *   CLARA_LP_WEBHOOK_SEGREDO  segredo combinado com a Clara (vai no fim do endereço)
 *   CLARA_LP_EVENTOS          JSON rota -> evento da Clara. Só as rotas listadas avisam.
 *                             ex.: {"/teachy": 12}
 *                             ou   {"/teachy": 12, "/": {"evento_id": 13, "pagamento": "pendente"}}
 *
 * `pagamento` (opcional): nas rotas sem Stripe (convites de parceiros) o padrão
 * é vazio, que a Clara lê como "inscrito". Nas rotas com Stripe o padrão é
 * "pendente" (a Clara marca como "interessado"), porque o pagamento acontece
 * depois do cadastro.
 *
 * O aviso nunca pode atrapalhar a inscrição: tempo curto, erro só vai pro log.
 */

const TIMEOUT_MS = 4000;

/** Rotas sem pagamento no fim do form (ver Landing.tsx: alvorada/teachy/ischolar/thomas). */
const ROTAS_SEM_PAGAMENTO = new Set([
  "/teachy",
  "/alvorada",
  "/ischolar",
  "/ischolar-uberlandia",
  "/thomas-jefferson",
]);

export interface Inscricao {
  route: string;
  nome?: string;
  email?: string;
  telefone?: string;
  escola?: string;
}

interface Destino {
  eventoId: number;
  pagamento: string;
}

function destinoDaRota(route: string): Destino | null {
  const bruto = process.env.CLARA_LP_EVENTOS;
  if (!bruto) return null;
  let mapa: Record<string, unknown>;
  try {
    mapa = JSON.parse(bruto);
  } catch {
    console.error("[clara] CLARA_LP_EVENTOS não é um JSON válido");
    return null;
  }
  const valor = mapa?.[route];
  const padrao = ROTAS_SEM_PAGAMENTO.has(route) ? "" : "pendente";
  if (typeof valor === "number" && Number.isInteger(valor)) {
    return { eventoId: valor, pagamento: padrao };
  }
  if (valor && typeof valor === "object") {
    const v = valor as { evento_id?: unknown; pagamento?: unknown };
    if (typeof v.evento_id === "number" && Number.isInteger(v.evento_id)) {
      return {
        eventoId: v.evento_id,
        pagamento: typeof v.pagamento === "string" ? v.pagamento : padrao,
      };
    }
  }
  return null;
}

/** Monta o corpo no formato que a Clara aceita (uma inscrição por vez). */
export function corpoParaClara(i: Inscricao): Record<string, unknown> | null {
  const destino = destinoDaRota(i.route);
  if (!destino) return null;
  const whatsapp = (i.telefone ?? "").replace(/\D/g, "");
  const email = (i.email ?? "").trim();
  if (!whatsapp && !email) return null;
  return {
    evento_id: destino.eventoId,
    nome: i.nome?.trim() || undefined,
    whatsapp: whatsapp || undefined,
    email: email || undefined,
    escola: i.escola?.trim() || undefined,
    pagamento: destino.pagamento,
  };
}

export async function avisarClara(i: Inscricao): Promise<void> {
  const base = process.env.CLARA_LP_WEBHOOK_URL;
  const segredo = process.env.CLARA_LP_WEBHOOK_SEGREDO;
  if (!base || !segredo) return;
  const corpo = corpoParaClara(i);
  if (!corpo) return;

  const url = `${base.replace(/\/+$/, "")}/${encodeURIComponent(segredo)}`;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corpo),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    if (!resp.ok) {
      // Nunca logar a URL: o segredo está nela.
      console.error("[clara] aviso recusado", resp.status, i.route);
    }
  } catch (err) {
    console.error("[clara] aviso falhou", i.route, (err as Error)?.name ?? "erro");
  }
}
