import Image from "next/image";
import { Heart, ArrowRight, ArrowDown, MessageCircle, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { LeadForm } from "./LeadForm";
import { PageViewTracker } from "./PageViewTracker";
import { ORIGINS, type Origin } from "@/lib/origin";

const WHATSAPP =
  "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas%202026.";

/** Programação da formação presencial (5h). */
const PROGRAMACAO = [
  {
    hora: "17h00",
    dur: "30 min",
    titulo: "Credenciamento e boas-vindas",
    texto:
      "Recepção do líder e do time, entrega do material de trabalho e alinhamento do que a escola quer resolver no dia.",
    topicos: [],
  },
  {
    hora: "17h30",
    dur: "25 min",
    titulo: "Campanha de matrículas: da atração à retenção",
    texto:
      "Quem já tem campanha rodando revisa e identifica os gargalos. Quem ainda não tem campanha estruturada sai daqui com ela desenhada.",
    topicos: ["Canais", "Funis", "Metas", "Indicadores", "ICP · definição da família ideal"],
  },
  {
    hora: "17h55",
    dur: "30 min",
    titulo: "Canais de atração e prospecção ativa",
    texto:
      "Como parar de depender só do tráfego pago. Ativação de até 20 canais e construção da rotina de prospecção com cadências e roteiros de primeiro contato.",
    topicos: ["Até 20 canais ativados", "Rotina de prospecção", "Cadências e roteiros de contato"],
  },
  {
    hora: "18h25",
    dur: "50 min",
    titulo: "Como estruturar o processo comercial",
    texto:
      "Da bagunça ao playbook: as cerimônias da rotina comercial, os processos de cada etapa e os 7 passos da matrícula desenhados para a sua escola.",
    topicos: ["CRM", "Cerimônias e rotina", "Playbook comercial", "Os 7 passos da matrícula"],
  },
  {
    hora: "19h45",
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
    hora: "19h15",
    dur: "30 min",
    titulo: "Coffee break especial",
    texto:
      "Pausa com harmonização de doces e salgados servida no espaço da formação. Momento de troca entre as escolas participantes.",
    topicos: [],
  },
  {
    hora: "20h40",
    dur: "35 min",
    titulo: "Como contornar objeções",
    texto:
      "Conexão e confiança construídas antes de falar de preço. Cada objeção mapeada com resposta treinada e o fechamento conduzido até a assinatura.",
    topicos: ["Mapa de objeções", "Ancoragem de valor", "Condução até a assinatura"],
  },
  {
    hora: "21h15",
    dur: "15 min",
    titulo: "Plano de 30 dias e certificados",
    texto:
      "O que a sua escola executa nas próximas quatro semanas, escrito antes de sair da sala. Entrega dos certificados.",
    topicos: [],
  },
];

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
    text: "Para o líder e o time da sua escola, com certificado. Abordagem, rapport, apresentação e qualificação treinados na prática.",
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
  { src: "/fotos/tinto-tinta-apresentacao.jpg", alt: "Apresentação da formação Tinto e Tinta", position: "object-[center_30%]" },
  { src: "/fotos/tinto-tinta-jantar.jpg", alt: "Jantar da formação Tinto e Tinta", position: "object-[60%_center]" },
  { src: "/fotos/tela-palmeira.jpg", alt: "Tela da experiência Tinto e Tinta", position: "object-[center_35%]" },
];

const CITIES = ["Brasília", "São Paulo", "Goiânia"];

const BENEFITS = [
  "Treinamentos online semanais ao vivo",
  "Acompanhamento dos atendimentos em tempo real",
];

