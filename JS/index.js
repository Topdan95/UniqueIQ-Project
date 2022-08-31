const element = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navigations");
const courseDropDown = document.querySelector(".drop-down-course");
const courseEl = document.querySelector(".course-categories");
const scrollEl = document.querySelector(".cardds");
const scrollElRight = document.querySelector(".toggle-right");
const scrollElLeft = document.querySelector(".toggle-left");
const switchEl = document.querySelector(".cards")
const switchElLeft = document.querySelector(".switch-left");
const switchElRight = document.querySelector(".switch-right");

const toggleNavbar = () => {
    mobileNav.classList.toggle("toggle-nav");
};

const toggleCourse = () => {
    courseEl.classList.toggle("toggle-course");
}

element.addEventListener('click', toggleNavbar);

courseDropDown.addEventListener('click', toggleCourse);

window.onscroll = () => {
    mobileNav.classList.remove("toggle-nav");
    courseEl.classList.remove("toggle-course");
};


const scrollLeft = () => {
    scrollEl.scrollBy(-350, 0);
};

const scrollRight = () => {
    scrollEl.scrollBy(350, 0);
};

scrollElLeft.addEventListener('click', scrollLeft)
scrollElRight.addEventListener('click', scrollRight)

const switchLeft = () => {
    switchEl.scrollBy(-400, 0);
};

const switchRight = () => {
    switchEl.scrollBy(400, 0);
};

switchElLeft.addEventListener('click', switchLeft)
switchElRight.addEventListener('click', switchRight)






