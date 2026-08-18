import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euamomatriculas.com.br"),
  title: "Eu Amo Matrículas | Team building com degustação de vinho",
  description:
    "O team building escolhido por Google, Netflix, Nubank e Natura, agora aplicado aos times de matrículas e retenção da sua escola. Uma iniciativa da Academia Claraval.",
  openGraph: {
    title: "Eu Amo Matrículas | Team building com degustação de vinho",
    description:
      "O método de integração das grandes empresas aplicado aos times de matrículas e retenção da sua escola.",
    type: "website",
    locale: "pt_BR",
    siteName: "Eu Amo Matriculas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${fraunces.variable} grain antialiased`}>
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18346929691"
          strategy="afterInteractive"
        />
        <Script id="google-tag-aw-18346929691" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18346929691');
          `}
        </Script>
        {/*
          RD Station — mesmo loader/conta do claraval-landing.
          Faz a auto-captura dos forms via o campo hidden conversion_identifier.
        */}
        <script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/107db799-e748-4928-ac7e-1a8436b60b40-loader.js"
        />
      </body>
    </html>
  );
}
