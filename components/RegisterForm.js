"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "../lib/supabase/client";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | needs-confirmation | done | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name: name.trim() },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (signUpError) {
      setStatus("error");
      setError(signUpError.message);
      return;
    }
    if (data.session) {
      window.location.href = "/cuenta";
      return;
    }
    setStatus("needs-confirmation");
  }

  if (status === "needs-confirmation") {
    return (
      <section>
        <div className="section-inner">
          <div className="account-card">
            <h2>Revisa tu correo</h2>
            <p>
              Te hemos enviado un enlace de confirmación a <strong>{email}</strong>. Ábrelo para activar tu cuenta.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="section-inner">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              minLength={6}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="hint">Mínimo 6 caracteres.</span>
          </div>
          {error && (
            <p className="form-note" role="alert" style={{ color: "var(--danger)" }}>
              {error}
            </p>
          )}
          <button type="submit" className="button" disabled={status === "sending"}>
            {status === "sending" ? "Creando cuenta…" : "Crear cuenta gratis"}
          </button>
        </form>
        <p className="auth-switch">
          ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  );
}
