const element = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navigations")

const toggleNavbar = () => {
    mobileNav.classList.toggle("toggle-nav");
};

element.addEventListener('click', toggleNavbar);

window.onscroll = () => {
    mobileNav.classList.remove("toggle-nav");
}
