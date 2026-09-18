import type { Metadata } from "next";
import { LandingIsaac } from "@/components/LandingIsaac";

/** URL propria da rota /isaac, declarada explicitamente para o RD Station. */
export const metadata: Metadata = {
  title: "Convite ISAAC — Eu Amo Matrículas",
  description:
    "Convite especial ISAAC para a formação presencial Eu Amo Matrículas: 9 de setembro, 17h às 22h, Brasília, Distrito Federal.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/isaac" },
  openGraph: { url: "https://www.euamomatriculas.com.br/isaac" },
};

/** Rota /isaac — agendamento de reuniao do convite da parceria ISAAC. */
export default function IsaacPage() {
  return (
    <main>
      <LandingIsaac origin="isaac" />
    </main>
  );
}
