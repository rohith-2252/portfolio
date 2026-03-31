let slideIndex = 1;
let cnt = 0;
document.querySelectorAll('.header').innerHTML =
  '<p>header</p>'
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.slideshow-container')) {
    showSlides(slideIndex);
  }
});
const profession = [ "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Specialist",
  "Backend Engineer",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
  "Tech Innovator"];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function render(cnt) {
  const i = cnt;
  try {
    document.querySelector('.profession-render').innerHTML = profession[i];
    await delay(3000);
    if (cnt == profession.length - 1) {
      render(0)
    } else {
      render(i + 1);
    }
  }
  catch (err) {
    console.log(err);
  }
}
render(0);



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-right");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  // icon change
  if (menu.classList.contains("active")) {
    hamburger.innerHTML = "✖";
  } else {
    hamburger.innerHTML = "☰";
  }
});

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});