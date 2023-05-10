var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 100) {
    nav.classList.add("bg-primary", "shadow");
  } else {
    nav.classList.remove("bg-primary", "shadow");
  }
});
