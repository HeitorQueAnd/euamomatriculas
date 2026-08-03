import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

/** URL propria da rota /revista, declarada explicitamente para o RD Station. */
export const metadata: Metadata = {
  alternates: { canonical: "https://www.euamomatriculas.com.br/revista" },
  openGraph: { url: "https://www.euamomatriculas.com.br/revista" },
};

/** Rota /revista — leads vindos do link da revista digital. */
export default function RevistaPage() {
  return (
    <main>
      <Landing origin="revista" />
    </main>
  );
}
