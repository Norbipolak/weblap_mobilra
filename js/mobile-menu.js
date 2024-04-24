const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector("#desktop-nav");
const bars = document.querySelector("#bars");
console.log(bars);

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");

    if(bars.classList.contains("fa-bars")) {
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
    } else {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    }
});