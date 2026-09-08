import SiteChrome from "../../components/SiteChrome";
import RegisterForm from "../../components/RegisterForm";

export const metadata = { title: "Crear cuenta — Barmaja" };

export default function RegistroPage() {
  return (
    <SiteChrome lang="es" altHref="/registro">
      <section className="hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
        <h1>Crea tu cuenta gratis</h1>
        <p>Regístrate para ver los productos de la semana. Puedes hacerte premium después si quieres verlos todos.</p>
      </section>
      <RegisterForm />
    </SiteChrome>
  );
}