const PROGRAMACAO_ALVORADA = [
  { hora: "17h00", dur: "15 min", titulo: "Credenciamento e boas-vindas", texto: "Recepção do líder e do membro do time, entrega do material de trabalho e alinhamento do que cada escola quer resolver no dia.", topicos: [] },
  { hora: "17h15", dur: "25 min", titulo: "Campanha de matrículas: da atração à retenção", texto: "Quem já tem campanha rodando revisa e identifica os gargalos. Quem ainda não tem campanha estruturada sai daqui com ela desenhada.", topicos: ["Canais", "Funis", "Metas", "Indicadores", "ICP · definição da família ideal"] },
  { hora: "17h40", dur: "30 min", titulo: "Canais de atração e prospecção ativa", texto: "Como parar de depender só do tráfego pago. Ativação de até 20 canais e construção da rotina de prospecção com cadências e roteiros de primeiro contato.", topicos: ["Até 20 canais ativados", "Rotina de prospecção", "Cadências e roteiros de contato"] },
  { hora: "18h10", dur: "50 min", titulo: "Como estruturar o processo comercial", texto: "Da bagunça ao playbook: as cerimônias da rotina comercial, os processos de cada etapa e os 7 passos da matrícula desenhados para a sua escola.", topicos: ["CRM", "Cerimônias e rotina", "Playbook comercial", "Os 7 passos da matrícula"] },
  { hora: "19h00", dur: "55 min", titulo: "A importância de uma apresentação eficaz", texto: "Estruturando a sua apresentação em introdução, desenvolvimento e conclusão, com storytelling, rapport e gatilhos mentais aplicados às matrículas.", topicos: ["Introdução, desenvolvimento e conclusão", "Storytelling nas matrículas", "Como fazer um ótimo rapport", "Gatilhos mentais", "Recursos visuais que potencializam a matrícula"] },
  { hora: "19h55", dur: "15 min", titulo: "Coffee break especial", texto: "Pausa com harmonização de doces e salgados servida no espaço da formação. Momento de troca entre as escolas participantes.", topicos: [] },
  { hora: "20h10", dur: "60 min", titulo: "Tinto e Tinta", texto: "Pintura guiada acompanhada de degustação de vinhos, o vinho é opcional. Um respiro no meio da formação, com foco no cuidado com o time e na união antes do último bloco.", topicos: [] },
  { hora: "21h10", dur: "35 min", titulo: "Como contornar objeções", texto: "Conexão e confiança construídas antes de falar de preço. Cada objeção mapeada com resposta treinada e o fechamento conduzido até a assinatura.", topicos: ["Mapa de objeções", "Ancoragem de valor", "Condução até a assinatura"] },
  { hora: "21h45", dur: "15 min", titulo: "Plano de 30 dias e certificados", texto: "O que a sua escola executa nas próximas quatro semanas, escrito antes de sair da sala. Entrega dos certificados.", topicos: [] },
];

function AlvoradaHero() {
  return (
    <div>
      <p className="rise d1 mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400"><span className="inline-block h-px w-8 bg-red-500" />Convite especial Alvorada</p>
      <h1 className="rise d2 font-display text-[2.6rem] font-medium leading-[1.06] text-text-strong sm:text-[3.4rem] lg:text-[3.9rem]">O maior <span className="relative inline-block">movimento<span aria-hidden className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-red-500" style={{ animation: "drawLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s backwards" }} /></span> de matrículas do Brasil</h1>
      <p className="rise d3 mt-8 max-w-[56ch] text-[17px] leading-relaxed text-text-muted">A Alvorada e a Claraval têm um convite especial para trazer resultado à sua campanha de matrículas. Treinar o seu time para ampliar a atração e a conversão de matrículas.</p>
      <div className="rise d3 mt-7 flex flex-wrap gap-x-10 gap-y-3.5"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Data</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">27 de outubro</p></div><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Período</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">17h às 22h</p></div><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Local</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">Brasília, Distrito Federal</p></div></div>
      <div className="rise d4 mt-7 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-[30px] py-[26px]"><div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5"><div className="flex flex-wrap items-baseline gap-3.5"><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-text-faint">Investimento</span><span className="font-display text-[1.6rem] text-text-faint line-through">R$ 3.000,00</span></div><div className="flex flex-col items-end gap-1.5"><span className="font-display text-[1rem] text-paper-200">Convidado</span><Image src="/logos/alvorada-negativo.png" alt="Alvorada Distribuidora" width={536} height={151} className="h-10 w-auto" /></div></div></div>
      <p className="rise d4 mt-4 flex items-center gap-2.5 text-[14px] leading-relaxed text-text-muted"><span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Cortesia exclusiva para a formação presencial</p>
      <div className="rise d5 mt-8 flex flex-wrap items-center gap-5"><a href="#formulario" className="group inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500">Quero participar <ArrowRight size={17} /></a><a href="#formacao" className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted transition-colors hover:text-text-strong">Conheça a formação <ArrowDown size={16} /></a></div>
    </div>
  );
}

