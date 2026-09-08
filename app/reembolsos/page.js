import SiteChrome from "../../components/SiteChrome";

export const metadata = {
  title: "Aviso de afiliación y proveedores externos — Barmaja",
  description: "Qué relación tiene Barmaja con TikTok, AliExpress, Alibaba y los proveedores enlazados en la web.",
};

export default function ReembolsosPage() {
  return (
    <SiteChrome lang="es" altHref="/en/refund">
      <div className="legal-content">
        <h1>Aviso de afiliación y proveedores externos</h1>
        <p className="updated">Última actualización: 08/09/2026</p>

        <p>
          Barmaja no vende productos ni gestiona pagos, pedidos o envíos de terceros (la única transacción que
          procesamos es tu propia suscripción premium, a través de Stripe). Esta página explica con claridad qué
          relación tenemos con TikTok, AliExpress, Alibaba y los proveedores que aparecen enlazados desde los
          productos de la semana.
        </p>

        <h2>1. No somos TikTok, AliExpress ni Alibaba</h2>
        <p>
          Barmaja no está afiliada, patrocinada ni respaldada por TikTok, ByteDance, AliExpress, Alibaba Group ni por
          ninguno de los proveedores que puedan aparecer en los resultados de búsqueda de esas plataformas. Todas las
          marcas mencionadas pertenecen a sus respectivos propietarios.
        </p>

        <h2>2. Qué son los enlaces de &quot;Ver en AliExpress / Alibaba&quot;</h2>
        <p>
          Cada botón de proveedor abre una búsqueda por palabras clave en la plataforma correspondiente, no la ficha
          de un proveedor concreto verificado por nosotros. No auditamos, inspeccionamos ni garantizamos a ningún
          proveedor que aparezca en esos resultados.
        </p>

        <h2>3. Cómo elegimos los productos de la semana</h2>
        <p>
          La selección se basa en señales públicas de tendencia (TikTok Creative Center, TikTok Shop y prensa
          especializada en ecommerce), descritas con más detalle en{" "}
          <a href="/como-trabajamos">Cómo funciona</a>. Es información con fines orientativos: no es garantía de que un
          producto vaya a venderse en tu tienda ni de la fiabilidad de un proveedor concreto.
        </p>

        <h2>4. Tu responsabilidad al comprar</h2>
        <p>
          Antes de contactar o pagar a cualquier proveedor encontrado a través de estos enlaces, verifica su
          reputación, condiciones, tiempos de envío y políticas de calidad. Cualquier acuerdo de compra, pago o
          disputa es exclusivamente entre tú y ese proveedor; Barmaja no interviene ni media en esas transacciones.
        </p>

        <h2>5. Posibles enlaces de afiliación</h2>
        <p>
          Si en el futuro alguno de estos enlaces pasa a ser de afiliación (es decir, si recibimos una comisión por
          compras realizadas a través de ellos), lo indicaremos de forma visible junto al enlace y actualizaremos esta
          página con la fecha del cambio.
        </p>

        <h2>6. Créditos de imágenes</h2>
        <p>
          Las fotos de producto de la sección semanal son imágenes genéricas de referencia (no fotos reales del
          proveedor), obtenidas de Wikimedia Commons bajo licencia Creative Commons:
        </p>
        <ul>
          <li>
            Lámpara: &quot;Dekala Arches™ Smart Lamp&quot; de LannyWay (
            <a href="https://commons.wikimedia.org/wiki/File:Dekala_Arches%E2%84%A2_Smart_Lamp.jpg">CC BY-SA 4.0</a>)
          </li>
          <li>
            Mini proyector: &quot;AAXATech P1 Pico Projector 2009&quot; de aaxatech (
            <a href="https://commons.wikimedia.org/wiki/File:AAXATech_P1_Pico_Projector_2009.jpg">CC BY 2.0</a>)
          </li>
          <li>
            Organizador de especias: &quot;Herbs and Spices storage in the kitchen&quot; de Stonesynergyimages (
            <a href="https://commons.wikimedia.org/wiki/File:Herbs_and_Spices_storage_in_the_kitchen.jpg">CC BY-SA 4.0</a>)
          </li>
          <li>
            Gafas: &quot;Pair of sunglasses lens down&quot; de Jtasking (
            <a href="https://commons.wikimedia.org/wiki/File:Pair_of_sunglasses_lens_down.jpg">CC BY-SA 4.0</a>)
          </li>
          <li>
            Contenedor térmico: foto de termos de acero de Ewloskalw (
            <a href="https://commons.wikimedia.org/wiki/File:HK_CWB_Saint_Mary%27s_Church_Bday_%E6%9A%96%E6%B0%B4%E5%A3%BA_hot_drinking_water_Stainless_steel_thermos_bottles_Vacuum_flasks_May-2013.JPG">CC BY-SA 3.0</a>)
          </li>
          <li>
            Power bank: &quot;Power bank&quot; de Ilya Plekhanov (
            <a href="https://commons.wikimedia.org/wiki/File:Power_bank.JPG">CC BY-SA 3.0</a>)
          </li>
          <li>
            Stick de crema: &quot;ChapStick lip balm&quot; de Jorge Barrios Riquelme (
            <a href="https://commons.wikimedia.org/wiki/File:ChapStick_lip_balm.jpg">CC BY-SA 4.0</a>)
          </li>
          <li>
            Soporte para creadores: &quot;Smartphone tripod braces&quot; de Draco flavus (
            <a href="https://commons.wikimedia.org/wiki/File:Smartphone_tripod_braces.jpg">CC BY-SA 3.0</a>)
          </li>
        </ul>

        <h2>7. Contacto</h2>
        <p>
          Cualquier duda sobre este aviso, escríbenos a <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>

        <div className="legal-disclaimer">
          <p>
            Este texto es una plantilla base y conviene ajustarlo con un profesional legal según la legislación
            aplicable en tu país, especialmente si en el futuro se incorporan enlaces de afiliación remunerados.
          </p>
        </div>
      </div>
    </SiteChrome>
  );
}
