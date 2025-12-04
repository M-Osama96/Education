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

// const accordionHeaders = document.querySelectorAll(
//   ".activites-Swiper .swiper-slide"
// );

// accordionHeaders.forEach((header) => {
//   header.addEventListener("click", () => {
//     const openItem = document.querySelector(
//       ".activites-Swiper .swiper-slide.active-a"
//     );

//     if (openItem && openItem !== header) {
//       openItem.classList.remove("active-a");
//     }

//     header.classList.toggle("active-a");
//   });
// });

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

var swiper = new Swiper(".testimonials-Swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
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
var swiper = new Swiper(".activities-archive-swiper", {
  pagination: {
    el: ".activities-archive-cont .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let num = String(index + 1).padStart(2, "0");
      return '<span class="' + className + '">' + num + "</span>";
    },
  },
  navigation: {
    nextEl: ".activities-archive-cont .swiper-button-next",
    prevEl: ".activities-archive-cont .swiper-button-prev",
  },
});

const accordionHeaders = document.querySelectorAll(
  ".activities-archive-slide .activity-item"
);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const openItem = document.querySelector(
      ".activities-archive-slide .activity-item.active-ar"
    );

    if (openItem && openItem !== header) {
      openItem.classList.remove("active-ar");
    }

    header.classList.toggle("active-ar");
  });
});
const accordionHeaderss = document.querySelectorAll(
  ".activities-archive-slide .activity-item"
);

accordionHeaderss.forEach((header) => {
  header.addEventListener("click", () => {
    // ✅ الشرط اللي بيحدد الرينج المطلوب
    if (window.innerWidth >= 767 && window.innerWidth <= 991) {
      const openItem = document.querySelector(
        ".activities-archive-slide .activity-item.active-sm"
      );

      if (openItem && openItem !== header) {
        openItem.classList.remove("active-sm");
      }

      header.classList.toggle("active-sm");
    }
  });
});

var thumbsSwiper = new Swiper(".thumbs-swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      spaceBetween: 2,
    },
    768: {
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var mainSwiper = new Swiper(".activity-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".single-activity-cont .swiper-button-next",
    prevEl: ".single-activity-cont .swiper-button-prev",
  },

  thumbs: {
    swiper: thumbsSwiper,
  },
});
