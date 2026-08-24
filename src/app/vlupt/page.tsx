import type { Metadata } from "next";
import { LandingVlupt } from "@/components/LandingVlupt";

/** URL propria da rota /vlupt, declarada explicitamente para o RD Station. */
export const metadata: Metadata = {
  title: "Convite VLUPT — Eu Amo Matrículas",
  description:
    "Convite especial VLUPT para a formação presencial Eu Amo Matrículas: 9 de setembro, 14h às 19h, Cidade Monções, São Paulo.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/vlupt" },
  openGraph: { url: "https://www.euamomatriculas.com.br/vlupt" },
};

/** Rota /vlupt — inscricoes do convite da parceria VLUPT. */
export default function VluptPage() {
  return (
    <main>
      <LandingVlupt origin="vlupt" />
    </main>
  );
}
