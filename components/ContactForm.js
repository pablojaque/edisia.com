"use client";

import { useState } from "react";

const FORMSPREE_ACTION = "https://formspree.io/f/xppzjnoq";

const COPY = {
  es: {
    heading: "Sugiere un producto o pide ayuda",
    subheading: "Cuéntanos tu nicho o el producto que buscas y te respondemos con opciones concretas.",
    subjectField: "Nuevo mensaje de contacto — Barmaja",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Tu nicho o el producto que buscas",
    consent: "consentimiento",
    consentLabel: (
      <>
        He leído y acepto la <a href="/privacidad">Política de Privacidad</a> y los{" "}
        <a href="/terminos">Términos y Condiciones</a>.
      </>
    ),
    note: "Solo usamos estos datos para responder tu consulta. No los compartimos con terceros ni los usamos para publicidad.",
    send: "Enviar mensaje",
    sending: "Enviando…",
    consentMessage: "Antes de enviar el formulario, marca la casilla de consentimiento para tratar tus datos.",
    success: "¡Gracias! Te vamos a responder pronto a tu correo.",
    error: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo o escríbenos a pablojaquevfx@gmail.com.",
  },
  en: {
    heading: "Suggest a product or ask for help",
    subheading: "Tell us your niche or the product you're after and we'll get back to you with concrete options.",
    subjectField: "New contact message — Barmaja",
    name: "Name",
    email: "Email address",
    message: "Your niche or the product you're after",
    consent: "consent",
    consentLabel: (
      <>
        I have read and accept the <a href="/en/privacy">Privacy Policy</a> and the{" "}
        <a href="/en/terms">Terms &amp; Conditions</a>.
      </>
    ),
    note: "We only use this information to reply to your inquiry. We don't share it with third parties or use it for advertising.",
    send: "Send message",
    sending: "Sending…",
    consentMessage: "Before sending the form, please check the consent box to process your data.",
    success: "Thanks! We'll get back to you soon by email.",
    error: "Something went wrong sending your message. Please try again or email us at pablojaquevfx@gmail.com.",
  },
};

export default function ContactForm({ lang }) {
  const t = COPY[lang];
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const consent = form.elements.namedItem(t.consent);
    if (consent && !consent.checked) {
      setStatus("error");
      setMessage(t.consentMessage);
      consent.focus();
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setMessage("");
    fetch(FORMSPREE_ACTION, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setStatus("sent");
          setMessage(t.success);
          form.reset();
        } else {
          setStatus("error");
          setMessage(t.error);
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage(t.error);
      });
  }

  return (
    <section id={lang === "es" ? "contacto" : "contact"}>
      <div className="section-inner">
        <div className="section-heading">
          <h2>{t.heading}</h2>
          <p>{t.subheading}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value={t.subjectField} />
          <div className="form-field">
            <label htmlFor="name">{t.name}</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">{t.email}</label>
            <input type="email" id="email" name="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">{t.message}</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <div className="consent-field">
            <input type="checkbox" id="consent" name={t.consent} required />
            <label htmlFor="consent">{t.consentLabel}</label>
          </div>
          <p className="form-note">{t.note}</p>
          <p aria-live="polite" role={status === "error" ? "alert" : undefined}>
            {message}
          </p>
          <button type="submit" className="button" disabled={status === "sending"}>
            {status === "sending" ? t.sending : t.send}
          </button>
        </form>
      </div>
    </section>
  );
}
