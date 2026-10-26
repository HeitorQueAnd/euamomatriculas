import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Convite Casa Thomas Jefferson — Eu Amo Matrículas",
  description:
    "Convite especial Casa Thomas Jefferson para a formação presencial Eu Amo Matrículas: 10 de novembro, 14h às 19h, Uberlândia, Minas Gerais.",
  alternates: { canonical: "https://www.euamomatriculas.com.br/thomas-jefferson" },
  openGraph: { url: "https://www.euamomatriculas.com.br/thomas-jefferson" },
};

export default function ThomasJeffersonPage() {
  return (
    <main>
      <Landing origin="thomasjefferson" />
    </main>
  );
}
