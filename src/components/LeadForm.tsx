"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { ORIGINS, type Origin } from "@/lib/origin";

type Status = "idle" | "submitting" | "success";

/**
 * Form de captura, mesmos campos da root do claraval-landing:
 * nome, email, telefone, escola.
 *
 * Envio pro RD Station do "jeito de la": os inputs tem os names que o RD
 * auto-captura e um `conversion_identifier` escondido que identifica a origem
 * (qrcode x revista). O loader do RD (em layout.tsx) intercepta o submit e
 * registra a conversao; aqui so tratamos o preventDefault e o estado de sucesso.
 */
export function LeadForm({ origin }: { origin: Origin }) {
  const { conversionIdentifier, label } = ORIGINS[origin];

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
        route: origin === "revista" ? "/revista" : "/",
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

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-paper-200 bg-paper-50 p-10 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-paper-50">
          <Check size={30} strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-2xl text-ink-900">Cadastro enviado</h3>
        <p className="mx-auto mt-3 max-w-[38ch] text-[15px] leading-relaxed text-ink-700/70">
          Obrigado pelo interesse. Nossa equipe entra em contato em até 24 horas
          úteis para agendar a experiência na sua escola.
        </p>
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
      className="rounded-3xl border border-paper-200 bg-paper-50 p-7 shadow-[var(--shadow-card)] sm:p-9"
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
