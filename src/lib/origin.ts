/**
 * Origem do lead por rota.
 *
 * A landing e identica nas duas rotas; o que muda e a origem carimbada no RD
 * Station. O RD diferencia as conversoes pelo campo hidden `conversion_identifier`
 * (o "jeito de la", igual ao claraval-landing). O `label` humano tambem vai como
 * campo escondido para leitura rapida no CRM.
 *
 * IMPORTANTE: estes identificadores tem o prefixo `euamomatriculas-` justamente
 * para NAO colidir com o form principal do claraval-landing (que usa
 * `landing-geral`). Assim, no RD da pra saber que o lead e do Eu Amo Matriculas
 * e, alem disso, se veio da rota raiz (QR Code impresso) ou da /revista (digital).
 *
 *  /         -> QR Code impresso na revista Direcional Escolas
 *  /revista  -> link da revista digital
 */
export type Origin = "qrcode" | "revista";

export interface OriginConfig {
  /** conversion_identifier enviado ao RD Station. Unico por rota e por produto. */
  conversionIdentifier: string;
  /** Rotulo humano da origem (campo hidden `origem`). */
  label: string;
}

export const ORIGINS: Record<Origin, OriginConfig> = {
  qrcode: {
    conversionIdentifier: "euamomatriculas-qrcode-revista",
    label: "Eu Amo Matriculas - QR Code (Revista Impressa)",
  },
  revista: {
    conversionIdentifier: "euamomatriculas-revista-online",
    label: "Eu Amo Matriculas - Revista Online",
  },
};
