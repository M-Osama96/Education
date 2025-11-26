if (document.querySelector(".menu-btn") !== null) {
  const menu_btn = document.querySelector(".menu-btn");
  const body = document.body;
  const header = document.querySelector(".main-header");
  menu_btn.addEventListener("click", function () {
    header.classList.toggle("active");
    body.classList.toggle("overflow");
  });
}

Fancybox.bind("[data-fancybox]", {
  //
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let num = String(index + 1).padStart(2, "0");
      return '<span class="' + className + '">' + num + "</span>";
    },
  },
});

var activitiesswiper = new Swiper(".activites-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  // initialSlide: 3,
  // loop: true,
  // centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    // when window width is >= 1024px
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
var teachersSwiper = new Swiper(".teachers-Swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
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

var swiper = new Swiper(".testimonials-Swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
if (document.querySelectorAll(".banner-cont") !== null) {
  let elementsArray = document.querySelectorAll(".banner-cont");
  window.addEventListener("scroll", fadeIn);
  function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
      var elem = elementsArray[i];
      var distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 0;
      console.log(distInView);
      if (distInView < 0) {
        elem.classList.add("inView");
      } else {
        elem.classList.remove("inView");
      }
    }
  }
  fadeIn();
}
