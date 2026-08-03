import { Heart, ArrowRight, ArrowDown, Users, TrendingUp, Award, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { LeadForm } from "./LeadForm";
import type { Origin } from "@/lib/origin";

const WHATSAPP =
  "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Team%20Building%20com%20Vinho%20para%20minha%20escola";

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
  { value: "22", label: "Anos de estrada" },
];

const REASONS = [
  {
    icon: Users,
    title: "Integração real do time",
    text: "Uma experiência sensorial que quebra barreiras e conecta pessoas de forma autêntica antes da temporada de matrículas.",
  },
  {
    icon: TrendingUp,
    title: "Time motivado vende mais",
    text: "O engajamento gerado na experiência se traduz em abordagem, retenção e conversão ao longo de toda a captação.",
  },
  {
    icon: Award,
    title: "Método das grandes empresas",
    text: "O mesmo formato adotado por Google, Netflix, Nubank e Natura, adaptado para o setor educacional pela Academia Claraval.",
  },
];

export function Landing({ origin }: { origin: Origin }) {
  return (
    <div className="relative">
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
            Quero participar
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="topo" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20">
        {/* halo de vinho discreto, sem degrade forte */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[120px]"
          style={{ background: "var(--red-600)" }}
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="rise d1 mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              <span className="inline-block h-px w-8 bg-red-500" />
              Team building exclusivo
            </p>

            <h1 className="rise d2 font-display text-[2.7rem] font-medium leading-[1.05] text-text-strong sm:text-[3.6rem] lg:text-[4.1rem]">
              Como o vinho está
              <br />
              multiplicando{" "}
              <span className="relative inline-block">
                matrículas
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-red-500"
                  style={{ animation: "drawLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s backwards" }}
                />
              </span>
              ?
            </h1>

            <p className="rise d3 mt-8 max-w-[52ch] text-[17px] leading-relaxed text-text-muted">
              O team building escolhido por Google, Netflix, Nubank e Natura, agora
              aplicado aos times de matrículas e retenção da sua escola. Uma
              experiência guiada por degustação, com método e propósito.
            </p>

            <div className="rise d4 mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#formulario"
                className="group inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500"
              >
                Quero participar
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#porque"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted transition-colors hover:text-text-strong"
              >
                Entenda o método
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

          {/* Coluna editorial: eco da capa da revista */}
          <div className="rise d3 hidden lg:block">
            <div className="relative rounded-2xl border border-white/[0.08] bg-ink-900/60 p-8">
              <p className="font-display text-[13px] uppercase tracking-[0.3em] text-text-faint">
                Direcional Escolas
              </p>
              <p className="mt-1 text-[13px] text-text-faint">Edição 220 . Agosto 2026</p>
              <div className="my-7 h-px w-full bg-white/[0.08]" />
              <p className="font-display text-[1.6rem] italic leading-snug text-text-strong">
                O líder certo, no lugar certo, fazendo a coisa certa.
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/40 font-display text-red-400">
                  FZ
                </div>
                <div className="text-[13px] leading-tight">
                  <p className="font-semibold text-text-strong">Fernando Zago</p>
                  <p className="text-text-faint">CEO da Academia Claraval</p>
                </div>
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

      {/* ================= PORQUE ================= */}
      <section id="porque" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              O segredo das escolas que mais crescem
            </p>
            <h2 className="max-w-[20ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.8rem]">
              Por que unir vinho e matrículas
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-text-muted">
              As escolas que mais crescem investem na formação, no desenvolvimento e
              no acompanhamento das lideranças e dos seus times. Essa experiência
              coloca esse cuidado em prática antes da corrida por matrículas.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={r.title} delay={i * 100} className="h-full">
                  <div className="flex h-full flex-col bg-ink-950 p-9">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 text-red-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 font-display text-[1.35rem] text-text-strong">{r.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{r.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="border-y border-white/[0.06] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="font-display text-[5rem] leading-none text-red-500/70">&ldquo;</span>
            <blockquote className="-mt-6 font-display text-[1.7rem] font-medium italic leading-snug text-text-strong sm:text-[2.2rem]">
              O segredo de multiplicar matrículas de forma consistente está em cuidar
              das pessoas que fazem a captação acontecer.
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
      <section id="formulario" className="px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              Garanta sua vaga
            </p>
            <h2 className="max-w-[18ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.7rem]">
              Leve essa experiência para o seu time
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-muted">
              Deixe seu contato e nossa equipe fala com você para agendar a melhor
              data para a sua escola. Vagas limitadas por evento.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                "Resposta em até 24 horas úteis",
                "Proposta personalizada para sua escola",
                "Consultoria sobre estratégias de matrícula",
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
