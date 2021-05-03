const navBtn = document.getElementById("nav__toggle");
const links = document.getElementById("nav__links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show__links");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});