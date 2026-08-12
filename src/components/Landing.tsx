import {
  Heart,
  ArrowRight,
  ArrowDown,
  MessageCircle,
  GraduationCap,
  MonitorPlay,
  Activity,
  Layers,
  Check,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { LeadForm } from "./LeadForm";
import { PageViewTracker } from "./PageViewTracker";
import { ORIGINS, type Origin } from "@/lib/origin";

const WHATSAPP =
  "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas%202026.";

const COMPANIES = [
  { src: "/logos/google.webp", alt: "Google", h: 24 },
  { src: "/logos/netflix.png", alt: "Netflix", h: 15 },
  { src: "/logos/nubank.png", alt: "Nubank", h: 17 },
  { src: "/logos/natura.png", alt: "Natura", h: 30 },
];

const STATS = [
  { value: "+500", label: "Escolas atendidas" },
  { value: "98%", label: "Taxa de satisfação" },
  { value: "+40%", label: "Aumento em conversões" },
  { value: "5h", label: "Formação com certificado" },
];

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Formação presencial de 5 horas",
    text: "Para o líder e o time, na sua escola e com certificado. Abordagem, rapport, apresentação e qualificação treinados na prática.",
  },
  {
    icon: MonitorPlay,
    title: "Treinamentos online semanais",
    text: "Encontros ao vivo para o time de matrículas e para a liderança, mantendo todo mundo no mesmo ritmo de evolução.",
  },
  {
    icon: Activity,
    title: "Avaliação em tempo real",
    text: "Cada atendimento e cada matrícula acompanhados e devolvidos ao grupo, com revisão contínua da campanha.",
  },
  {
    icon: Layers,
    title: "Todas as camadas no mesmo método",
    text: "Mantenedor, gestores, liderança e time de matrículas, cada um com sua trilha, dentro de um único método.",
  },
];

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

const PAINS = [
  "Chegam muitos leads, mas eles não viram matrícula.",
  "Você já treinou o time, mas o conhecimento não virou execução na ponta.",
  "Mais gente na equipe, menos matrículas, mais bagunça.",
  "Quando o melhor da equipe sai, a meta vai junto com ele.",
];

const FOTOS = [
  { src: "/fotos/evento.jpg", alt: "Time reunido na experiência de pintura guiada" },
  { src: "/fotos/vinho-tinta.jpg", alt: "Tela, taça e degustação na experiência Vinho e Tinta" },
  { src: "/fotos/atelie.jpg", alt: "Cavalete e material de pintura preparados para o time" },
];

export function Landing({ origin }: { origin: Origin }) {
  return (
    <div className="relative">
      {/* Log de acesso: registra a visita da rota em /api/track. */}
      <PageViewTracker route={ORIGINS[origin].path} />
      {/* ================= NAV ================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#topo" className="flex items-center gap-1.5 font-display text-lg tracking-tight text-text-strong">
            <span>Eu AMO</span>
            <Heart size={16} className="fill-red-500 text-red-500" />
            <span>Matrículas</span>
          </a>
          <a
            href="#formulario"
            className="hidden rounded-full border border-red-500/40 px-5 py-2 text-[13px] font-medium text-text-strong transition-colors hover:bg-red-600 hover:border-red-600 sm:inline-block"
          >
            Treinar meu time
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="topo" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20">
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
              O líder e o time da sua escola treinam juntos, na prática, dentro de um
              único método.
            </p>

            <div className="rise d4 mt-9 flex flex-wrap items-center gap-4">
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

            <div className="rise d5 mt-12">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-text-faint">
                Método adotado por
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {COMPANIES.map((c) => (
                  <div
                    key={c.alt}
                    className="flex h-12 items-center justify-center rounded-xl bg-paper-50 px-5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.src}
                      alt={c.alt}
                      style={{ height: c.h }}
                      className="w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foto real do evento */}
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

      {/* ================= STATS ================= */}
      <section className="border-y border-white/[0.06] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="font-display text-[2.6rem] font-medium leading-none text-text-strong">
                  {s.value}
                </p>
                <p className="mt-2 text-[14px] text-text-muted">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= O QUE E (FORMACAO) ================= */}
      <section id="formacao" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              O que é o Eu Amo Matrículas
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.8rem]">
              Uma formação completa, não mais um curso guardado na gaveta
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-text-muted">
              O conhecimento sai da teoria e vira execução na ponta. A escola inteira
              entra no mesmo método, do mantenedor ao time de matrículas, e a área
              comercial passa a operar em desenvolvimento contínuo.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.title} delay={i * 90} className="h-full">
                  <div className="flex h-full flex-col bg-ink-950 p-9">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 text-red-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 font-display text-[1.35rem] text-text-strong">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{p.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PARA QUEM E ================= */}
      <section className="border-y border-white/[0.06] px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              Isso soa familiar
            </p>
            <h2 className="max-w-[16ch] font-display text-[2rem] font-medium leading-[1.12] text-text-strong sm:text-[2.5rem]">
              Não é falta de esforço, é falta de método
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {PAINS.map((p) => (
                <li
                  key={p}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-[15px] leading-relaxed text-text-muted"
                >
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= O QUE O TIME TREINA ================= */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              O que o seu time treina
            </p>
            <h2 className="max-w-[22ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.8rem]">
              Uma máquina de matrículas, do primeiro contato à assinatura
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-x-10 gap-y-6 md:grid-cols-2">
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

      {/* ================= VINHO E TINTA (fotos) ================= */}
      <section className="border-y border-white/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              A experiência Vinho e Tinta
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.7rem]">
              O cuidado com o time também faz parte do método
            </h2>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-text-muted">
              As formações presenciais terminam com uma pintura guiada acompanhada de
              degustação de vinhos, o vinho é opcional. Um momento de saúde mental,
              descompressão e união, porque um time cuidado é um time que fica.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOTOS.map((f, i) => (
              <ScrollReveal key={f.src} delay={i * 100}>
                <div
                  className={`overflow-hidden rounded-2xl border border-white/[0.08] ${
                    i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.src}
                    alt={f.alt}
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.03] lg:h-80"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
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

      {/* ================= FORM ================= */}
      <section id="formulario" className="border-t border-white/[0.06] px-6 py-24 lg:py-32">
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
              {[
                "Formação presencial com certificado",
                "Treinamentos online semanais ao vivo",
                "Acompanhamento dos atendimentos em tempo real",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
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
