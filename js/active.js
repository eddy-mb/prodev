addEventListener("DOMContentLoaded", () => {
  let list_nav = document.querySelector(".list_nav");
  let items = document.querySelectorAll(".list_nav li a");

  items.forEach((data) => {
    data.addEventListener("click", function () {
      list_nav.querySelector(".active").classList.remove("active");
      data.classList.add("active");
    });
  });

  const sections = document.querySelectorAll(".scroll");
  const funcion_observer = (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const entrada_actual = Array.from(items).find(
          (item) => item.dataset.url === entrada.target.id
        );
        entrada_actual.classList.add("active");

        for (const item of items) {
          if (item != entrada_actual) {
            item.classList.remove("active");
          }
        }
      }
    });
  };
  const observer = new IntersectionObserver(funcion_observer, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });
  sections.forEach((seccion) => observer.observe(seccion));
});
