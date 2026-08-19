var swiper = new Swiper(".hero-cont .mySwiper", {
  pagination: {
    el: ".hero-cont .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let num = String(index + 1).padStart(2, "0");
      return '<span class="' + className + '">' + num + "</span>";
    },
  },
});
