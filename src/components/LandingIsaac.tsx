import Image from "next/image";
import { Heart, ArrowRight, ArrowDown, MessageCircle, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { LeadForm } from "./LeadForm";
import { PageViewTracker } from "./PageViewTracker";
import { VinhoTintaBand } from "./VinhoTintaBand";
import { ORIGINS, type Origin } from "@/lib/origin";

const WHATSAPP =
  "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20confirmar%20a%20reuni%C3%A3o%20do%20convite%20Alvorada%20Distribuidora%20para%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas.";

/** Dados do encontro â€” o Ãºnico lugar a editar quando a turma mudar. */
const EVENTO = [
  { label: "Data", value: "27 de outubro" },
  { label: "PerÃ­odo", value: "17h Ã s 22h" },
  { label: "Local", value: "BrasÃ­lia, Distrito Federal" },
];

/** ProgramaÃ§Ã£o da formaÃ§Ã£o presencial (5h). */
const PROGRAMACAO = [
  {
    hora: "17h00",
    dur: "30 min",
    titulo: "Credenciamento e boas-vindas",
    texto:
      "RecepÃ§Ã£o do lÃ­der e do membro do time, entrega do material de trabalho e alinhamento do que cada escola quer resolver no dia.",
    topicos: [],
  },
  {
    hora: "17h30",
    dur: "25 min",
    titulo: "Campanha de matrÃ­culas: da atraÃ§Ã£o Ã  retenÃ§Ã£o",
    texto:
      "Quem jÃ¡ tem campanha rodando revisa e identifica os gargalos. Quem ainda nÃ£o tem campanha estruturada sai daqui com ela desenhada.",
    topicos: ["Canais", "Funis", "Metas", "Indicadores", "ICP Â· definiÃ§Ã£o da famÃ­lia ideal"],
  },
  {
    hora: "17h55",
    dur: "30 min",
    titulo: "Canais de atraÃ§Ã£o e prospecÃ§Ã£o ativa",
    texto:
      "Como parar de depender sÃ³ do trÃ¡fego pago. AtivaÃ§Ã£o de atÃ© 20 canais e construÃ§Ã£o da rotina de prospecÃ§Ã£o com cadÃªncias e roteiros de primeiro contato.",
    topicos: ["AtÃ© 20 canais ativados", "Rotina de prospecÃ§Ã£o", "CadÃªncias e roteiros de contato"],
  },
  {
    hora: "18h25",
    dur: "50 min",
    titulo: "Como estruturar o processo comercial",
    texto:
      "Da bagunÃ§a ao playbook: as cerimÃ´nias da rotina comercial, os processos de cada etapa e os 7 passos da matrÃ­cula desenhados para a sua escola.",
    topicos: ["CRM", "CerimÃ´nias e rotina", "Playbook comercial", "Os 7 passos da matrÃ­cula"],
  },
  {
    hora: "19h45",
    dur: "55 min",
    titulo: "A importÃ¢ncia de uma apresentaÃ§Ã£o eficaz",
    texto:
      "Estruturando a sua apresentaÃ§Ã£o em introduÃ§Ã£o, desenvolvimento e conclusÃ£o, com storytelling, rapport e gatilhos mentais aplicados Ã s matrÃ­culas.",
    topicos: [
      "IntroduÃ§Ã£o, desenvolvimento e conclusÃ£o",
      "Storytelling nas matrÃ­culas",
      "Como fazer um Ã³timo rapport",
      "Gatilhos mentais",
      "Recursos visuais que potencializam a matrÃ­cula",
    ],
  },
  {
    hora: "19h15",
    dur: "30 min",
    titulo: "Coffee break especial",
    texto:
      "Mais que um coffee break: uma pausa com harmonizaÃ§Ã£o de doces e salgados servida no espaÃ§o da formaÃ§Ã£o. Momento de troca entre as escolas participantes.",
    topicos: [],
  },
  {
    hora: "20h10",
    dur: "60 min",
    titulo: "Vinho e Tinta",
    texto:
      "Pintura guiada acompanhada de degustaÃ§Ã£o de vinhos, o vinho Ã© opcional. Um respiro no meio da formaÃ§Ã£o, com foco no cuidado com o time e na uniÃ£o antes do Ãºltimo bloco.",
    topicos: [],
  },
  {
    hora: "20h40",
    dur: "35 min",
    titulo: "Como contornar objeÃ§Ãµes",
    texto:
      "ConexÃ£o e confianÃ§a construÃ­das antes de falar de preÃ§o. Cada objeÃ§Ã£o mapeada com resposta treinada e o fechamento conduzido atÃ© a assinatura.",
    topicos: ["Mapa de objeÃ§Ãµes", "Ancoragem de valor", "ConduÃ§Ã£o atÃ© a assinatura"],
  },
  {
    hora: "21h15",
    dur: "15 min",
    titulo: "Plano de 30 dias e certificados",
    texto:
      "O que a sua escola executa nas prÃ³ximas quatro semanas, escrito antes de sair da sala. Entrega dos certificados.",
    topicos: [],
  },
];

/* Para quem Ã© */
const PAINS = [
  {
    lead: "Chegam muitos leads, mas eles nÃ£o viram matrÃ­cula.",
    rest: "E vocÃª nunca sabe se o problema estÃ¡ no trÃ¡fego pago ou no seu atendimento.",
  },
  {
    lead: "VocÃª jÃ¡ levou o time para treinamento.",
    rest: "Voltou animado, cheio de ideiaâ€¦ e em 30 dias estava tudo exatamente igual.",
  },
  {
    lead: "VocÃª aprende, estuda, evolui,",
    rest: "mas a escola nÃ£o acompanha o seu ritmo. O conhecimento fica em vocÃª e nÃ£o vira execuÃ§Ã£o na ponta.",
  },
  {
    lead: "VocÃª nÃ£o quer mais um curso, consultoria ou assessoria.",
    rest: "Quer um plano para executar, com gente que jÃ¡ escalou de verdade do seu lado, o ano inteiro.",
  },
  {
    lead: "A escola cresceu e vocÃª perdeu a clareza.",
    rest: "Mais gente, menos matrÃ­culas, mais bagunÃ§a. Falta processo, falta margem, falta previsibilidade.",
  },
  {
    lead: "VocÃª criou atÃ© sala de matrÃ­culas, mas nÃ£o tem mÃ¡quina de vendas.",
    rest: "Quando o melhor da equipe sai, a meta vai junto com ele.",
  },
  {
    lead: "O concorrente cresce mais rÃ¡pido e mais leve, com um ensino inferior ao seu.",
    rest: "Por que as famÃ­lias nÃ£o enxergam essa diferenÃ§a?",
  },
  {
    lead: "O atendimento diz que estÃ¡ sobrecarregado,",
    rest: "mas vocÃª acredita que o time pode se organizar melhor.",
  },
];

/* O que Ã© o Eu Amo MatrÃ­culas */
const PILLARS = [
  {
    n: "01",
    title: "FormaÃ§Ã£o presencial de 5 horas",
    text: "Para o lÃ­der e o time, na sua escola e com certificado. Abordagem, rapport, apresentaÃ§Ã£o e qualificaÃ§Ã£o treinados na prÃ¡tica.",
  },
  {
    n: "02",
    title: "Treinamentos online semanais",
    text: "Encontros ao vivo para o time de matrÃ­culas e para a lideranÃ§a, mantendo todo mundo no mesmo ritmo de evoluÃ§Ã£o.",
  },
  {
    n: "03",
    title: "Monitoramento e AvaliaÃ§Ã£o em tempo real",
    text: "Cada atendimento e cada matrÃ­cula acompanhados e devolvidos ao grupo, com revisÃ£o contÃ­nua da campanha.",
  },
  {
    n: "04",
    title: "Todas as camadas no mesmo mÃ©todo",
    text: "Mantenedor, gestores, lideranÃ§a e time de matrÃ­culas, cada um com sua trilha, dentro de um Ãºnico mÃ©todo.",
  },
];

/* O que vocÃª irÃ¡ receber e construir conosco */
const METHOD = [
  "Rotina de prospecÃ§Ã£o construÃ­da, treinada e cobrada.",
  "DefiniÃ§Ã£o da famÃ­lia que a sua escola quer atender.",
  "Canais, cadÃªncias, roteiros e templates de contato.",
  "A apresentaÃ§Ã£o da escola virando processo repetÃ­vel.",
  "ConexÃ£o e confianÃ§a construÃ­das antes de falar de preÃ§o.",
  "Fechamento conduzido atÃ© a assinatura, nÃ£o esperado.",
  "Cada objeÃ§Ã£o mapeada e contornada com resposta treinada.",
  "PÃ³s-venda e onboarding orquestrados para reter quem entra.",
];

/* Os 3 pilares */
const TRES_PILARES = [
  {
    roman: "I",
    title: "EstruturaÃ§Ã£o",
    text: "FormaÃ§Ã£o presencial de 5 horas, com certificado, para o lÃ­der e o time. Pente fino no CRM e no funil: processos, papÃ©is e metas definidos antes da campanha comeÃ§ar.",
    hasNote: false,
  },
  {
    roman: "II",
    title: "EvoluÃ§Ã£o",
    text: "Treinamentos online semanais ao vivo para o time de matrÃ­culas e encontros de lideranÃ§a. Role-play, materiais, roteiros e gravaÃ§Ãµes liberadas.",
    hasNote: false,
  },
  {
    roman: "III",
    title: "Monitoramento",
    text: "AvaliaÃ§Ã£o dos atendimentos em tempo real, devolvida no grupo para atendentes e lideranÃ§a, com revisÃ£o contÃ­nua da campanha de matrÃ­culas.",
    hasNote: true,
  },
];

export function LandingIsaac({ origin = "isaac" }: { origin?: Origin }) {
  const isAlvorada = origin === "alvorada";
  const partnerName = isAlvorada ? "Alvorada Distribuidora" : "ISAAC";
  const partnerLogo = isAlvorada ? "/logos/alvorada.png" : "/logos/isaac-negativo.png";
  return (
    <div className="relative">
      <PageViewTracker route={ORIGINS[origin].path} />

      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            href="#topo"
            className="flex items-center gap-1.5 font-display text-lg tracking-tight text-text-strong"
          >
            <span>Eu AMO</span>
            <Heart size={16} className="fill-red-500 text-red-500" />
            <span>MatrÃ­culas</span>
          </a>
          <a
            href="#formulario"
            className="hidden shrink-0 whitespace-nowrap rounded-full border border-red-500/40 px-5 py-2 text-[13px] font-medium text-text-strong transition-colors hover:border-red-600 hover:bg-red-600 sm:inline-block"
          >
            Agendar reuniÃ£o
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="topo" className="relative overflow-hidden px-6 pt-24 pb-22 lg:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[120px]"
          style={{ background: "var(--red-600)" }}
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="rise d1 mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              <span className="inline-block h-px w-8 bg-red-500" />
              Convite especial {partnerName}
            </p>

            <h1 className="rise d2 font-display text-[2.6rem] font-medium leading-[1.06] text-text-strong sm:text-[3.4rem] lg:text-[3.9rem]">
              A maior{" "}
              <span className="relative inline-block">
                formaÃ§Ã£o
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-red-500"
                  style={{ animation: "drawLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s backwards" }}
                />
              </span>{" "}
              de matrÃ­culas do Brasil
            </h1>

            <p className="rise d3 mt-8 max-w-[58ch] text-[17px] leading-relaxed text-text-muted">
              A {partnerName} e a Claraval tÃªm um convite especial para trazer resultado Ã  sua
              campanha de matrÃ­culas. Treinar o seu time para ampliar a atraÃ§Ã£o e
              conversÃ£o de matrÃ­culas.
            </p>

            <div className="rise d3 mt-7 flex flex-wrap gap-x-10 gap-y-3.5">
              {EVENTO.map((i) => (
                <div key={i.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">
                    {i.label}
                  </p>
                  <p className="mt-1.5 font-display text-[1.15rem] text-text-strong">{i.value}</p>
                </div>
              ))}
            </div>

            {/* Card do convite */}
            <div className="rise d4 mt-7 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-[30px] py-[26px]">
              <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
                <div className="flex flex-wrap items-baseline gap-3.5">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-text-faint">
                    Investimento
                  </span>
                  <span className="font-display text-[1.6rem] text-text-faint line-through">
                    R$ 3.000,00
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-display text-[1rem] text-paper-200">Convidado</span>
                  {isAlvorada ? (
                    <Image
                      src={partnerLogo}
                      alt={partnerName}
                      width={1600}
                      height={459}
                      className="h-[48px] w-[178px] rounded-md object-cover"
                    />
                  ) : (
                    <Image
                      src={partnerLogo}
                      alt={partnerName}
                      width={1259}
                      height={392}
                      className="h-[34px] w-auto"
                    />
                  )}
                </div>
              </div>
              <p className="text-[15.5px] leading-relaxed text-text-muted">
                Para o lÃ­der, acompanhado de um membro do time.
              </p>
            </div>

            <p className="rise d4 mt-4 max-w-[52ch] text-[14px] leading-relaxed text-text-faint">
              Agende uma reuniÃ£o com o consultor da {partnerName} para alinhar tudo e confirmar a
              participaÃ§Ã£o do seu time na formaÃ§Ã£o presencial.
            </p>

            <div className="rise d5 mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#formulario"
                className="group inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500"
              >
                Quero agendar a reuniÃ£o
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#formacao"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted transition-colors hover:text-text-strong"
              >
                ConheÃ§a a formaÃ§Ã£o
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="rise d3 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video
                src="/videos/lp-matriculas.mp4"
                poster="/fotos/formacao-sala.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Video da formacao Eu Amo Matriculas"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-6">
                <p className="font-display text-[1.15rem] leading-snug text-text-strong">
                  Um time que treina junto matricula junto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLARAVAL COM VINHO TINTA ================= */}
      <VinhoTintaBand />

      {/* ================= PARA QUEM E ================= */}
      <section className="border-y border-white/[0.06] px-6 py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              <span className="inline-block h-px w-8 bg-red-500" />
              Para quem Ã©
            </p>
            <h2 className="max-w-[17ch] font-display text-[2rem] font-semibold leading-[1.1] text-text-strong sm:text-[2.6rem]">
              Se vocÃª se identifica com essa situaÃ§Ã£o:
              <br />
              <span className="text-red-400">o Eu Amo MatrÃ­culas foi feito para vocÃª</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {PAINS.map((p, i) => (
              <ScrollReveal key={p.lead} delay={i * 60} className="h-full">
                <div className="flex h-full gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-[22px] transition-colors hover:border-red-500/40 hover:bg-red-600/[0.06]">
                  <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-paper-50">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-text-muted">
                    <strong className="font-bold text-text-strong">{p.lead}</strong> {p.rest}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= O QUE E (fundo claro) ================= */}
      <section
        id="formacao"
        className="border-y border-white/[0.06] bg-paper-50 px-6 py-28 text-ink-900"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              O que Ã© o Eu Amo MatrÃ­culas
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.8rem]">
              Um movimento para trazer resultado Ã  sua campanha de matrÃ­culas
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink-900/70">
              O conhecimento sai da teoria e vira execuÃ§Ã£o na ponta. A escola inteira
              entra no mesmo mÃ©todo, do mantenedor ao time de matrÃ­culas, e a Ã¡rea
              comercial passa a operar em desenvolvimento contÃ­nuo.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-red-600/50 pt-6">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-red-600">
                    {p.n}
                  </span>
                  <h3 className="mt-5 font-display text-[1.3rem] font-semibold leading-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-900/70">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= O QUE VOCE RECEBE E CONSTROI ================= */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h3 className="mx-auto mb-12 max-w-[24ch] text-center font-display text-[1.7rem] font-semibold leading-[1.15] text-text-strong sm:text-[2.2rem]">
              O que vocÃª irÃ¡ receber e construir conosco
            </h3>
          </ScrollReveal>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {METHOD.map((m, i) => (
              <ScrollReveal key={m} delay={i * 60}>
                <div className="flex items-start gap-4 border-b border-white/[0.06] pb-6">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-red-500/30 text-red-400">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-text-muted">{m}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OS 3 PILARES (fundo claro) ================= */}
      <section className="border-y border-white/[0.06] bg-paper-50 px-6 py-28 text-ink-900">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-6 flex items-center gap-3.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              <span className="inline-block h-0.5 w-[30px] bg-red-600" />
              Como a evoluÃ§Ã£o acontece
            </p>
            <h2 className="mb-14 font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[3rem]">
              Os 3 pilares do <span className="text-red-600">Eu Amo MatrÃ­culas.</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {TRES_PILARES.map((p, i) => (
              <ScrollReveal key={p.roman} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink-900/[0.12] bg-red-600/[0.04] px-[30px] pt-[30px] pb-[34px]">
                  <span className="font-display text-[1.15rem] font-semibold tracking-[0.12em] text-red-600">
                    {p.roman}
                  </span>
                  <h3 className="mt-5 font-display text-[1.2rem] font-semibold uppercase tracking-[0.02em] text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-4.5 text-[14.5px] leading-relaxed text-ink-900/70">{p.text}</p>
                  {p.hasNote && (
                    <p className="mt-4.5 text-[14.5px] leading-relaxed text-ink-900/70">
                      Feito pela <strong className="font-semibold text-red-600">IA Clara</strong> e
                      pelos analistas da Claraval.
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-6 grid items-center gap-14 rounded-2xl border border-ink-900/[0.12] bg-red-600/[0.04] px-10 py-11 lg:grid-cols-[0.9fr_2fr]">
              <div className="text-center">
                <p className="font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.03em] text-red-600 sm:text-[4.2rem]">
                  <span className="align-[0.42em] text-[0.5em]">+</span>70
                </p>
                <p className="mt-2.5 font-display text-[1.15rem] font-semibold uppercase tracking-[0.08em] text-ink-900">
                  EstÃ­mulos
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-900/55">
                  Ao longo dos 3 meses
                </p>
              </div>
              <p className="text-[16px] leading-[1.75] text-ink-900/70">
                Mantenedor, gestores, lideranÃ§as e time de matrÃ­culas no mesmo ritmo de
                evoluÃ§Ã£o, cada camada com sua trilha, todas dentro do mesmo mÃ©todo. O
                resultado Ã© uma Ã¡rea comercial que para de oscilar em picos de animaÃ§Ã£o e
                passa a operar em desenvolvimento contÃ­nuo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="font-display text-[5rem] leading-none text-red-500/70">&ldquo;</span>
            <blockquote className="-mt-6 font-display text-[1.7rem] font-medium italic leading-snug text-text-strong sm:text-[2.1rem]">
              A Ã¡rea comercial para de oscilar em picos de animaÃ§Ã£o e passa a operar em
              desenvolvimento contÃ­nuo.
            </blockquote>
            <div className="mt-9 flex flex-col items-center gap-1">
              <p className="text-[15px] font-semibold text-text-strong">Fernando Zago</p>
              <p className="text-[13px] uppercase tracking-[0.2em] text-text-faint">
                CEO da Academia Claraval
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PROGRAMACAO (fundo claro) ================= */}
      <section className="border-y border-white/[0.06] bg-paper-50 px-6 py-26 text-ink-900">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              <span className="inline-block h-0.5 w-[30px] bg-red-600" />
              ProgramaÃ§Ã£o Â· 27 de outubro Â· 17h Ã s 22h
            </p>
            <h2 className="max-w-[26ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.7rem]">
              Cinco horas de formaÃ§Ã£o comercial, com experiÃªncia de Vinho e Tinta
            </h2>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-900/70">
              Cada bloco combina conteÃºdo, construÃ§Ã£o e prÃ¡tica guiada. O lÃ­der e o membro
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
                  A experiÃªncia Vinho e Tinta
                </p>
                <h3 className="max-w-[24ch] font-display text-[1.85rem] font-semibold leading-[1.15] text-ink-900">
                  O cuidado com o time tambÃ©m faz parte do mÃ©todo
                </h3>
                <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-900/70">
                  Uma pintura guiada acompanhada de degustaÃ§Ã£o de vinhos, o vinho Ã©
                  opcional. Foco no cuidado com o time, saÃºde mental e um momento real de
                  descompressÃ£o e uniÃ£o.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* eslint-disable @next/next/no-img-element */}
                <div className="col-span-2 overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                  <img
                    src="/fotos/tinto-tinta-apresentacao.jpg"
                    alt="Time reunido na experiÃªncia de pintura guiada"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                  <img
                    src="/fotos/tinto-tinta-jantar.jpg"
                    alt="Tela, taÃ§a e degustaÃ§Ã£o na experiÃªncia Vinho e Tinta"
                    className="h-[140px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[14px] border border-ink-900/[0.12]">
                  <img
                    src="/fotos/tela-palmeira.jpg"
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

      {/* ================= FORM ================= */}
      <section id="formulario" className="border-t border-white/[0.06] px-6 py-30">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              Agendar a reuniÃ£o
            </p>
            <h2 className="max-w-[18ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.7rem]">
              Treine o seu time na Academia Claraval
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-muted">
              Preencha o formulÃ¡rio para agendar a sua reuniÃ£o. Um consultor da {partnerName} entra
              em contato com a sua escola para alinhar tudo e confirmar a participaÃ§Ã£o do
              seu time na formaÃ§Ã£o presencial.
              <br />
              <br />
              As vagas sÃ£o limitadas e sujeitas a confirmaÃ§Ã£o.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <LeadForm origin={origin} />
          </ScrollReveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06] px-6 py-14">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-1.5 font-display text-lg text-text-strong">
            <span>Eu AMO</span>
            <Heart size={16} className="fill-red-500 text-red-500" />
            <span>MatrÃ­culas</span>
          </div>
          <p className="mt-4 text-[14px] text-text-muted">
            Uma iniciativa da{" "}
            <a
              href="https://www.academiaclaraval.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 underline-offset-4 hover:underline"
            >
              Academia Claraval
            </a>
          </p>
          <p className="mt-2 text-[13px] text-text-faint">www.euamomatriculas.com.br</p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-paper-50 shadow-[var(--shadow-red)] transition-transform hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

