import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Convite IScholar — Eu Amo Matrículas",
  description:
    "Convite especial IScholar para a formação presencial Eu Amo Matrículas: 27 de outubro, 17h às 22h, Brasília, Distrito Federal.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/ischolar" },
  openGraph: { url: "https://www.euamomatriculas.com.br/ischolar" },
};

export default function IScholarPage() {
  return (
    <main>
      <Landing origin="ischolar" />
    </main>
  );
}
