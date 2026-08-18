import { Heart, ArrowRight, ArrowDown, MessageCircle, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { LeadForm } from "./LeadForm";
import { PageViewTracker } from "./PageViewTracker";
import { VinhoTintaBand } from "./VinhoTintaBand";
import { ORIGINS, type Origin } from "@/lib/origin";

const WHATSAPP =
  "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas%202026.";

/* Para quem é */
const PAINS = [
  {
    lead: "Chegam muitos leads, mas eles não viram matrícula.",
    rest: "E você nunca sabe se o problema está no tráfego pago ou no seu atendimento.",
  },
  {
    lead: "Você já levou o time para treinamento.",
    rest: "Voltou animado, cheio de ideia… e em 30 dias estava tudo exatamente igual.",
  },
  {
    lead: "Você aprende, estuda, evolui,",
    rest: "mas a escola não acompanha o seu ritmo. O conhecimento fica em você e não vira execução na ponta.",
  },
  {
    lead: "Você não quer mais um curso, consultoria ou assessoria.",
    rest: "Quer um plano para executar, com gente que já escalou de verdade do seu lado, o ano inteiro.",
  },
  {
    lead: "A escola cresceu e você perdeu a clareza.",
    rest: "Mais gente, menos matrículas, mais bagunça. Falta processo, falta margem, falta previsibilidade.",
  },
  {
    lead: "Você criou até sala de matrículas, mas não tem máquina de vendas.",
    rest: "Quando o melhor da equipe sai, a meta vai junto com ele.",
  },
  {
    lead: "O concorrente cresce mais rápido e mais leve, com um ensino inferior ao seu.",
    rest: "Por que as famílias não enxergam essa diferença?",
  },
  {
    lead: "O atendimento diz que está sobrecarregado,",
    rest: "mas você acredita que o time pode se organizar melhor.",
  },
];

/* O que é o Eu Amo Matrículas */
const PILLARS = [
  {
    n: "01",
    title: "Formação presencial de 5 horas",
    text: "Para o líder e o time, na sua escola e com certificado. Abordagem, rapport, apresentação e qualificação treinados na prática.",
  },
  {
    n: "02",
    title: "Treinamentos online semanais",
    text: "Encontros ao vivo para o time de matrículas e para a liderança, mantendo todo mundo no mesmo ritmo de evolução.",
  },
  {
    n: "03",
    title: "Monitoramento e Avaliação em tempo real",
    text: "Cada atendimento e cada matrícula acompanhados e devolvidos ao grupo, com revisão contínua da campanha.",
  },
  {
    n: "04",
    title: "Todas as camadas no mesmo método",
    text: "Mantenedor, gestores, liderança e time de matrículas, cada um com sua trilha, dentro de um único método.",
  },
];

/* O que você irá receber e construir conosco */
const METHOD = [
  "Rotina de prospecção construída, treinada e cobrada.",
  "Definição da família que a sua escola quer atender.",
  "Canais, cadências, roteiros e templates de contato.",
  "A apresentação da escola virando processo repetível.",
  "Conexão e confiança construídas antes de falar de preço.",
  "Fechamento conduzido até a assinatura, não esperado.",
  "Cada objeção mapeada e contornada com resposta treinada.",
  "Pós-venda e onboarding orquestrados para reter quem entra.",
];

/* Os 3 pilares */
const TRES_PILARES = [
  {
    roman: "I",
    title: "Estruturação",
    text: "Formação presencial de 5 horas, com certificado, para o líder e o time. Pente fino no CRM e no funil: processos, papéis e metas definidos antes da campanha começar.",
    hasNote: false,
  },
  {
    roman: "II",
    title: "Evolução",
    text: "Treinamentos online semanais ao vivo para o time de matrículas e encontros de liderança. Role-play, materiais, roteiros e gravações liberadas.",
    hasNote: false,
  },
  {
    roman: "III",
    title: "Monitoramento",
    text: "Avaliação dos atendimentos em tempo real, devolvida no grupo para atendentes e liderança, com revisão contínua da campanha de matrículas.",
    hasNote: true,
  },
];

const FOTOS = [
  { src: "/fotos/evento.jpg", alt: "Time reunido na experiência de pintura guiada" },
  { src: "/fotos/vinho-tinta.jpg", alt: "Tela, taça e degustação na experiência Vinho e Tinta" },
  { src: "/fotos/atelie.jpg", alt: "Cavalete e material de pintura preparados para o time" },
];

const CITIES = ["Brasília", "São Paulo", "Goiânia"];

const BENEFITS = [
  "Treinamentos online semanais ao vivo",
  "Acompanhamento dos atendimentos em tempo real",
];

export function Landing({ origin }: { origin: Origin }) {
  return (
    <div className="relative">
      {/* Log de acesso: registra a visita da rota em /api/track. */}
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
            <span>Matrículas</span>
          </a>
          <a
            href="#formulario"
            className="hidden rounded-full border border-red-500/40 px-5 py-2 text-[13px] font-medium text-text-strong transition-colors hover:border-red-600 hover:bg-red-600 sm:inline-block"
          >
            Treinar meu time
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
              Academia Claraval
            </p>

            <h1 className="rise d2 font-display text-[2.6rem] font-medium leading-[1.06] text-text-strong sm:text-[3.4rem] lg:text-[3.9rem]">
              A maior{" "}
              <span className="relative inline-block">
                formação
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-red-500"
                  style={{ animation: "drawLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s backwards" }}
                />
              </span>{" "}
              de matrículas do Brasil
            </h1>

            <p className="rise d3 mt-8 max-w-[52ch] text-[17px] leading-relaxed text-text-muted">
              Em vez de dicas e hacks, ensinamos processo, gestão e técnica de vendas.
              O líder e o time de atendimento da sua escola treinam juntos, na prática,
              dentro de um único método.
            </p>

            <div className="rise d4 mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#formulario"
                className="group inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500"
              >
                Quero treinar meu time
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#formacao"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted transition-colors hover:text-text-strong"
              >
                Conheça a formação
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="rise d3 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fotos/evento.jpg"
                alt="Time em formação na experiência da Academia Claraval"
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
              Para quem é
            </p>
            <h2 className="max-w-[17ch] font-display text-[2rem] font-semibold leading-[1.1] text-text-strong sm:text-[2.6rem]">
              Se você se identifica com essa situação:
              <br />
              <span className="text-red-400">o Eu Amo Matrículas foi feito para você</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {PAINS.map((p, i) => (
              <ScrollReveal key={p.lead} delay={i * 60} className="h-full">
                <div className="flex h-full gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-[22px] transition-colors hover:border-red-500/40 hover:bg-red-600/[0.06]">
                  <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-[13px] font-bold text-paper-50">
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
              O que é o Eu Amo Matrículas
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.8rem]">
              Um movimento para trazer resultado à sua campanha de matrículas
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink-900/70">
              O conhecimento sai da teoria e vira execução na ponta. A escola inteira
              entra no mesmo método, do mantenedor ao time de matrículas, e a área
              comercial passa a operar em desenvolvimento contínuo.
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
              O que você irá receber e construir conosco
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
              Como a evolução acontece
            </p>
            <h2 className="mb-14 font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[3rem]">
              Os 3 pilares do <span className="text-red-600">Eu Amo Matrículas.</span>
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
                  Estímulos
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-900/55">
                  Ao longo dos 3 meses
                </p>
              </div>
              <p className="text-[16px] leading-[1.75] text-ink-900/70">
                Mantenedor, gestores, lideranças e time de matrículas no mesmo ritmo de
                evolução, cada camada com sua trilha, todas dentro do mesmo método. O
                resultado é uma área comercial que para de oscilar em picos de animação e
                passa a operar em desenvolvimento contínuo.
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
              A área comercial para de oscilar em picos de animação e passa a operar em
              desenvolvimento contínuo.
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

      {/* ================= VINHO E TINTA (fotos, fundo claro) ================= */}
      <section className="border-y border-white/[0.06] bg-paper-50 px-6 py-24 text-ink-900">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              A experiência Vinho e Tinta
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.7rem]">
              O cuidado com o time também faz parte do método
            </h2>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-ink-900/70">
              As formações presenciais terminam com uma pintura guiada acompanhada de
              degustação de vinhos, o vinho é opcional. Um momento de saúde mental,
              descompressão e união, porque um time cuidado é um time que fica.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOTOS.map((f, i) => (
              <ScrollReveal key={f.src} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl border border-ink-900/[0.12]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.src}
                    alt={f.alt}
                    className="h-80 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="formulario" className="border-t border-white/[0.06] px-6 py-30">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              Entre na formação
            </p>
            <h2 className="max-w-[18ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.7rem]">
              Treine o seu time na Academia Claraval
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-muted">
              Deixe seu contato e nossa equipe fala com você para agendar a melhor data
              da sua escola entrar na formação. Vagas limitadas por turma.
            </p>

            <ul className="mt-9 space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-faint">
                Formação presencial com certificado
              </p>
              <div className="flex flex-wrap gap-2.5">
                {CITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/[0.12] px-[18px] py-[9px] text-[14px] font-medium text-text-strong"
                  >
                    {c}
                  </span>
                ))}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-red-500/55 bg-red-500/[0.12] px-[18px] py-[9px] text-[14px] font-semibold text-text-strong transition-colors hover:border-red-500 hover:bg-red-500"
                >
                  Leve para a sua cidade →
                </a>
              </div>
            </div>
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
            <span>Matrículas</span>
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
