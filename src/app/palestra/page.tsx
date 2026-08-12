import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

/** URL propria da rota /palestra, declarada explicitamente para o RD Station. */
export const metadata: Metadata = {
  alternates: { canonical: "https://www.euamomatriculas.com.br/palestra" },
  openGraph: { url: "https://www.euamomatriculas.com.br/palestra" },
};

/** Rota /palestra — leads vindos das palestras e eventos presenciais. */
export default function PalestraPage() {
  return (
    <main>
      <Landing origin="palestra" />
    </main>
  );
}
