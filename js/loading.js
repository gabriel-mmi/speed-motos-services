document.body.style.overflowY = "hidden";
console.log("loading");
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
        document.body.style.overflowY = "scroll";
        console.log("loaded");
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 500);
    }, 1000);
});