"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll(".section-heading, .service-card, .product-card, .cta-band, .about")
    ).filter((el) => !el.closest("#como-funciona, #how-it-works"));
    if (!revealTargets.length) return;

    const reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("reveal", "is-visible"));
      return;
    }

    revealTargets.forEach((el) => el.classList.add("reveal"));

    [".services-grid", ".products-grid"].forEach((groupSelector) => {
      document.querySelectorAll(groupSelector).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (child.classList.contains("reveal")) {
            child.style.setProperty("--reveal-delay", `${index * 100}ms`);
          }
        });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
