/**
 * Origem do lead por rota.
 *
 * A landing e identica nas rotas; o que muda e a origem carimbada no RD
 * Station. O RD diferencia as conversoes pelo campo hidden `conversion_identifier`
 * (o "jeito de la", igual ao claraval-landing). O `label` humano tambem vai como
 * campo escondido para leitura rapida no CRM.
 *
 * IMPORTANTE: estes identificadores tem o prefixo `euamomatriculas-` justamente
 * para NAO colidir com o form principal do claraval-landing (que usa
 * `landing-geral`). Assim, no RD da pra saber que o lead e do Eu Amo Matriculas
 * e, alem disso, de qual canal ele veio.
 *
 *  /          -> QR Code impresso na revista Direcional Escolas
 *  /revista   -> link da revista digital
 *  /palestra  -> QR Code / link divulgado nas palestras e eventos
 *  /vlupt     -> convite da parceria VLUPT
 *
 * Para criar uma rota nova: adicione a origem aqui e crie o
 * `src/app/<rota>/page.tsx` renderizando <Landing origin="..." />. O tracking
 * e o /admin passam a contar a rota automaticamente.
 */
export type Origin = "qrcode" | "revista" | "palestra" | "vlupt";

export interface OriginConfig {
  /** Rota da landing que usa esta origem — tambem e a chave no log de acesso. */
  path: string;
  /** conversion_identifier enviado ao RD Station. Unico por rota e por produto. */
  conversionIdentifier: string;
  /** Rotulo humano da origem (campo hidden `origem`). */
  label: string;
}

export const ORIGINS: Record<Origin, OriginConfig> = {
  qrcode: {
    path: "/",
    conversionIdentifier: "euamomatriculas-qrcode-revista",
    label: "Eu Amo Matriculas - QR Code (Revista Impressa)",
  },
  revista: {
    path: "/revista",
    conversionIdentifier: "euamomatriculas-revista-online",
    label: "Eu Amo Matriculas - Revista Online",
  },
  palestra: {
    path: "/palestra",
    conversionIdentifier: "euamomatriculas-palestra",
    label: "Eu Amo Matriculas - Palestra",
  },
  vlupt: {
    path: "/vlupt",
    conversionIdentifier: "euamomatriculas-vlupt",
    label: "Eu Amo Matriculas - Convite VLUPT",
  },
};

/** Rotas rastreadas, na ordem de exibicao do /admin. */
export const TRACKED_ROUTES = Object.values(ORIGINS).map((o) => o.path);
