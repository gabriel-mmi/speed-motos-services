// Galerie
var currentImage = 0;
const imagesParent = document.getElementById("galerie-images");
const circlesParent = document.getElementById("circles");

// Quand clique sur les fleches
function OnNextImage (step = 1) {
    // Cache toutes les images et les cercles
    for (let index = 0; index < imagesParent.children.length; index++) {
        imagesParent.children[index].classList.remove("active");
        circlesParent.children[index].classList.remove("active");       
    }

    if(step < 0) {
        if(currentImage > 0) {
            currentImage += step;
        }else {
            currentImage = imagesParent.children.length - 1;
        }
    }else if (step > 0) {
        if(currentImage < imagesParent.children.length - 1) {
            currentImage += step;
        }else {
            currentImage = 0;
        }
    }
    
    // Affiche l'image et le cercle correspondant
    imagesParent.children[currentImage].classList.add("active");
    circlesParent.children[currentImage].classList.add("active");
}

// Quand clique sur les cercles en bas
function GoToImage (target) {
    for (let index = 0; index < imagesParent.children.length; index++) {
        imagesParent.children[index].classList.remove("active");
        circlesParent.children[index].classList.remove("active");       
    }

    currentImage = target;
    imagesParent.children[target].classList.add("active");
    circlesParent.children[target].classList.add("active");
}


// Categories de la boutique et affichage des items leurs correspondants
const casquesParent = document.getElementById("casques");
const gantsParent = document.getElementById("gants");
const vestesParent = document.getElementById("vestes");

function OnSelectShopCategory (itemName) {
    // Chache la galerie et affiche la liste d'article
    document.getElementById("galerie").style.display = "none";
    document.getElementById("articles-list").style.display = "block";

    // Cache touts les articles du shop
    casquesParent.style.display = "none";
    Array.prototype.slice.call(casquesParent.children).forEach(child => {
        child.style.opacity = "0";
    });
    gantsParent.style.display = "none";
    Array.prototype.slice.call(gantsParent.children).forEach(child => {
        child.style.opacity = "0";
    });
    vestesParent.style.display = "none";
    Array.prototype.slice.call(vestesParent.children).forEach(child => {
        child.style.opacity = "0";
    });

    // Affiche les articles correctes, les uns apres les autres (utilisation du timeout)
    document.getElementById(itemName).style.display = "block";
    for (let index = 0; index < document.getElementById(itemName).children.length; index++) {
        setTimeout(() => {
            document.getElementById(itemName).children[index].style.opacity = "1";
        }, 100 * index);       
    }
}