import SiteChrome from "../../components/SiteChrome";

export const metadata = {
  title: "Cómo funciona — Barmaja",
  description: "Así encontramos cada semana los productos ganadores de TikTok: de dónde salen las señales y cómo llegamos a los proveedores.",
};

export default function ComoTrabajamosPage() {
  return (
    <SiteChrome lang="es" altHref="/en/how-we-work">
      <section className="hero">
        <h1>Así encontramos los productos ganadores</h1>
        <p>
          Nada de magia ni bolas de cristal: seguimos un proceso semanal y repetible, basado en señales reales del
          mercado angloparlante.
        </p>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="section-heading">
            <h2>El proceso, paso a paso</h2>
            <p>Así seleccionamos los productos de cada semana.</p>
          </div>
          <div className="process">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-content">
                <h3>Monitorizamos TikTok Creative Center</h3>
                <p>Revisamos la sección pública de tendencias de TikTok Ads: productos, hashtags y anuncios con más tracción, filtrado por EE.UU. y Reino Unido.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-content">
                <h3>Cruzamos señales del mercado</h3>
                <p>Comparamos con TikTok Shop, prensa especializada en ecommerce y herramientas de tendencias para confirmar que el interés es real y no un pico puntual.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-content">
                <h3>Filtramos por potencial real</h3>
                <p>Priorizamos productos fáciles de conseguir en AliExpress o Alibaba, con buen margen y fáciles de demostrar en vídeo.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-content">
                <h3>Publicamos y enlazamos proveedores</h3>
                <p>Cada semana actualizamos la lista con los productos ganadores y enlaces directos de búsqueda a proveedores, sin intermediarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <div className="section-heading">
            <h2>Qué puedes esperar</h2>
            <p>Tres cosas que no negociamos en ningún producto que publicamos.</p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>Honestidad</h3>
              <p>No inventamos cifras exactas de vistas o ventas: si un dato no está confirmado, lo decimos como señal, no como hecho.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                  stroke="#4f46e5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="4.2" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>Actualización semanal</h3>
              <p>La lista de productos se revisa y renueva cada semana; lo que ves hoy puede cambiar la semana que viene.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M4 5h16v10H8l-4 4V5z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <h3>Cero venta directa</h3>
              <p>No vendemos productos ni gestionamos envíos: solo te acercamos a los datos y a los proveedores. La compra la haces tú, directamente.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="cta-band">
            <h2>¿Tienes un nicho concreto en mente?</h2>
            <p>Escríbenos y te ayudamos a encontrar opciones a medida.</p>
            <a className="button" href="/#contacto">
              Cuéntanos tu caso
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
