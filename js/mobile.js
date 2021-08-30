window.addEventListener("load", function () {
  let icon = document.querySelector(".navigation__icon");
  let menu = document.querySelector(".list_nav");
  let listMenu = document.querySelectorAll(".list_nav a");

  icon.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
    listMenu.forEach((element) => {
      element.addEventListener("click", function () {
        menu.classList.remove("mostrar");
      });
    });
  });
});
