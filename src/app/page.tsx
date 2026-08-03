import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

/**
 * URL propria da rota, para o RD Station (mesma conta da Claraval) nao casar
 * a raiz "/" com a home da academiaclaraval.com.br.
 */
export const metadata: Metadata = {
  alternates: { canonical: "https://www.euamomatriculas.com.br/" },
  openGraph: { url: "https://www.euamomatriculas.com.br/" },
};

/** Rota / — leads vindos do QR Code impresso na revista. */
export default function HomePage() {
  return (
    <main>
      <Landing origin="qrcode" />
    </main>
  );
}
