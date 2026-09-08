import { getSessionAndPlan } from "../lib/getSessionAndPlan";
import HeaderSidebar from "./HeaderSidebar";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";

export default async function SiteChrome({ lang, altHref, children }) {
  const { user, name } = await getSessionAndPlan();

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "es" ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      <HeaderSidebar lang={lang} user={user} name={name} altHref={altHref} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <ScrollReveal />
    </>
  );
}
