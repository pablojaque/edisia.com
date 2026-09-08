"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "../lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setStatus("error");
      setError(signInError.message === "Invalid login credentials" ? "Correo o contraseña incorrectos." : signInError.message);
      return;
    }
    router.push(searchParams.get("next") || "/cuenta");
    router.refresh();
  }

  return (
    <section>
      <div className="section-inner">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="form-note" role="alert" style={{ color: "var(--danger)" }}>
              {error}
            </p>
          )}
          <button type="submit" className="button" disabled={status === "sending"}>
            {status === "sending" ? "Entrando…" : "Iniciar sesión"}
          </button>
        </form>
        <p className="auth-switch">
          ¿No tienes cuenta? <Link href="/registro">Regístrate gratis</Link>
        </p>
      </div>
    </section>
  );
}
