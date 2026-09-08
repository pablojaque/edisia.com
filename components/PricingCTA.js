"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingCTA({ user, plan }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubscribe() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
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

  if (!user) {
    return (
      <Link className="button" href="/registro?next=/precios">
        Crear cuenta y suscribirme
      </Link>
    );
  }

  if (plan === "premium") {
    return (
      <Link className="button" href="/cuenta">
        Ya eres premium — gestionar
      </Link>
    );
  }

  return (
    <>
      {error && (
        <p className="form-note" role="alert" style={{ color: "var(--danger)" }}>
          {error}
        </p>
      )}
      <button type="button" className="button" onClick={handleSubscribe} disabled={loading}>
        {loading ? "Cargando…" : "Suscribirme por 9€/mes"}
      </button>
    </>
  );
}
