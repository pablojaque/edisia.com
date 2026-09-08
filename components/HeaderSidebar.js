"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COPY = {
  es: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    home: "Barmaja — página de inicio",
    themeToggle: "Cambiar entre modo claro y oscuro",
    nav: [
      { href: "/#productos", label: "Productos" },
      { href: "/como-trabajamos", label: "Cómo funciona" },
      { href: "/#sobre-nosotros", label: "Sobre nosotros" },
      { href: "/#contacto", label: "Contacto" },
    ],
    account: "Mi cuenta",
    login: "Iniciar sesión",
    register: "Registrarse",
    greeting: (name) => `¡Hola, ${name}!`,
    langLabel: "Seleccionar idioma",
  },
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    home: "Barmaja — homepage",
    themeToggle: "Switch between light and dark mode",
    nav: [
      { href: "/en#products", label: "Products" },
      { href: "/en/how-we-work", label: "How it works" },
      { href: "/en#about", label: "About us" },
      { href: "/en#contact", label: "Contact" },
    ],
    account: "My account",
    login: "Log in",
    register: "Sign up",
    greeting: (name) => `Hi, ${name}!`,
    langLabel: "Select language",
  },
};

export default function HeaderSidebar({ lang, user, name, altHref }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("barmaja_theme");
      if (stored) {
        document.documentElement.setAttribute("data-theme", stored);
        setTheme(stored);
      } else {
        setTheme(
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      }
    } catch {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", open);
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      window.localStorage.setItem("barmaja_theme", next);
    } catch {
      // no storage available; theme just won't persist across visits
    }
  }

  const homeHref = lang === "es" ? "/" : "/en";
  const isDark = theme === "dark";

  return (
    <>
      <header className="site-header-bar">
        <div className="site-header">
          <div className="header-left">
            <button
              type="button"
              className="icon-button"
              aria-expanded={open}
              aria-controls="sidebar"
              aria-label={t.openMenu}
              onClick={() => setOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <Link className="logo" href={homeHref} aria-label={t.home}>
              Barmaja
            </Link>
          </div>
          <div className="header-actions">
            <div className="lang-switch" aria-label={t.langLabel}>
              <Link href={lang === "es" ? homeHref : altHref} aria-current={lang === "es" ? "true" : undefined} lang="es" hrefLang="es">
                ES
              </Link>
              <Link href={lang === "en" ? homeHref : altHref} aria-current={lang === "en" ? "true" : undefined} lang="en" hrefLang="en">
                EN
              </Link>
            </div>
            {user ? (
              <Link href="/cuenta" className="account-link account-greeting">
                {t.greeting(name || user.email)}
              </Link>
            ) : (
              <div className="account-links">
                <Link href="/cuenta" className="account-link">
                  {t.login}
                </Link>
                <Link href="/registro" className="button button-sm">
                  {t.register}
                </Link>
              </div>
            )}
            <button
              type="button"
              className="icon-button"
              aria-pressed={isDark}
              aria-label={t.themeToggle}
              onClick={toggleTheme}
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="sidebar-overlay"
        className="sidebar-overlay"
        hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside id="sidebar" className={`sidebar${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="sidebar-header">
          <span className="sidebar-title">{t.menu}</span>
          <button type="button" id="sidebar-close" className="modal-close" aria-label={t.closeMenu} onClick={() => setOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav" aria-label={lang === "es" ? "Principal" : "Primary"}>
          <ul>
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
