const steps = document.getElementById("steps");
var currentStep = 0;

function NextFormStep () {
    if(currentStep < steps.children.length - 1) {
        console.log("next step");
        steps.children[currentStep].style.display = "none";
        currentStep++;
        steps.children[currentStep].style.display = "block";
    }
}

boutonsChoix = document.getElementsByClassName("btn-choix");
[].slice.call(boutonsChoix).forEach(function (item, idx) {
    item.addEventListener('click', function () {
        item.classList.toggle("active");
        console.log(item);
    });
});