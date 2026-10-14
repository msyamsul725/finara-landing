function initLandingMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealSelectors = [
    ".story-title",
    ".story-text",
    ".story-art",
    ".feature",
    ".workspace-card",
    ".steps article",
    ".section-head",
    ".faq details",
    ".cta",
  ];

  const animateCount = (el: HTMLElement) => {
    if (el.dataset.counted === "true") return;
    el.dataset.counted = "true";
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString("id-ID");
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const showAll = () => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      if (el.dataset.counted === "true") return;
      const target = Number(el.dataset.count);
      if (Number.isFinite(target)) {
        el.textContent = target.toLocaleString("id-ID");
      }
    });
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  document.body.classList.add("motion-enabled");

  document.querySelectorAll(".feature").forEach((el, index) => {
    el.classList.add("reveal");
    (el as HTMLElement).style.setProperty("--delay", `${index * 130}ms`);
  });

  revealSelectors.forEach((selector) => {
    if (selector === ".feature") return;
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("reveal");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach(animateCount);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (event) => {
    if (event.matches) {
      document.body.classList.remove("motion-enabled");
      showAll();
    }
  });
}

initLandingMotion();
document.addEventListener("astro:page-load", initLandingMotion);
