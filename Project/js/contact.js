"use strict";
// HEADER SHOW ON SCROLL UP HIDE ON SCROLL DOWN
let lastScrollTop = 0;

const header = document.querySelector("header");
const searchMenyu = document.querySelector(".search-bar-wrapper");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
    searchMenyu.classList.remove("active");
  } else {
    searchMenyu.classList.add("active");
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// MENYU BAR FOR MOBILES AND TABLETS
const sideBar = document.querySelector(".side-bar");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

// MODAL TOGGLE
const openButton = document.getElementById("signin");
const modalContainer = document.getElementById("modal-container");
const closeButton = document.getElementById("times");

openButton.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

// BUTTON SCROLL
const btnScroll = document.querySelector("#scrollToTop");

window.addEventListener("scroll", function () {
  btnScroll.classList.toggle("active", window.scrollY > 200);
});

btnScroll.addEventListener("click", () => {
  $("html,body").animate({ scrollTop: 0 }, "slow");
});

const email = document.getElementById("email");
const password = document.getElementById("password");
const modalForm = document.querySelector(".modal-form");
const text = document.querySelectorAll(".validation");
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

modalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if ((email.value && password.value) == "") {
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    email.setAttribute("required", "true");
    password.setAttribute("required", "true");
  } else {
    email.removeAttribute("required");
    password.removeAttribute("required");
    email.style.border = "";
    password.style.border = "";
    if (emailRegex.test(email.value) != true) {
      text[0].innerText = "Email is not valid";
      email.style.border = "1px solid red";
    } else {
      text[0].innerText = "";
      email.style.border = "";
    }
    if (/[A-Z]/.test(password.value) != true) {
      text[1].innerText = "Password must contain uppercase letter";
      password.style.border = "1px solid red";
    } else if (/[0-9]/.test(password.value) != true) {
      text[1].innerText = "Password must contain at least one number";
      password.style.border = "1px solid red";
    } else if (password.value.length < 8) {
      text[1].innerText = "Password must contain at least 8 characters";
    } else {
      text[1].innerText = "";
      password.style.border = "";
    }
  }
});

// CUSTOM CAROUSEL SCRIPT
$(".house").owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
