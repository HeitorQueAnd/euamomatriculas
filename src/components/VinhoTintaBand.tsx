const TAGS = [
  "Motivação",
  "União",
  "Autoconfiança",
  "Bem-estar",
  "Gestão de mudança",
];

const ESCOLAS = [
  "Colégio Bambini",
  "Heavenly",
  "Colégio Piaget",
  "Colégio Mult Integral",
  "OASIS",
  "Colégio DOM",
  "Colégio Harmonia",
  "IPESSP",
  "Colégio Desafio",
];

/**
 * Dobra "Claraval com Vinho Tinta" — entra logo abaixo do hero.
 * Substitui a antiga faixa de logos + a faixa de números (STATS).
 */
export function VinhoTintaBand() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-paper-50 text-ink-900">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-20 pb-11 text-center sm:pt-24">
        <span className="rounded-full border border-ink-900/15 px-[18px] py-[7px] text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
          Parceria especial
        </span>

        <h2 className="mt-7 font-display text-[2.2rem] font-semibold leading-[1.05] text-ink-900 sm:text-[2.8rem] lg:text-[3.4rem]">
          Claraval com <em className="italic text-red-600">Vinho Tinta</em>
        </h2>

        <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.65] text-ink-900/70">
          O team building escolhido por Google, Netflix, Nubank e Natura, agora
          aplicado aos times de matrículas e retenção da sua escola.
          <br />
          <strong className="font-semibold text-ink-900">
            As formações presenciais terão a experiência Vinho Tinta.
          </strong>
        </p>

        <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-ink-900/60">
          Uma pintura guiada acompanhada de degustação de vinhos — o vinho é
          opcional. Foco no cuidado com o time, saúde mental e um momento real de
          descompressão e união.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-900/[0.14] bg-red-600/5 px-[18px] py-[9px] text-[13.5px] font-medium text-ink-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Esteira de escolas — duplicada para o loop ficar contínuo */}
      <div className="marquee-mask border-t border-ink-900/10 py-[26px]">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex flex-shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {ESCOLAS.map((name) => (
                <span
                  key={name}
                  className="whitespace-nowrap border-r border-ink-900/10 px-[34px] font-display text-[1.45rem] font-medium text-ink-900/55"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
