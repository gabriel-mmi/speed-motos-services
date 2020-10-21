const aboutOne = document.getElementById("about-one");
const aboutTwo = document.getElementById("about-two");

aboutTwo.style.opacity = 0;

window.addEventListener("scroll", function () {
    if(scrollY > 550) {
        aboutOne.style.opacity = 0;
        aboutTwo.style.opacity = 1;
    }else {
        aboutOne.style.opacity = 1;
        aboutTwo.style.opacity = 0;
    }
});