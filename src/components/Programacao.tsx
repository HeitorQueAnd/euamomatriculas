import { ScrollReveal } from "./ScrollReveal";

const PROGRAMACAO = [
  {
    hora: "13h30",
    dur: "30 min",
    titulo: "Credenciamento e boas-vindas",
    texto:
      "Recepção do líder e do membro do time, entrega do material de trabalho e alinhamento do que cada escola quer resolver no dia.",
    topicos: [],
  },
  {
    hora: "14h00",
    dur: "25 min",
    titulo: "Campanha de matrículas: da atração à retenção",
    texto:
      "Quem já tem campanha rodando revisa e identifica os gargalos. Quem ainda não tem campanha estruturada sai daqui com ela desenhada.",
    topicos: ["Canais", "Funis", "Metas", "Indicadores", "ICP · definição da família ideal"],
  },
  {
    hora: "14h25",
    dur: "30 min",
    titulo: "Canais de atração e prospecção ativa",
    texto:
      "Como parar de depender só do tráfego pago. Ativação de até 20 canais e construção da rotina de prospecção com cadências e roteiros de primeiro contato.",
    topicos: ["Até 20 canais ativados", "Rotina de prospecção", "Cadências e roteiros de contato"],
  },
  {
    hora: "14h55",
    dur: "50 min",
    titulo: "Como estruturar o processo comercial",
    texto:
      "Da bagunça ao playbook: as cerimônias da rotina comercial, os processos de cada etapa e os 7 passos da matrícula desenhados para a sua escola.",
    topicos: ["CRM", "Cerimônias e rotina", "Playbook comercial", "Os 7 passos da matrícula"],
  },
  {
    hora: "15h45",
    dur: "55 min",
    titulo: "A importância de uma apresentação eficaz",
    texto:
      "Estruturando a sua apresentação em introdução, desenvolvimento e conclusão, com storytelling, rapport e gatilhos mentais aplicados às matrículas.",
    topicos: [
      "Introdução, desenvolvimento e conclusão",
      "Storytelling nas matrículas",
      "Como fazer um ótimo rapport",
      "Gatilhos mentais",
      "Recursos visuais que potencializam a matrícula",
    ],
  },
  {
    hora: "16h40",
    dur: "30 min",
    titulo: "Recreio do Futuro com a VLUPT",
    texto:
      "Mais que um coffee break: uma pausa com harmonização de doces e salgados servida no espaço da formação. Momento de troca entre as escolas participantes e uma experiência do recreio do futuro com a VLUPT.",
    topicos: [],
  },
  {
    hora: "17h10",
    dur: "60 min",
    titulo: "Vinho e Tinta",
    texto:
      "Pintura guiada acompanhada de degustação de vinhos, o vinho é opcional. Um respiro no meio da formação, com foco no cuidado com o time e na união antes do último bloco.",
    topicos: [],
  },
  {
    hora: "18h10",
    dur: "35 min",
    titulo: "Como contornar objeções",
    texto:
      "Conexão e confiança construídas antes de falar de preço. Cada objeção mapeada com resposta treinada e o fechamento conduzido até a assinatura.",
    topicos: ["Mapa de objeções", "Ancoragem de valor", "Condução até a assinatura"],
  },
  {
    hora: "18h45",
    dur: "15 min",
    titulo: "Plano de 30 dias e certificados",
    texto:
      "O que a sua escola executa nas próximas quatro semanas, escrito antes de sair da sala. Entrega dos certificados.",
    topicos: [],
  },
];

export function Programacao() {
  return (
    <section className="border-y border-white/[0.06] bg-paper-50 px-6 py-26 text-ink-900">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
            <span className="inline-block h-0.5 w-[30px] bg-red-600" />
            Programação · 9 de setembro · 14h às 19h
          </p>
          <h2 className="max-w-[26ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.7rem]">
            Cinco horas de formação comercial, com experiência de Vinho e Tinta
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-900/70">
            Cada bloco combina conteúdo, construção e prática guiada. O líder e o membro
            do time saem com processo desenhado, roteiros escritos e a primeira rodada de
            treino feita.
          </p>
        </ScrollReveal>
    
        <div className="mt-14 flex flex-col">
          {PROGRAMACAO.map((b, i) => (
            <ScrollReveal key={b.hora} delay={i * 50}>
              <div className="grid gap-8 border-t border-ink-900/[0.14] py-[26px] sm:grid-cols-[150px_1fr]">
                <div>
                  <p className="font-display text-[1.3rem] font-semibold tracking-[-0.01em] text-red-600">
                    {b.hora}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-900/50">
                    {b.dur}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-ink-900">
                    {b.titulo}
                  </h3>
                  <p className="mt-2.5 max-w-[74ch] text-[15px] leading-relaxed text-ink-900/70">
                    {b.texto}
                  </p>
                  {b.topicos.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {b.topicos.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink-900/[0.14] bg-red-600/[0.05] px-[15px] py-[7px] text-[13px] font-medium text-ink-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
    
        {/* Vinho e Tinta em destaque */}
        <ScrollReveal delay={120}>
          <div className="mt-14 grid items-center gap-10 rounded-[18px] border border-ink-900/[0.12] bg-red-600/[0.04] p-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-600">
                A experiência Vinho e Tinta
              </p>
              <h3 className="max-w-[24ch] font-display text-[1.85rem] font-semibold leading-[1.15] text-ink-900">
                O cuidado com o time também faz parte do método
              </h3>
              <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-900/70">
                Uma pintura guiada acompanhada de degustação de vinhos, o vinho é
                opcional. Foco no cuidado com o time, saúde mental e um momento real de
                descompressão e união.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* eslint-disable @next/next/no-img-element */}
              <div className="col-span-2 overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                <img
                  src="/fotos/evento.jpg"
                  alt="Time reunido na experiência de pintura guiada"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                <img
                  src="/fotos/vinho-tinta.jpg"
                  alt="Tela, taça e degustação na experiência Vinho e Tinta"
                  className="h-[140px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                <img
                  src="/fotos/atelie.jpg"
                  alt="Cavalete e material de pintura preparados para o time"
                  className="h-[140px] w-full object-cover"
                />
              </div>
              {/* eslint-enable @next/next/no-img-element */}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
