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


// Animation textes avis
const avis1 = document.querySelector('#avis1-texte');
const avis2 = document.querySelector('#avis2-texte');
const avis3 = document.querySelector('#avis3-texte');


var typewriter = new Typewriter(avis1, {
    loop: true
 });

    typewriter.typeString("\"J'adore Franck!\"")
        .pauseFor(1500)
        .deleteAll()
        .typeString("\"Le garage est super\"")
        .pauseFor(1700)
        .start();

var typewriter = new Typewriter(avis2, {
    loop: true
 });

    typewriter.typeString("\"Un merveilleux garage\"")
        .pauseFor(3000)
        .deleteAll()
        .typeString("\"De précieux conseils !!\"")
        .pauseFor(1500)
        .start();

var typewriter = new Typewriter(avis3, {
    loop: true
 });

typewriter.typeString("\"J’ai adoré être client\"")
    .pauseFor(2000)
    .deleteAll()
    .typeString("\"Un accueil incroyable\"")
    .pauseFor(1000)
    .start();

// Motos section animation
const overlay= document.querySelector(".overlay_container_moto");
const left= document.querySelector(".text_left");
const right= document.querySelector(".text_right");
const img= document.querySelector(".overlay_container_moto img");

console.log(right);

overlay.addEventListener("mouseover", function(){
    left.style.left = "40%";
    right.style.right= "40%";
});
overlay.addEventListener("mouseout", function(){

    left.style.left = "50%";
    right.style.right= "50%";
});
