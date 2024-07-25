"use strict";

const dots = document.querySelectorAll(".dot");
const btn = document.querySelector(".btn-read");
const span = document.querySelector("h2 span");

btn.addEventListener("click", function () {
  setTimeout(() => {
    this.textContent = "Readed";
    span.textContent = "0";
    dots.forEach((dot) => dot.classList.add("hide"));
  }, 300);
});
