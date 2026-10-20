import type { Metadata } from "next";
import { LandingIsaac } from "@/components/LandingIsaac";

export const metadata: Metadata = {
  title: "Convite Alvorada Distribuidora — Eu Amo Matrículas",
  description:
    "Convite especial Alvorada Distribuidora para a formação presencial Eu Amo Matrículas.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/alvorada" },
  openGraph: { url: "https://www.euamomatriculas.com.br/alvorada" },
};

export default function AlvoradaPage() {
  return (
    <main>
      <LandingIsaac origin="alvorada" />
    </main>
  );
}
