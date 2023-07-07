/*!
 * Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Membuat event deskripsi text turun kebawah
function textParallax() {
  var wScroll = window.scrollY;
  let desc = document.querySelector(".description");
  desc.style.transform = `translate(0, ${wScroll / 3}%)`;
}

function changeNavbar() {
  var wScroll = window.scrollY;
  let nav = document.querySelector(".navbar");
  if (wScroll > 20) {
    nav.classList.remove("bg-opacity-25");
    nav.classList.add("animasi-muncul");
  } else {
    nav.classList.add("bg-opacity-25");
    nav.classList.add("animasi-muncul");
  }
}
window.addEventListener("scroll", textParallax);
window.addEventListener("scroll", changeNavbar);
