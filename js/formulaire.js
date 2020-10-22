const steps = document.getElementById("form-steps");
var currentStep = 0;

function NextFormStep () {
    if(currentStep < steps.children) {
        steps.children[currentStep].style.display = "none";
        currentStep++;
        steps.children[currentStep].style.display = "block";
    }
}