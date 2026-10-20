import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Convite Alvorada — Eu Amo Matrículas",
  description:
    "Convite especial Alvorada para a formação presencial Eu Amo Matrículas: 27 de outubro, 17h às 22h, Brasília, Distrito Federal.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/alvorada" },
  openGraph: { url: "https://www.euamomatriculas.com.br/alvorada" },
};

export default function AlvoradaPage() {
  return (
    <main>
      <Landing origin="alvorada" />
    </main>
  );
}
