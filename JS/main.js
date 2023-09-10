let allMainLinks = document.querySelectorAll(".navlinks .mainlinks li a");
let btn = document.querySelector(".btn");
let navLinks = document.querySelector(".navlinks");
allMainLinks.forEach((mainLink) => {
  mainLink.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
    navLinks.classList.remove("open");
    btn.classList.remove("change");
  });
});

btn.addEventListener("click", function () {
  btn.classList.contains("change")
    ? btn.classList.remove("change")
    : btn.classList.add("change");
  navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
    navLinks.classList.remove("open");
    btn.classList.remove("change");
  }
});
window.addEventListener(`scroll`, reveal);
function reveal() {
  let reveals = document.querySelectorAll(`.reveal`);
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add(`showme`);
    } else {
      reveals[i].classList.remove(`showme`);
    }
  }
}
let year = document.getElementById("year");
let currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
