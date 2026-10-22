import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Convite Teachy — Eu Amo Matrículas",
  description:
    "Convite especial Teachy para a formação presencial Eu Amo Matrículas: 4 de novembro, 14h às 19h, Casa Teachy, São Paulo.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/teachy" },
  openGraph: { url: "https://www.euamomatriculas.com.br/teachy" },
};

export default function TeachyPage() {
  return (
    <main>
      <Landing origin="teachy" />
    </main>
  );
}
