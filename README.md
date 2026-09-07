# Barmaja

Sitio web de Barmaja: cada semana analizamos TikTok y el mercado
angloparlante para publicar los productos con más tracción para
ecommerce, con enlaces directos de búsqueda a proveedores en AliExpress
y Alibaba.

Proyecto llevado adelante por un equipo de estudiantes universitarios de
programación.

## Estructura

- `index.html` — página principal (español): hero, cómo funciona, productos de la semana, sobre nosotros, contacto
- `como-trabajamos.html` — metodología completa de selección de productos (español)
- `privacidad.html`, `terminos.html` — páginas legales (español)
- `reembolsos.html` — aviso de afiliación y proveedores externos (español)
- `en/` — versión completa en inglés de todas las páginas anteriores
- `styles.css` — estilos (fuentes Inter/Poppins auto-alojadas en `/fonts`, sin dependencias externas)
- `script.js` — toggle de tema claro/oscuro, animaciones al hacer scroll y validación del formulario de contacto

## Actualizar los productos de la semana

Los productos viven directamente en el HTML, dentro de `.products-grid`
en `index.html` (español) y `en/index.html` (inglés). Cada producto es
un bloque `<article class="product-card">` con: categoría, nombre,
señal de tendencia, motivo y enlaces de búsqueda a AliExpress/Alibaba.
Para actualizar la semana:

1. Editar los 8 `product-card` en `index.html` y su equivalente en `en/index.html`.
2. Actualizar el texto de `.week-pill` con la fecha de la semana en ambos idiomas.
3. Los enlaces de proveedor se generan como `https://www.aliexpress.com/wholesale?SearchText=<términos+en+inglés>` y `https://www.alibaba.com/trade/search?SearchText=<términos+en+inglés>`.

## Antes de publicar

Revisar los textos legales (privacidad, términos, aviso de afiliación)
con un profesional según la jurisdicción aplicable, especialmente si en
el futuro se añaden enlaces de afiliación remunerados.
