import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Convite IScholar Uberlândia — Eu Amo Matrículas",
  description:
    "Convite especial IScholar para a formação presencial Eu Amo Matrículas: 10 de novembro, 14h às 19h, Uberlândia, Minas Gerais.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/ischolar-uberlandia" },
  openGraph: { url: "https://www.euamomatriculas.com.br/ischolar-uberlandia" },
};

export default function IScholarUberlandiaPage() {
  return (
    <main>
      <Landing origin="ischolaruberlandia" />
    </main>
  );
}
