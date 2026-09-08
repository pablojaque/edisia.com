import SiteChrome from "../../components/SiteChrome";

export const metadata = {
  title: "Términos y Condiciones — Barmaja",
  description: "Términos y condiciones de uso del sitio web y la suscripción premium de Barmaja.",
};

export default function TerminosPage() {
  return (
    <SiteChrome lang="es" altHref="/en/terms">
      <div className="legal-content">
        <h1>Términos y Condiciones</h1>
        <p className="updated">Última actualización: 08/09/2026</p>

        <p>Al usar este sitio, crear una cuenta o suscribirte al plan premium, aceptas los siguientes términos.</p>

        <h2>1. Quiénes somos</h2>
        <p>
          Barmaja publica cada semana una selección informativa de productos con tracción en TikTok y en el mercado
          angloparlante, junto con enlaces de búsqueda a proveedores en plataformas externas como AliExpress y
          Alibaba. Con una cuenta gratuita puedes ver 3 productos de la semana; con la suscripción premium, los 8.
        </p>

        <h2>2. Descripción del servicio</h2>
        <p>
          No vendemos productos, no gestionamos pedidos ni envíos, y no somos parte de ninguna transacción entre el
          usuario y un proveedor. La selección semanal se basa en señales públicas de tendencia y tiene fines
          informativos: no garantizamos que un producto listado vaya a venderse bien en tu caso concreto.
        </p>

        <h2>3. Cuentas de usuario</h2>
        <p>
          Para acceder a los productos y a la suscripción necesitas crear una cuenta con correo y contraseña. Eres
          responsable de mantener la confidencialidad de tu contraseña y de toda actividad realizada desde tu cuenta.
          Puedes pedirnos eliminar tu cuenta en cualquier momento.
        </p>

        <h2>4. Suscripción premium</h2>
        <p>
          El plan premium cuesta 9€/mes y se renueva automáticamente cada mes hasta que lo canceles. El pago se
          procesa a través de Stripe; nunca almacenamos los datos de tu tarjeta. Puedes cancelar cuando quieras desde
          tu página de cuenta: seguirás teniendo acceso premium hasta el final del periodo ya pagado, sin renovaciones
          posteriores. Al no ser un producto físico ni un servicio de ejecución inmediata irreversible, no se realizan
          reembolsos de periodos ya iniciados, salvo que la ley aplicable exija lo contrario.
        </p>

        <h2>5. Uso del sitio</h2>
        <p>Este sitio es informativo y sirve como canal de contacto. No debe usarse para fines ilegales ni para intentar vulnerar su seguridad o funcionamiento.</p>

        <h2>6. Enlaces a proveedores externos</h2>
        <p>
          Los botones &quot;Ver en AliExpress&quot; y &quot;Ver en Alibaba&quot; llevan a una búsqueda en esas
          plataformas, no a un proveedor concreto verificado por nosotros. No tenemos relación comercial, contrato ni
          afiliación con TikTok, AliExpress, Alibaba ni con los proveedores que aparezcan en esos resultados. Eres tú
          quien decide con qué proveedor contactar y quien debe verificar su fiabilidad, precios y condiciones antes de
          comprar.
        </p>

        <h2>7. Solicitudes y sugerencias</h2>
        <p>
          Si nos escribes pidiendo ayuda con un nicho o producto concreto, te respondemos con opciones a título
          informativo. No se genera ningún contrato de compraventa entre tú y Barmaja: cualquier acuerdo comercial es
          directamente entre tú y el proveedor que elijas.
        </p>

        <h2>8. Limitación de responsabilidad</h2>
        <p>
          En la medida permitida por la ley, Barmaja no será responsable por daños derivados de decisiones de compra,
          sourcing o negocio que tomes a partir de la información publicada en este sitio, ni por el contenido,
          calidad o cumplimiento de los proveedores externos enlazados.
        </p>

        <h2>9. Otros servicios de terceros</h2>
        <p>
          Este sitio usa Supabase (cuentas y base de datos), Stripe (pagos) y Vercel Analytics (visitas agregadas y
          anónimas, sin cookies). Aparte de los enlaces a proveedores descritos en el punto 6, no incluye ningún otro
          contenido embebido de terceros.
        </p>

        <h2>10. Modificaciones</h2>
        <p>Podemos actualizar estos términos ocasionalmente. La fecha de la última actualización figura al inicio de esta página.</p>

        <h2>11. Ley aplicable</h2>
        <p>Estos términos se rigen por la legislación de España.</p>

        <h2>12. Contacto</h2>
        <p>
          Para consultas sobre estos términos, escríbenos a <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>
      </div>
    </SiteChrome>
  );
}
