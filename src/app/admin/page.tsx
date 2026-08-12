import { listLogs, hasStorage, type LogEntry } from "@/lib/logs";
import { TRACKED_ROUTES } from "@/lib/origin";

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

  /** Uma linha por rota rastreada (ver ORIGINS), mais o que sobrar do log. */
  const routes = [
    ...TRACKED_ROUTES,
    ...[...new Set(logs.map((l) => l.route))].filter(
      (r) => !TRACKED_ROUTES.includes(r),
    ),
  ];

  const byRoute = routes.map((route) => {
    const v = views.filter((x) => x.route === route).length;
    const l = leads.filter((x) => x.route === route).length;
    return { route, views: v, leads: l, rate: v > 0 ? (l / v) * 100 : 0 };
  });

  return (
    <main className="mx-auto max-w-6xl bg-white p-8 text-neutral-900">
      <h1 className="text-2xl font-semibold">Logs de acesso</h1>

      {!hasStorage && (
        <p className="mt-3 rounded-lg bg-amber-100 p-3 text-[13px] text-amber-900">
          Banco não configurado — os registros estão indo para um arquivo
          temporário e somem a cada deploy/restart. Configure a variável{" "}
          <code>DATABASE_URL</code> (Prisma Postgres).
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[
          ...byRoute.map((r) => [`Visitas ${r.route}`, r.views] as const),
          ["Total de visitas", views.length] as const,
          ["Formulários enviados", leads.length] as const,
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-neutral-200 p-4">
            <div className="text-[12px] text-neutral-500">{label}</div>
            <div className="mt-1 text-2xl font-semibold">{value}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Por rota</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-neutral-300 text-neutral-500">
              <th className="py-2 pr-4 font-medium">Rota</th>
              <th className="py-2 pr-4 font-medium">Visitas</th>
              <th className="py-2 pr-4 font-medium">Formulários</th>
              <th className="py-2 pr-4 font-medium">Conversão</th>
            </tr>
          </thead>
          <tbody>
            {byRoute.map((r) => (
              <tr key={r.route} className="border-b border-neutral-200">
                <td className="py-2 pr-4 font-mono">{r.route}</td>
                <td className="py-2 pr-4">{r.views}</td>
                <td className="py-2 pr-4">{r.leads}</td>
                <td className="py-2 pr-4">
                  {r.views > 0 ? `${r.rate.toFixed(1)}%` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
