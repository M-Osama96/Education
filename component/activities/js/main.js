var activitiesswiper = new Swiper(".activites-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".activities-cont .swiper-button-next",
    prevEl: ".activities-cont .swiper-button-prev",
  },
  pagination: {
    el: ".activities-cont .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
});
