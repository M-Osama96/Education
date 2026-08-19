if (document.querySelector(".menu-btn") !== null) {
  const menu_btn = document.querySelector(".menu-btn");
  const body = document.body;
  const header = document.querySelector(".main-header");
  menu_btn.addEventListener("click", function () {
    header.classList.toggle("active");
    body.classList.toggle("overflow");
  });
}
