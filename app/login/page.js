import SiteChrome from "../../components/SiteChrome";
import LoginForm from "../../components/LoginForm";

export const metadata = { title: "Iniciar sesión — Barmaja" };

export default function LoginPage() {
  return (
    <SiteChrome lang="es" altHref="/login">
      <section className="hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
        <h1>Iniciar sesión</h1>
        <p>Accede a tu cuenta de Barmaja.</p>
      </section>
      <LoginForm />
    </SiteChrome>
  );
}
