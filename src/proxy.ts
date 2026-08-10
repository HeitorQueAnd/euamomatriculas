import { NextResponse, type NextRequest } from "next/server";

/**
 * Basic Auth no /admin (log de acesso). Usuario: admin.
 * Senha: variavel de ambiente ADMIN_PASSWORD.
 */
export default function proxy(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    return new NextResponse(
      "ADMIN_PASSWORD nao configurada no ambiente.",
      { status: 500 },
    );
  }

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const [user, pass] = atob(header.slice(6)).split(":");
    if (user === "admin" && pass === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Autenticacao necessaria", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="admin", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
