"use strict";

const sideBar = document.querySelector(".side-bar");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
// first custom slider
$(".first").owlCarousel({
  loop: false,
  nav: true,
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
$(".second").owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  margin:20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 4,
    },
    1800: {
      items: 4,
    },
    1900: {
      items: 4,
      
    },
  },
});


$(".fourth").owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

