import Link from "next/link";

const COPY = {
  es: {
    email: "pablojaquevfx@gmail.com",
    legalTitle: "Legal",
    legal: [
      { href: "/privacidad", label: "Política de Privacidad" },
      { href: "/terminos", label: "Términos y Condiciones" },
      { href: "/reembolsos", label: "Aviso de afiliación y proveedores" },
    ],
    navTitle: "Navegación",
    nav: [
      { href: "/#productos", label: "Productos" },
      { href: "/como-trabajamos", label: "Cómo funciona" },
      { href: "/#sobre-nosotros", label: "Sobre nosotros" },
      { href: "/#contacto", label: "Contacto" },
    ],
    bottom: "© 2026 Barmaja. Proyecto desarrollado por estudiantes de programación.",
  },
  en: {
    email: "pablojaquevfx@gmail.com",
    legalTitle: "Legal",
    legal: [
      { href: "/en/privacy", label: "Privacy Policy" },
      { href: "/en/terms", label: "Terms & Conditions" },
      { href: "/en/refund", label: "Affiliate & Suppliers Disclosure" },
    ],
    navTitle: "Navigation",
    nav: [
      { href: "/en#products", label: "Products" },
      { href: "/en/how-we-work", label: "How it works" },
      { href: "/en#about", label: "About us" },
      { href: "/en#contact", label: "Contact" },
    ],
    bottom: "© 2026 Barmaja. Project developed by programming students.",
  },
};

export default function Footer({ lang }) {
  const t = COPY[lang];
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Barmaja</h3>
          <address>
            Email: <a href={`mailto:${t.email}`}>{t.email}</a>
          </address>
        </div>
        <div>
          <h3>{t.legalTitle}</h3>
          <ul>
            {t.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t.navTitle}</h3>
          <ul>
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.bottom}</p>
      </div>
    </footer>
  );
}
