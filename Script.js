// Sticky Navbar Shrink
let timer;
window.addEventListener("scroll", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const header = document.querySelector("header");
        header.classList.toggle("shrink", window.scrollY > 50);
    }, 100);
});
// Toggle Profile Dropdown
document.querySelector(".user-icon").addEventListener("click", () => {
    document.querySelector(".user-profile").classList.toggle("active");
});
// Toggle Mobile Menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
});