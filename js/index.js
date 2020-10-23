
// Bouton prise de devis
const devisButton = document.getElementById("devis-button");
const buttonSpeed = 0.2;
var topOffset = 0; // Offset pour savoir si le bouton est en dehors de l'ecran ou pas
var targetTop = screen.height + 100; // En dehors de l'ecran par défaut

// Voir en bas pour gestion du scroll du bouton

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

overlay.addEventListener("mouseover", function(){
    left.style.left = "40%";
    right.style.right= "40%";
});
overlay.addEventListener("mouseout", function(){

    left.style.left = "50%";
    right.style.right= "50%";
});

// Affichage fade in des sections lors du scroll

// Affiche le texte de landing avec un delai pour eviter que l'ecran de chargement ne cache l'anim
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("landing-text").style.opacity = "1";
    }, 1700);
});

// Gestion des anims lors du scroll et du bouton flottant
window.addEventListener("scroll", function(e) {
    var scroll = window.scrollY;

    // Bouton flottant animation
    targetTop = scroll + (screen.height * 0.7);
    if(scroll < 450 || scroll > 3500) {
        devisButton.style.right = "-5vw";
        devisButton.style.opacity = "0";
    }else {
        devisButton.style.right = "100px";
        devisButton.style.opacity = "1";
    }

    // Fade in animations
    if(scroll > 450 && scroll < 2040) {
        document.getElementById("services-title").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("services-panel-left").style.opacity = "1";
            document.getElementById("services-panel-right").style.opacity = "1";
        }, 800);
    }else if (scroll > 2040 && scroll < 3020) {
        document.getElementById("apropos-title").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("apropos-para").style.opacity = "1";
        }, 800);
    }else if(scroll > 3020) {
        console.log("a");
        for (let index = 0; index < document.getElementById("avis-list").children.length; index++) {
            setTimeout(() => {
                document.getElementById("avis-list").children[index].style.opacity = "1";
            }, 200 * index);       
        }
    }
});
