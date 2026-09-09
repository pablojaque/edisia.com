"use client";

import { useState } from "react";
import Link from "next/link";

const fmtPrice = (value) =>
  value === null || value === undefined
    ? "—"
    : new Intl.NumberFormat("es-ES", { maximumFractionDigits: 2 }).format(value);

function StatIcon({ name }) {
  const paths = {
    box: <path d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7M3 7l9 4m0 0l9-4M12 11v10" />,
    tag: <path d="M20.59 13.41L12 22l-9-9V4h9l8.59 8.59a2 2 0 010 2.82zM7 8h.01" />,
    range: <path d="M8 6L2.5 12L8 18M16 6l5.5 6-5.5 6" />,
    percent: <path d="M19 5L5 19M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

export default function StoreAnalyzer({ isPremium, remainingToday, isLoggedIn = true, compact = false }) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error | needs-login
  const [errorCode, setErrorCode] = useState("");
  const [result, setResult] = useState(null);
  const [remaining, setRemaining] = useState(remainingToday);

  const outOfTries = isLoggedIn && !isPremium && remaining <= 0;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isLoggedIn) {
      setStatus("needs-login");
      return;
    }
    if (outOfTries) return;
    setStatus("loading");
    setErrorCode("");
    setResult(null);

    try {
      const res = await fetch("/api/analyze-store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorCode(data.error || "unknown");
        if (data.error === "limit_reached") setRemaining(0);
        return;
      }

      setResult(data.result);
      setStatus("done");
      if (!isPremium) setRemaining((r) => Math.max(0, r - 1));
    } catch {
      setStatus("error");
      setErrorCode("unknown");
    }
  }

  const ERROR_MESSAGES = {
    invalid_url: "Ese link no parece una URL válida. Prueba con algo como https://tienda-ejemplo.com.",
    unreachable: "No hemos podido conectar con esa web. Comprueba el link e inténtalo de nuevo.",
    not_shopify: "Esa web no parece estar hecha con Shopify (no encontramos su catálogo público), así que no podemos analizarla.",
    limit_reached: "Has usado tus 2 análisis gratis de hoy. Hazte premium para analizar sin límite.",
    unknown: "Algo ha fallado. Inténtalo de nuevo en un momento.",
  };

  return (
    <div className={`analyzer${compact ? " analyzer-compact" : ""}`}>
      <form className="analyzer-form" onSubmit={handleSubmit}>
        <div className="form-field">
          {!compact && <label htmlFor="store-url">Link de la tienda Shopify</label>}
          <div className="analyzer-input-row">
            <input
              type="text"
              id="store-url"
              placeholder="https://tienda-ejemplo.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={outOfTries}
            />
            <button type="submit" className="button" disabled={status === "loading" || outOfTries}>
              {status === "loading" ? "Analizando…" : "Analizar"}
            </button>
          </div>
        </div>
        {isLoggedIn && !isPremium && (
          <p className="analyzer-quota">
            {outOfTries ? "Sin análisis gratis hoy." : `Te quedan ${remaining} de 2 análisis gratis hoy.`}
          </p>
        )}
      </form>

      {status === "needs-login" && (
        <div className="analyzer-upsell">
          <p>Regístrate gratis para analizar tiendas.</p>
          <Link className="button button-sm" href="/registro">
            Crear cuenta gratis
          </Link>
        </div>
      )}

      {outOfTries && (
        <div className="analyzer-upsell">
          <p>Has usado tus 2 análisis gratis de hoy.</p>
          <Link className="button button-sm" href="/precios">
            Hazte premium para analizar sin límite
          </Link>
        </div>
      )}

      {status === "error" && (
        <p className="form-note" role="alert" style={{ color: "var(--danger)" }}>
          {ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.unknown}
        </p>
      )}

      {status === "done" && result && (
        <div className="analyzer-report analyzer-report-in">
          <h3>{result.origin}</h3>

          <div className="analyzer-stats-grid">
            <div className="analyzer-stat">
              <span className="analyzer-stat-icon"><StatIcon name="box" /></span>
              <span className="analyzer-stat-value">
                {result.productCount}
                {result.productCountIsCapped ? "+" : ""}
              </span>
              <span className="analyzer-stat-label">Productos</span>
            </div>
            <div className="analyzer-stat">
              <span className="analyzer-stat-icon"><StatIcon name="tag" /></span>
              <span className="analyzer-stat-value">{fmtPrice(result.priceAvg)}€</span>
              <span className="analyzer-stat-label">Precio medio</span>
            </div>
            <div className="analyzer-stat">
              <span className="analyzer-stat-icon"><StatIcon name="range" /></span>
              <span className="analyzer-stat-value">
                {fmtPrice(result.priceMin)}€ – {fmtPrice(result.priceMax)}€
              </span>
              <span className="analyzer-stat-label">Rango de precios</span>
            </div>
            <div className="analyzer-stat">
              <span className="analyzer-stat-icon"><StatIcon name="percent" /></span>
              <span className="analyzer-stat-value">
                {result.avgDiscountPct !== null ? `${Math.round(result.avgDiscountPct)}%` : "—"}
              </span>
              <span className="analyzer-stat-label">
                Descuento medio {result.discountedVariantCount ? `(${result.discountedVariantCount} variantes)` : ""}
              </span>
            </div>
          </div>

          {result.topProductTypes.length > 0 && (
            <div className="analyzer-section">
              <h4>Categorías principales</h4>
              <p>{result.topProductTypes.join(", ")}</p>
            </div>
          )}

          {result.newestProducts.length > 0 && (
            <div className="analyzer-section">
              <h4>Productos más nuevos</h4>
              <p>{result.newestProducts.join(", ")}</p>
            </div>
          )}

          <div className="analyzer-section">
            <h4>Apps detectadas</h4>
            <p>{result.apps.length > 0 ? result.apps.join(", ") : "No detectamos apps públicas conocidas."}</p>
          </div>

          <div className="analyzer-section">
            <h4>Métodos de pago detectados</h4>
            <p>{result.payments.length > 0 ? result.payments.join(", ") : "No detectamos ninguno en la página principal."}</p>
          </div>
        </div>
      )}
    </div>
  );
}