function AlvoradaHeroLegacy() {
  return (
    <div>
      <p className="rise d1 mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
        <span className="inline-block h-px w-8 bg-red-500" />
        Convite especial Alvorada Distribuidora
      </p>

      <h1 className="rise d2 font-display text-[2.6rem] font-medium leading-[1.06] text-text-strong sm:text-[3.4rem] lg:text-[3.9rem]">
        A maior <span className="relative inline-block">formação<span aria-hidden className="absolute -bottom-1 left-0 h-[0.14em] w-full origin-left rounded-full bg-red-500" style={{ animation: "drawLine 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s backwards" }} /></span> de matrículas do Brasil
      </h1>

      <p className="rise d3 mt-8 max-w-[58ch] text-[17px] leading-relaxed text-text-muted">
        A Alvorada Distribuidora e a Claraval têm um convite especial para trazer resultado à sua campanha de matrículas. Treinar o seu time para ampliar a atração e conversão de matrículas.
      </p>

      <div className="rise d3 mt-7 flex flex-wrap gap-x-10 gap-y-3.5">
        <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Data</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">27 de outubro</p></div>
        <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Período</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">17h às 22h</p></div>
        <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-faint">Local</p><p className="mt-1.5 font-display text-[1.15rem] text-text-strong">Brasília, Distrito Federal</p></div>
      </div>

      <div className="rise d4 mt-7 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-[30px] py-[26px]">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <div className="flex flex-wrap items-baseline gap-3.5"><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-text-faint">Investimento</span><span className="font-display text-[1.6rem] text-text-faint line-through">R$ 3.000,00</span></div>
          <div className="flex flex-col items-end gap-1.5"><span className="font-display text-[1rem] text-paper-200">Convidado</span><Image src="/logos/alvorada.png" alt="Alvorada Distribuidora" width={1600} height={459} className="h-[48px] w-[178px] rounded-md object-cover" /></div>
        </div>
        <p className="text-[15.5px] leading-relaxed text-text-muted">Para o líder, acompanhado de um membro do time.</p>
      </div>

      <p className="rise d4 mt-4 max-w-[52ch] text-[14px] leading-relaxed text-text-faint">Agende uma reunião com o consultor da Alvorada Distribuidora para alinhar tudo e confirmar a participação do seu time na formação presencial.</p>

      <div className="rise d5 mt-8 flex flex-wrap items-center gap-5">
        <a href="#formulario" className="group inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500">Quero agendar a reunião<ArrowRight size={17} /></a>
        <a href="#formacao" className="group inline-flex items-center gap-2 text-[15px] font-medium text-text-muted transition-colors hover:text-text-strong">Conheça a formação<ArrowDown size={16} /></a>
      </div>
    </div>
  );
}

