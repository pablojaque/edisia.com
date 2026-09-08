import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Barmaja",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%234f46e5'/%3E%3Ctext x='32' y='45' font-family='Arial, sans-serif' font-size='34' font-weight='700' fill='white' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              var t = window.localStorage.getItem("barmaja_theme");
              if (t) document.documentElement.setAttribute("data-theme", t);
            } catch (e) {}
          })();`}
        </Script>
        {children}
        <Script
          id="vercel-analytics-shim"
          dangerouslySetInnerHTML={{
            __html:
              "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };",
          }}
        />
        <Script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  );
}
