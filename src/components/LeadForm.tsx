"use client";

import { useState, type FormEvent } from "react";
import Script from "next/script";
import { Send, Check } from "lucide-react";
import { ORIGINS, type Origin } from "@/lib/origin";

type Status = "idle" | "submitting" | "success";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": {
        "buy-button-id": string;
        "publishable-key": string;
        "customer-email": string;
        "client-reference-id": string;
      };
    }
  }
}

/**
 * Form de captura, mesmos campos da root do claraval-landing:
 * nome, email, telefone, escola.
 *
 * Envio pro RD Station do "jeito de la": os inputs tem os names que o RD
 * auto-captura e um `conversion_identifier` escondido que identifica a origem
 * (qrcode x revista). O loader do RD (em layout.tsx) intercepta o submit e
 * registra a conversao; aqui so tratamos o preventDefault e o estado de sucesso.
 */
export function LeadForm({ origin, alvorada = false }: { origin: Origin; alvorada?: boolean }) {
  const { path, conversionIdentifier, label } = ORIGINS[origin];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [escola, setEscola] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function maskPhone(value: string) {
    let v = value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 0) {
      v = "(" + v;
      if (v.length > 3) v = v.slice(0, 3) + ") " + v.slice(3);
      if (v.length > 10) v = v.slice(0, 10) + "-" + v.slice(10);
    }
    return v;
  }

  async function handleSubmit(e: FormEvent) {
    // Nao chamamos e.preventDefault() antes de deixar o RD ler o submit:
    // o listener do loader RD roda na mesma fase e captura os campos.
    e.preventDefault();
    setStatus("submitting");

    // Log proprio do envio (independente do RD Station).
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "lead",
        route: path,
        query: window.location.search,
        nome,
        email,
        telefone,
        escola,
      }),
      keepalive: true,
    }).catch(() => {
      // tracking e best-effort, nao bloqueia o envio
    });

    // Da um tick para a auto-captura do RD Station processar o submit.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  }

  function sanitizeReference(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Za-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 200);
  }

  if (status === "success") {
    if (alvorada) {
      const firstName = nome.trim().split(/\s+/)[0] || "você";
      return (
        <div className="rounded-3xl border border-paper-200 bg-white p-10 text-center shadow-[0_24px_60px_-32px_rgba(20,13,15,0.35)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-paper-50"><Check size={30} strokeWidth={2.5} /></div>
          <h3 className="mt-6 font-display text-2xl text-ink-900">Participação enviada, {firstName}</h3>
          <p className="mx-auto mt-3 max-w-[38ch] text-[15px] leading-relaxed text-ink-700/70">Um consultor da Claraval entra em contato com a sua escola para alinhar tudo e confirmar a participação na formação presencial.</p>
          <a href="https://wa.me/5561999397887?text=Ol%C3%A1!%20Quero%20confirmar%20a%20reuni%C3%A3o%20do%20convite%20Alvorada%20para%20a%20forma%C3%A7%C3%A3o%20Eu%20Amo%20Matr%C3%ADculas." target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-paper-50">Falar no WhatsApp <Send size={16} /></a>
        </div>
      );
    }
    const firstName = nome.trim().split(/\s+/)[0] || "você";
    const clientReferenceId = sanitizeReference(`${nome}__${escola}__${telefone.replace(/\D/g, "")}`);
    return (
      <div className="rounded-3xl border border-paper-200 bg-white p-10 text-center shadow-[0_24px_60px_-32px_rgba(20,13,15,0.35)]">
        {!alvorada && <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-paper-50">
          <Check size={30} strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-2xl text-ink-900">Cadastro enviado, {firstName}</h3>
        <p className="mx-auto mt-3 max-w-[38ch] text-[15px] leading-relaxed text-ink-700/70">Finalize sua inscrição abaixo com o pagamento seguro.</p>
        <div className="mt-7 flex justify-center">
          <stripe-buy-button
            buy-button-id="buy_btn_1UQoM6CjaH5UL316h9vKpMsX"
            publishable-key="pk_live_51ULTWcCjaH5UL316EBUjzv0KImhjpT44Ag6hgMqsMzTq9g51udKeAbdPpg0iuIfVhW19nAkJy1SXrAk9nPW5A0Et00xcjS6MCA"
            customer-email={email}
            client-reference-id={clientReferenceId}
          />
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-paper-200 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder-ink-700/35 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/15";
  const labelClass =
    "mb-2 block text-[13px] font-medium tracking-wide text-ink-700/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#e0d5c6] bg-white p-7 shadow-[0_24px_60px_-32px_rgba(20,13,15,0.35)] sm:p-9"
    >
      {/* RD Station: identifica a origem da conversao */}
      <input type="hidden" name="conversion_identifier" value={conversionIdentifier} />
      <input type="hidden" name="origem" value={label} />

      <div className="space-y-5">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome completo
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="telefone" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(maskPhone(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="escola" className={labelClass}>
            Nome da escola
          </label>
          <input
            id="escola"
            name="escola"
            type="text"
            placeholder="Colégio Exemplo"
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-red-600 px-7 py-4 text-[15px] font-semibold text-paper-50 shadow-[var(--shadow-red)] transition-all duration-200 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <span className="spin inline-block h-4 w-4 rounded-full border-2 border-paper-50/40 border-t-paper-50" />
              Enviando
            </>
          ) : (
            <>
              Quero participar
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>

        <p className="text-center text-[12px] leading-relaxed text-ink-700/50">
          Ao enviar, você concorda em receber comunicações da Academia Claraval.
          Seus dados são protegidos conforme a LGPD.
        </p>
      </div>
    </form>
  );
}
