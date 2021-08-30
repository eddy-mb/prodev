addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".container_head", {
    duration: 2000,
    reset: true,
  });
  ScrollReveal().reveal(".container__image", {
    origin: "left",
    distance: "50%",
    duration: 3000,
    reset: true,
  });

  ScrollReveal().reveal(".container__text > h2", {
    origin: "top",
    distance: "150%",
    duration: 1000,
    reset: true,
  });
  ScrollReveal().reveal(".container__text > h1", {
    duration: 3000,
    delay: 500,
    reset: true,
  });
  ScrollReveal().reveal(".container__text > h3, article", {
    duration: 3000,
    delay: 1000,
    reset: true,
  });
});

ScrollReveal().reveal(".container__title", {
  duration: 2000,
  rotate: {
    y: 180,
  },
  reset: true,
});
ScrollReveal().reveal(
  ".container_nosotros__animation, .animation__services__one",
  {
    origin: "left",
    distance: "50%",
    duration: 1500,
    reset: true,
  }
);
ScrollReveal().reveal(".container_nosotros__mis-vis", {
  delay: 1000,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".container_portafolio__info", {
  origin: "top",
  distance: "50%",
  duration: 1500,
  reset: true,
});

ScrollReveal().reveal(".container_nosotros_img, .animation__services__two", {
  origin: "right",
  distance: "50%",
  duration: 1500,
  reset: true,
});
ScrollReveal().reveal(".container_contacto_img", {
  duration: 1000,
  reset: true,
  origin: "left",
  distance: "50%",
});
ScrollReveal().reveal(".container__form", {
  duration: 2000,
  delay: 2000,
  rotate: {
    x: 180,
    y: 180,
  },
  reset: true,
});
