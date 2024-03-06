let menuSec = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu-icon");
let menuOptions = document.querySelector(".menu-options");
let menuAnchor = document.querySelectorAll(".menu-options a");

let checker = false;
menuIcon.addEventListener("click", () => {
  checker = !checker;
  menuOptions.classList.toggle("display");
  menuOptions.classList.toggle("no-display");
  if (checker) {
    menuIcon.src = "./img/cross.png";
  } else {
    menuIcon.src = "./img/menu.png";
  }
});

menuAnchor.forEach((elt) => {
  elt.addEventListener("click", () => {
    checker = !checker;
    menuOptions.classList.toggle("display");
    menuOptions.classList.toggle("no-display");
    if (checker) {
      menuIcon.src = "./img/cross.png";
    } else {
      menuIcon.src = "./img/menu.png";
    }
  });
});
