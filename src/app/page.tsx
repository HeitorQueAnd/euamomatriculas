import { Landing } from "@/components/Landing";

/** Rota / — leads vindos do QR Code impresso na revista. */
export default function HomePage() {
  return (
    <main>
      <Landing origin="qrcode" />
    </main>
  );
}
