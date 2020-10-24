document.body.style.overflowY = "hidden";

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
        document.body.style.overflowY = "scroll";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 500);
    }, 6000);
});