import SiteChrome from "../../components/SiteChrome";

export const metadata = {
  title: "Política de Privacidad — Barmaja",
  description: "Cómo Barmaja recopila, usa y protege tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <SiteChrome lang="es" altHref="/en/privacy">
      <div className="legal-content">
        <h1>Política de Privacidad</h1>
        <p className="updated">Última actualización: 08/09/2026</p>

        <p>
          En Barmaja nos tomamos en serio la privacidad de quienes visitan este sitio, consultan los productos de la
          semana, crean una cuenta o nos escriben. Esta política explica qué datos recopilamos, para qué los usamos y
          qué derechos tienes sobre ellos.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          Barmaja es responsable de los datos recogidos a través de este sitio. Contacto:{" "}
          <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>

        <h2>2. Qué datos recopilamos</h2>
        <p>
          Recopilamos los datos que nos das voluntariamente: a través del formulario de contacto (nombre, correo y
          mensaje), y al crear una cuenta (correo electrónico y contraseña). Si te suscribes al plan premium, Stripe
          procesa el pago y nos indica el estado de tu suscripción (activa, cancelada); nosotros nunca vemos ni
          almacenamos el número de tu tarjeta.
        </p>

        <h2>3. Para qué usamos tus datos</h2>
        <p>
          Usamos tu correo y contraseña para gestionar el acceso a tu cuenta, y el estado de tu suscripción para saber
          qué contenido mostrarte. Usamos los datos del formulario de contacto únicamente para responder tu consulta.
          No usamos tus datos para publicidad ni los vendemos a terceros.
        </p>

        <h2>4. Base legal</h2>
        <p>
          Tratamos tus datos en base a la ejecución del contrato (darte acceso a tu cuenta y al contenido según tu
          plan) y a tu consentimiento explícito en el formulario de contacto.
        </p>

        <h2>5. Cookies y almacenamiento local</h2>
        <p>
          Este sitio no usa cookies de seguimiento ni publicitarias. Usamos cookies técnicas estrictamente necesarias
          para mantener tu sesión iniciada (gestionadas por Supabase, nuestro proveedor de autenticación), y
          almacenamiento local del navegador para recordar tu preferencia de modo claro u oscuro.
        </p>

        <h2>6. Con quién compartimos tus datos</h2>
        <p>
          No compartimos tus datos personales con terceros para fines comerciales. Usamos estos proveedores para
          operar el servicio:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> (autenticación y base de datos): almacena tu cuenta y el estado de tu plan.
          </li>
          <li>
            <strong>Stripe</strong> (pagos): procesa el cobro de la suscripción premium; consulta su política en{" "}
            <a href="https://stripe.com/es/privacy" target="_blank" rel="noopener">
              stripe.com/es/privacy
            </a>
            .
          </li>
          <li>
            <strong>Vercel Analytics</strong>: mide visitas de forma agregada y anónima, sin cookies. Más info en{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>
        <p>
          Los productos de esta web incluyen enlaces de búsqueda a AliExpress y Alibaba. Al hacer clic en ellos sales
          de nuestro sitio y pasas a navegar en su plataforma, sujeto a su propia política de privacidad.
        </p>

        <h2>7. Cuánto tiempo conservamos tus datos</h2>
        <p>
          Conservamos los datos de tu cuenta mientras exista, y los de contacto solo mientras sea necesario para
          atender tu consulta, salvo obligación legal de conservarlos más tiempo.
        </p>

        <h2>8. Tus derechos</h2>
        <p>
          Puedes pedirnos en cualquier momento acceder, corregir o eliminar tus datos (incluyendo borrar tu cuenta), u
          oponerte a su tratamiento, escribiendo a <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>
          .
        </p>

        <h2>9. Seguridad</h2>
        <p>Aplicamos medidas razonables para proteger tus datos frente a accesos no autorizados, pérdida o uso indebido. Las contraseñas se almacenan cifradas por Supabase; nunca las vemos en texto plano.</p>

        <h2>10. Cambios a esta política</h2>
        <p>Podemos actualizar esta política ocasionalmente. Publicaremos cualquier cambio en esta misma página con su fecha de actualización.</p>

        <h2>11. Contacto</h2>
        <p>
          Ante cualquier duda sobre esta política, escríbenos a <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>
      </div>
    </SiteChrome>
  );
}
