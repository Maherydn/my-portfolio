const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.remove("h-24");
    header.classList.add("h-14");
  } else {
    header.classList.remove("h-14");
    header.classList.add("h-24");
  }
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "./images/CV.pdf";
  link.download = "CV.pdf";
  link.click();
}
