var teachersSwiper = new Swiper(".teachers-Swiper", {
  navigation: {
    nextEl: ".teachers-cont .swiper-button-next",
    prevEl: ".teachers-cont .swiper-button-prev",
  },
  pagination: {
    el: ".teachers-cont .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
