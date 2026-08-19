var swiper = new Swiper(".testimonials-Swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".testimonials-cont .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-cont .swiper-button-next",
    prevEl: ".testimonials-cont .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      direction: "horizontal",
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
      direction: "vertical",
    },
  },
});
