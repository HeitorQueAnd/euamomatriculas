import { LeadForm } from "./LeadForm";
import { ScrollReveal } from "./ScrollReveal";
import type { Origin } from "@/lib/origin";

export function FormationForm({ origin }: { origin: Origin }) {
  return (
    <section id="formulario" className="border-t border-white/[0.06] px-6 py-30">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
        <ScrollReveal className="lg:sticky lg:top-32">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-red-400">
            Confirmar a participação
          </p>
          <h2 className="max-w-[18ch] font-display text-[2.2rem] font-medium leading-[1.1] text-text-strong sm:text-[2.7rem]">
            Treine o seu time na Academia Claraval
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-muted">
            Preencha o formulário para confirmar a participação do seu time na formação
            presencial Eu Amo Matrículas.
            <br />
            <br />
            As vagas são limitadas e sujeitas a confirmação.
          </p>
        </ScrollReveal>
    
        <ScrollReveal delay={120}>
          <LeadForm origin={origin} />
        </ScrollReveal>
      </div>
    </section>
  );
}
