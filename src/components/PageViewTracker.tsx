"use client";

import { useEffect, useRef } from "react";

/** Dispara um pageview para /api/track uma unica vez por montagem. */
export function PageViewTracker({ route }: { route: string }) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "pageview",
        route,
        query: window.location.search,
      }),
      keepalive: true,
    }).catch(() => {
      // tracking e best-effort
    });
  }, [route]);

  return null;
}
