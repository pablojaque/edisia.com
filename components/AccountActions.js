"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function AccountActions({ plan }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function goToCheckoutOrPortal(endpoint) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(endpoint, { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "No se pudo continuar. Inténtalo de nuevo.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div>
      {error && (
        <p className="form-note" role="alert" style={{ color: "var(--danger)" }}>
          {error}
        </p>
      )}
      <div className="hero-cta-row" style={{ marginBottom: 12 }}>
        {plan === "premium" ? (
          <button type="button" className="button" disabled={loading} onClick={() => goToCheckoutOrPortal("/api/stripe/portal")}>
            {loading ? "Cargando…" : "Gestionar suscripción"}
          </button>
        ) : (
          <button type="button" className="button" disabled={loading} onClick={() => goToCheckoutOrPortal("/api/stripe/checkout")}>
            {loading ? "Cargando…" : "Suscribirme por 9€/mes"}
          </button>
        )}
        <button type="button" className="button secondary" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
