/**
 * Roda `prisma migrate deploy` no build, mas so quando ha banco configurado.
 * Sem DATABASE_URL (build local, preview sem banco) o passo e pulado em vez de
 * quebrar o build — a app cai no fallback de arquivo e o /admin avisa.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

for (const file of [".env.local", ".env"]) {
  if (existsSync(file)) {
    try {
      process.loadEnvFile(file);
    } catch {
      // arquivo ilegivel: segue com o ambiente atual
    }
  }
}

if (!process.env.DATABASE_URL) {
  console.log("[migrate] DATABASE_URL ausente — pulando prisma migrate deploy");
  process.exit(0);
}

execFileSync("npx", ["prisma", "migrate", "deploy"], { stdio: "inherit" });