export function Landing({ origin, hideTinto = false }: { origin: Origin; hideTinto?: boolean }) {
  const whatsapp = origin === "alvorada" ? "https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20confirmar%20a%20reuni%C3%A3o%20do%20convite%20Alvorada%20para%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas." : WHATSAPP;
  const programacao = origin === "alvorada" ? PROGRAMACAO_ALVORADA : PROGRAMACAO;
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
            {origin === "alvorada" ? "Quero participar" : "Treinar meu time"}
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
          {origin === "alvorada" ? <AlvoradaHero /> : <div>
            <p className="rise d1 mb-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              <span className="inline-block h-px w-8 bg-red-500" />
              Academia Claraval
            </p>

            <h1 className="rise d2 font-display text-[2.6rem] font-medium leading-[1.06] text-text-strong sm:text-[3.4rem] lg:text-[3.9rem]">
              O maior{" "}
              <span className="relative inline-block">
                movimento
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
              dentro de um único método: <strong className="font-semibold text-text-strong">formação presencial</strong>, <strong className="font-semibold text-text-strong">formação online para o time</strong> e acompanhamento com a <strong className="font-semibold text-red-400">IA Clara</strong>.
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
          </div>}

          <div className="rise d3 flex justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[20px] border border-white/10 bg-ink-900 shadow-[0_30px_70px_-30px_rgba(188,38,73,0.45)]">
              <video
                src="/videos/lp-matriculas.mp4"
                poster="/fotos/formacao-sala.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Vídeo da formação Eu Amo Matrículas"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARA QUEM E ================= */}
      <section className="border-y border-ink-900/10 bg-paper-50 px-6 py-28 text-ink-900">
        <div className="marquee-mask mb-24 -mt-28 border-b border-ink-900/10 py-[30px]">
          <div className="marquee flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex flex-shrink-0 items-center" aria-hidden={copy === 1}>
                {["Colégio Bambini", "Heavenly", "Colégio Piaget", "Colégio Mult Integral", "OASIS", "Colégio DOM", "Colégio Harmonia", "IPESSP", "Colégio Desafio", "CSFX", "Colégio São Francisco Xavier", "Marista", "Objetivo", "Escola SEB"].map((name) => (
                  <span key={name} className="whitespace-nowrap border-r border-ink-900/10 px-[34px] font-display text-[1.45rem] font-medium text-ink-900/55">{name}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              <span className="inline-block h-px w-8 bg-red-500" />
              Para quem é
            </p>
            <h2 className="max-w-[17ch] font-display text-[2rem] font-semibold leading-[1.1] text-ink-900 sm:text-[2.6rem]">
              Se você se identifica com essa situação:
              <br />
              <span className="text-red-600">o Eu Amo Matrículas foi feito para você</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {PAINS.map((p, i) => (
              <ScrollReveal key={p.lead} delay={i * 60} className="h-full">
                <div className="flex h-full gap-3.5 rounded-2xl border border-ink-900/[0.12] bg-red-600/[0.04] p-[22px] transition-colors hover:border-red-500/40 hover:bg-red-600/[0.06]">
                  <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-[13px] font-bold text-paper-50">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-900/70">
                    <strong className="font-bold text-ink-900">{p.lead}</strong> {p.rest}
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
        className="border-y border-white/[0.06] bg-ink-950 px-6 py-28 text-text-strong"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              O que é o Eu Amo Matrículas
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-text-strong sm:text-[2.8rem]">
              Um movimento para trazer resultado à sua campanha de matrículas
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-text-muted">
              O conhecimento sai da teoria e vira execução na ponta. A escola inteira
              entra no mesmo método, do mantenedor ao time de matrículas, e a área
              comercial passa a operar em desenvolvimento contínuo.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-red-500/50 pt-6">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-red-400">
                    {p.n}
                  </span>
                  <h3 className="mt-5 font-display text-[1.3rem] font-semibold leading-tight text-text-strong">
                    {p.title}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-text-muted">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= O QUE VOCE RECEBE E CONSTROI ================= */}
      <section className="bg-paper-50 px-6 py-28 text-ink-900">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h3 className="mx-auto mb-12 max-w-[24ch] text-center font-display text-[1.7rem] font-semibold leading-[1.15] text-ink-900 sm:text-[2.2rem]">
              O que você irá receber e construir conosco
            </h3>
          </ScrollReveal>

          <div className="grid gap-x-12 gap-y-6 md:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)]">
            <div className="hidden overflow-hidden rounded-2xl md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fotos/workbook.jpg" alt="Workbook da formação Eu Amo Matrículas" className="h-[560px] w-full object-cover object-[center_40%]" />
            </div>
            <div className="flex flex-col gap-[22px]">
            {METHOD.map((m, i) => (
              <ScrollReveal key={m} delay={i * 60}>
                <div className="flex items-start gap-4 border-b border-ink-900/[0.12] pb-6">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-red-600/30 text-red-600">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-900/70">{m}</p>
                </div>
              </ScrollReveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OS 3 PILARES (fundo escuro) ================= */}
      <section className="border-y border-white/[0.06] bg-ink-950 px-6 py-28 text-text-strong">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-6 flex items-center gap-3.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              <span className="inline-block h-0.5 w-[30px] bg-red-500" />
              Como a evolução acontece
            </p>
            <h2 className="mb-14 font-display text-[2.2rem] font-semibold leading-[1.1] text-text-strong sm:text-[3rem]">
              Os 3 pilares do <span className="text-red-400">Eu Amo Matrículas.</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {TRES_PILARES.map((p, i) => (
              <ScrollReveal key={p.roman} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] px-[30px] pt-[30px] pb-[34px]">
                  <span className="font-display text-[1.15rem] font-semibold tracking-[0.12em] text-red-400">
                    {p.roman}
                  </span>
                  <h3 className="mt-5 font-display text-[1.2rem] font-semibold uppercase tracking-[0.02em] text-text-strong">
                    {p.title}
                  </h3>
                  <p className="mt-4.5 text-[14.5px] leading-relaxed text-text-muted">{p.text}</p>
                  {p.hasNote && (
                    <p className="mt-4.5 text-[14.5px] leading-relaxed text-text-muted">
                      Feito pela <strong className="font-semibold text-red-400">IA Clara</strong> e
                      pelos analistas da Claraval.
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-6 grid items-center gap-14 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-10 py-11 lg:grid-cols-[0.9fr_2fr]">
              <div className="text-center">
                <p className="font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.03em] text-red-400 sm:text-[4.2rem]">
                  <span className="align-[0.42em] text-[0.5em]">+</span>70
                </p>
                <p className="mt-2.5 font-display text-[1.15rem] font-semibold uppercase tracking-[0.08em] text-text-strong">
                  Estímulos
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-text-faint">
                  Ao longo dos 3 meses
                </p>
              </div>
              <p className="text-[16px] leading-[1.75] text-text-muted">
                Mantenedor, gestores, lideranças e time de matrículas no mesmo ritmo de
                evolução, cada camada com sua trilha, todas dentro do mesmo método. O
                resultado é uma área comercial que para de oscilar em picos de animação e
                passa a operar em desenvolvimento contínuo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PROGRAMACAO ================= */}
      <section className="bg-paper-50 px-6 py-28 text-ink-900">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              <span className="inline-block h-0.5 w-[30px] bg-red-600" />
              Programação da formação presencial
            </p>
            <h2 className="max-w-[26ch] font-display text-[2.2rem] font-medium leading-[1.1] text-ink-900 sm:text-[2.8rem]">
              Formação presencial de 5 horas com certificado
            </h2>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-900/70">
              Cada bloco combina conteúdo, construção e prática guiada. O líder e o time
              saem com processo desenhado, roteiros escritos e a primeira rodada de treino
              feita.
            </p>
          </ScrollReveal>

          <div className="mt-14 flex flex-col">
            {programacao.map((b, i) => (
              <ScrollReveal key={b.hora} delay={i * 50}>
                <div className="grid gap-8 border-t border-ink-900/[0.12] py-[26px] sm:grid-cols-[150px_1fr]">
                  <div>
                    <p className="font-display text-[1.3rem] font-semibold tracking-[-0.01em] text-red-600">
                      {b.hora}
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-900/55">
                      {b.dur}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-[1.35rem] font-medium leading-tight text-ink-900">
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
                            className="rounded-full border border-ink-900/[0.12] bg-red-600/[0.08] px-[15px] py-[7px] text-[13px] font-medium text-red-700"
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
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="bg-paper-50 px-6 py-24 text-ink-900">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="font-display text-[5rem] leading-none text-red-500/70">&ldquo;</span>
            <blockquote className="-mt-6 font-display text-[1.7rem] font-medium italic leading-snug text-ink-900 sm:text-[2.1rem]">
              A área comercial para de oscilar em picos de animação e passa a operar em
              desenvolvimento contínuo.
            </blockquote>
            <div className="mt-9 flex flex-col items-center gap-1">
              <p className="text-[15px] font-semibold text-ink-900">Fernando Zago</p>
              <p className="text-[13px] uppercase tracking-[0.2em] text-ink-900/55">
                CEO da Academia Claraval
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {!hideTinto && (
      <>
      {/* ================= TINTO E TINTA (fotos, fundo escuro) ================= */}
      <section className="border-y border-white/[0.06] bg-ink-950 px-6 py-24 text-text-strong">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
              A experiência Tinto e Tinta
            </p>
            <h2 className="max-w-[24ch] font-display text-[2.2rem] font-semibold leading-[1.1] text-text-strong sm:text-[2.7rem]">
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
                <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.src}
                    alt={f.alt}
                    className={`h-[420px] w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${f.position}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {/* ================= FORM ================= */}
      <section id="formulario" className="border-t border-ink-900/10 bg-paper-50 px-6 py-30 text-ink-900">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-600">
              {origin === "alvorada" ? "Confirmar participação" : "Entre na formação"}
            </p>
            <h2 className="max-w-[18ch] font-display text-[2.2rem] font-medium leading-[1.1] text-ink-900 sm:text-[2.7rem]">
              Treine o seu time na Academia Claraval
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-900/70">
              {origin === "alvorada" ? (
                <>Preencha o formulário para confirmar a sua participação. Um consultor da Claraval entra em contato com a sua escola para alinhar tudo e confirmar a participação na formação presencial.<br /><br />As vagas são limitadas e sujeitas a confirmação.</>
              ) : (
                <>Deixe seu contato e nossa equipe fala com você para agendar a melhor data da sua escola entrar na formação. Vagas limitadas por turma.</>
              )}
            </p>

            {origin !== "alvorada" && <div className="mt-7 max-w-[460px] rounded-2xl bg-ink-900 px-7 py-[26px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">Investimento</p>
              <p className="mt-2 flex items-baseline gap-2 font-display">
                <span className="text-[1.1rem] text-text-muted">R$</span>
                <span className="text-[clamp(2.6rem,5vw,3.2rem)] font-semibold text-text-strong">947,00</span>
                <span className="text-[1.1rem] text-text-muted">/mês</span>
              </p>
            </div>}

            {origin !== "alvorada" && <ul className="mt-9 space-y-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-900/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>}

            <div className="mt-8 border-t border-ink-900/[0.12] pt-7">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900/55">
              Próximas turmas presenciais · com certificado
              </p>
              <div className="flex flex-wrap gap-2.5">
                {CITIES.filter((c) => origin !== "alvorada" || c === "Brasília").map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-red-600/35 px-[18px] py-[9px] text-[14px] font-medium text-ink-900"
                  >
                    {c === "Brasília" ? <><strong className="font-bold text-red-600">Brasília</strong> <span>27 de outubro</span></> : c === "São Paulo" ? <><strong className="font-bold text-red-600">São Paulo</strong> <span>04 de novembro</span></> : c}
                  </span>
                ))}
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-red-600/55 bg-red-600/[0.12] px-[18px] py-[9px] text-[14px] font-semibold text-ink-900 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-paper-50"
                >
                  Leve para a sua cidade →
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <LeadForm origin={origin} alvorada={origin === "alvorada"} />
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
        href={whatsapp}
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
