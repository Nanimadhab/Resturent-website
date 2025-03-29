// slider images
let slidleft = document.querySelector(".arrow-left");
let slidright = document.querySelector(".arrow-right");
let slidImg = document.querySelector(".img-slidbar");
const imgs = document.querySelectorAll(".hero");
let fish1 = document.querySelector(".first-h1");
let expreenn = document.querySelector(".experince");

let count = 1;

slidright.addEventListener("click", () => {
  if (count < imgs.length) {
    slidImg.style.transform = `translateX(-${count * 100}%)`;
    count++;
    let h1 = document.createElement("h1");
    h1.innerText = "This food made by us";
    fish1.innerText = h1.innerText;
  } else {
    slidImg.style.transform = `translateX(0%)`;
    count = 1;
  }
});

slidleft.addEventListener("click", () => {
  if (count > 1) {
    slidImg.style.transform = `translateX(-${(count - 2) * 100}%)`;
    count--;
  } else {
    slidImg.style.transform = `translateX(-${(imgs.length - 1) * 100}%)`;
    count = imgs.length;
  }
});
// slider imges
let toggle = document.querySelector(".toggle");
let manu = document.querySelector(".manu");
toggle.addEventListener("click", () => {
  manu.classList.toggle("rot");
});

// h11.innerText = "Flavors Inspired by";
// bar-color
let close = document.querySelector("#close");
let bar = document.querySelector("#bar");
let nav = document.querySelector(".navsection");

bar.addEventListener("click", () => {
  nav.classList.toggle("side-bar-manu");
});
close.addEventListener("click", () => {
  nav.classList.remove("side-bar-manu");
});
