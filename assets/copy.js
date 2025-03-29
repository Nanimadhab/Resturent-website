let bar = document.querySelector("#bar");
let close = document.querySelector("#close");
let nav = document.querySelector(".navsection");
bar.addEventListener("click", () => {
  nav.classList.toggle("side-bar-manu");
});
close.addEventListener("click", () => {
  nav.classList.remove("side-bar-manu");
});
