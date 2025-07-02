// Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Opcional: cerrar menú al hacer click en un enlace (muy común en móviles)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    }
  });
});
