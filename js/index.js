// Bouton prise de devis
const devisButton = document.getElementById("devis-button");
const buttonSpeed = 0.2;
var topOffset = 0; // Offset pour savoir si le bouton est en dehors de l'ecran ou pas
var targetTop = screen.height + 100; // En dehors de l'ecran par défaut

// Update de la position y cible pour le boutton flottant de la page d'accueil
window.addEventListener("scroll", function (e) {
    targetTop = window.scrollY + (screen.height * 0.7);
    if(window.scrollY > 630) {
        topOffset = 0;
    }else {
        topOffset = 50;
    }
});

// Mouvement smooth vers la position cible
setInterval(function(){
    var currentPos = parseFloat(window.getComputedStyle(devisButton).getPropertyValue('top'));

    var step = ((targetTop - currentPos) * buttonSpeed);
    var nextPos = (currentPos + step) + topOffset;

    devisButton.style.top = nextPos + "px";
}, 1);
