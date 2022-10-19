const el = document.querySelector(".menu__contact");
const box = document.querySelector(".header__contactBox");
el.addEventListener("click", () => {
  box.classList.toggle("open");
});

const close = document.querySelector(".header__contactClose");
close.addEventListener("click", () => {
  box.classList.remove("open");
});
