"use client";

import { useState, useRef, useEffect } from "react";

const FORMSPREE_ACTION = "https://formspree.io/f/xppzjnoq";

const COPY = {
  es: {
    title: "Los productos que arrasan en TikTok, cada semana.",
    subtitle:
      "Analizamos TikTok Creative Center y las tendencias del mercado angloparlante (EE.UU. y Reino Unido) para encontrar los productos con tracción real, y te damos el enlace directo para contactar con sus proveedores.",
    seeProducts: "Ver productos de esta semana",
    howWeDoIt: "Cómo lo hacemos",
    howHref: "/como-trabajamos",
    placeholder: "¿Buscas un nicho concreto? Pídenoslo…",
    hint: "Escribe tu nicho y pulsa Intro: te contactamos con opciones a medida.",
    modalTitle: "Casi listo",
    modalSubtitle: "Déjanos tu nombre y correo y te contactamos con opciones a medida.",
    name: "Nombre",
    email: "Correo electrónico",
    niche: "Tu nicho o producto",
    send: "Enviar mensaje",
    sending: "Enviando…",
    note: "Tu mensaje llega directo a nuestro correo.",
    error: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo o escríbenos a pablojaquevfx@gmail.com.",
    sentTitle: "¡Mensaje enviado!",
    sentSubtitle: "Recibimos tu mensaje y te vamos a responder pronto a tu correo.",
    close: "Cerrar",
    subjectField: "Nuevo mensaje rápido — Barmaja",
  },
  en: {
    title: "The products taking over TikTok, every week.",
    subtitle:
      "We analyze TikTok Creative Center and English-speaking market trends (US and UK) to find products with real traction, and give you a direct link to contact their suppliers.",
    seeProducts: "See this week's products",
    howWeDoIt: "How we do it",
    howHref: "/en/how-we-work",
    placeholder: "Looking for a specific niche? Ask us…",
    hint: "Type your niche and hit enter: we'll reach out with tailored options.",
    modalTitle: "Almost there",
    modalSubtitle: "Leave your name and email and we'll reach out with tailored options.",
    name: "Name",
    email: "Email address",
    niche: "Your niche or product",
    send: "Send message",
    sending: "Sending…",
    note: "Your message goes straight to our inbox.",
    error: "Something went wrong sending your message. Please try again or email us at pablojaquevfx@gmail.com.",
    sentTitle: "Message sent!",
    sentSubtitle: "We got your message and will reply to your email soon.",
    close: "Close",
    subjectField: "New quick message — Barmaja",
  },
};

export default function HeroWithModal({ lang, productsHref }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const inputRef = useRef(null);
  const nameRef = useRef(null);
  const lastFocused = useRef(null);

  function openModal(text) {
    lastFocused.current = document.activeElement;
    setPrefill(text || "");
    setStatus("idle");
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    if (lastFocused.current && typeof lastFocused.current.focus === "function") {
      lastFocused.current.focus();
    }
  }

  useEffect(() => {
    if (open && nameRef.current) {
      const id = window.setTimeout(() => nameRef.current.focus(), 10);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && open) closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleHeroSubmit(e) {
    e.preventDefault();
    openModal(inputRef.current ? inputRef.current.value.trim() : "");
  }

  function handleModalSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    fetch(FORMSPREE_ACTION, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setStatus("sent");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }

  return (
    <section className="hero">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <div className="hero-cta-row">
        <a className="button" href={productsHref}>
          {t.seeProducts}
        </a>
        <a className="button secondary" href={t.howHref}>
          {t.howWeDoIt}
        </a>
      </div>
      <form className="hero-prompt" onSubmit={handleHeroSubmit}>
        <label htmlFor="hero-input" className="visually-hidden">
          {t.placeholder}
        </label>
        <input ref={inputRef} type="text" id="hero-input" name="hero-input" placeholder={t.placeholder} autoComplete="off" />
        <button type="submit" className="hero-prompt-send" aria-label={t.send}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
      <p className="hero-prompt-hint">{t.hint}</p>

      <div className="modal-overlay" hidden={!open} onClick={(e) => e.target === e.currentTarget && closeModal()}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button type="button" className="modal-close" aria-label={t.close} onClick={closeModal}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {status !== "sent" ? (
            <div>
              <h2 id="modal-title">{t.modalTitle}</h2>
              <p className="modal-subtitle">{t.modalSubtitle}</p>
              <form className="modal-form" onSubmit={handleModalSubmit}>
                <input type="hidden" name="_subject" value={t.subjectField} />
                <div className="form-field">
                  <label htmlFor="modal-name">{t.name}</label>
                  <input ref={nameRef} type="text" id="modal-name" name="name" autoComplete="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-email">{t.email}</label>
                  <input type="email" id="modal-email" name="email" autoComplete="email" required />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-message">{t.niche}</label>
                  <textarea id="modal-message" name="message" rows="4" defaultValue={prefill} required />
                </div>
                {status === "error" && (
                  <p className="form-note" role="alert">
                    {t.error}
                  </p>
                )}
                <p className="form-note">{t.note}</p>
                <button type="submit" className="button" disabled={status === "sending"}>
                  {status === "sending" ? t.sending : t.send}
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="modal-success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2>{t.sentTitle}</h2>
              <p className="modal-subtitle">{t.sentSubtitle}</p>
              <button type="button" className="button" onClick={closeModal}>
                {t.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
