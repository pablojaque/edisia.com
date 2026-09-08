import { redirect } from "next/navigation";
import SiteChrome from "../../components/SiteChrome";
import AccountActions from "../../components/AccountActions";
import { getSessionAndPlan } from "../../lib/getSessionAndPlan";

export const metadata = { title: "Mi cuenta — Barmaja" };

export default async function CuentaPage() {
  const { user, plan, name } = await getSessionAndPlan();

  if (!user) {
    redirect("/login?next=/cuenta");
  }

  return (
    <SiteChrome lang="es" altHref="/cuenta">
      <section className="hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
        <h1>{name ? `¡Hola, ${name}!` : "Mi cuenta"}</h1>
        <p>Gestiona tu plan y tu suscripción.</p>
      </section>
      <section>
        <div className="section-inner">
          <div className="account-card">
            <span className={`plan-badge ${plan}`}>{plan === "premium" ? "Plan premium" : "Plan gratuito"}</span>
            <dl>
              {name && (
                <>
                  <dt>Nombre</dt>
                  <dd>{name}</dd>
                </>
              )}
              <dt>Correo electrónico</dt>
              <dd>{user.email}</dd>
              <dt>Plan actual</dt>
              <dd>{plan === "premium" ? "Premium — 9€/mes, acceso a los 8 productos" : "Gratuito — acceso a 3 productos por semana"}</dd>
            </dl>
            <AccountActions plan={plan} />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
