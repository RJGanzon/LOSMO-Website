const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
})

document.querySelectorAll(".header-nav").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active");
}));