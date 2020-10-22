const header = document.getElementById("header");
var lastScroll = 0;

window.addEventListener("scroll", function (e) {
    var currentScroll = window.scrollY;

    if(currentScroll > lastScroll) {
        header.style.top = "-10vw";
    }else {
        header.style.top = "0vw";
    }

    lastScroll = currentScroll;
});