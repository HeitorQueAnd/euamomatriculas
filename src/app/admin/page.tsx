import { listLogs, hasStorage, type LogEntry } from "@/lib/logs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Logs de acesso | Eu Amo Matrículas",
  robots: { index: false, follow: false },
};

function fmt(at: string) {
  return new Date(at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

function Table({ rows, lead }: { rows: LogEntry[]; lead: boolean }) {
  if (rows.length === 0) {
    return <p className="py-6 text-sm text-neutral-500">Nenhum registro ainda.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-neutral-300 text-neutral-500">
            <th className="py-2 pr-4 font-medium">Quando</th>
            <th className="py-2 pr-4 font-medium">Rota</th>
            {lead && <th className="py-2 pr-4 font-medium">Nome</th>}
            {lead && <th className="py-2 pr-4 font-medium">E-mail</th>}
            {lead && <th className="py-2 pr-4 font-medium">WhatsApp</th>}
            {lead && <th className="py-2 pr-4 font-medium">Escola</th>}
            <th className="py-2 pr-4 font-medium">IP</th>
            <th className="py-2 pr-4 font-medium">Cidade</th>
            <th className="py-2 pr-4 font-medium">Origem</th>
            <th className="py-2 pr-4 font-medium">Navegador</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-neutral-200 align-top">
              <td className="whitespace-nowrap py-2 pr-4">{fmt(r.at)}</td>
              <td className="py-2 pr-4 font-mono">{r.route}</td>
              {lead && <td className="py-2 pr-4">{r.nome ?? "—"}</td>}
              {lead && <td className="py-2 pr-4">{r.email ?? "—"}</td>}
              {lead && <td className="py-2 pr-4">{r.telefone ?? "—"}</td>}
              {lead && <td className="py-2 pr-4">{r.escola ?? "—"}</td>}
              <td className="py-2 pr-4 font-mono">{r.ip ?? "—"}</td>
              <td className="py-2 pr-4">
                {[r.city, r.country].filter(Boolean).join(" / ") || "—"}
              </td>
              <td className="max-w-[220px] truncate py-2 pr-4">
                {r.query || r.referer || "—"}
              </td>
              <td className="max-w-[260px] truncate py-2 pr-4 text-neutral-500">
                {r.userAgent ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function AdminPage() {
  const logs = await listLogs(1000);
  const leads = logs.filter((l) => l.type === "lead");
  const views = logs.filter((l) => l.type === "pageview");

  const count = (route: string) => views.filter((v) => v.route === route).length;

  return (
    <main className="mx-auto max-w-6xl bg-white p-8 text-neutral-900">
      <h1 className="text-2xl font-semibold">Logs de acesso</h1>

      {!hasStorage && (
        <p className="mt-3 rounded-lg bg-amber-100 p-3 text-[13px] text-amber-900">
          Armazenamento persistente não configurado — os registros estão apenas em
          memória e somem a cada deploy/restart. Configure{" "}
          <code>KV_REST_API_URL</code> e <code>KV_REST_API_TOKEN</code>.
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ["Visitas /", count("/")],
          ["Visitas /revista", count("/revista")],
          ["Total de visitas", views.length],
          ["Formulários enviados", leads.length],
        ].map(([label, value]) => (
          <div key={label as string} className="rounded-xl border border-neutral-200 p-4">
            <div className="text-[12px] text-neutral-500">{label}</div>
            <div className="mt-1 text-2xl font-semibold">{value}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Formulários preenchidos</h2>
      <Table rows={leads} lead />

      <h2 className="mt-10 text-lg font-semibold">Visitas</h2>
      <Table rows={views} lead={false} />

      <p className="mt-8 text-[12px] text-neutral-400">
        Mostrando os 1000 eventos mais recentes.
      </p>
    </main>
  );
}
