window.addEventListener("scroll", function () {
    // Javascript for navgation bar effect on scroll
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 76);
})

// console.log(document.querySelector("header").offsetHeight);

// Javascript for responsive navigation sidebar menu

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
})

