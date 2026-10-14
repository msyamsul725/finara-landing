function initLegalPage() {
  document.documentElement.classList.add("js");

  const menu = document.querySelector<HTMLButtonElement>("[data-legal-nav-toggle]");
  const nav = document.querySelector<HTMLElement>("#navigation");
  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Buka menu");
    };

    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("open", open);
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menu.focus();
      }
    });
  }

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const id = entry.target.id;
          document.querySelectorAll(".toc a").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
    },
    { rootMargin: "-110px 0px -55% 0px", threshold: 0 },
  );

  document.querySelectorAll(".legal-section").forEach((section) => observer.observe(section));
}

initLegalPage();
document.addEventListener("astro:page-load", initLegalPage);
