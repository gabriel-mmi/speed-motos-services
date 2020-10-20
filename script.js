var currentImage = 0;
const imagesParent = document.getElementById("galerie-images");
const circlesParent = document.getElementById("circles");
function OnNextImage (step = 1) {
    for (let index = 0; index < imagesParent.children.length; index++) {
        imagesParent.children[index].classList.remove("active");
        circlesParent.children[index].classList.remove("active");       
    }

    if(currentImage < imagesParent.children.length - 1) {
        currentImage += step;
    }else {
        currentImage = 0;
    }
    
    imagesParent.children[currentImage].classList.add("active");
    circlesParent.children[currentImage].classList.add("active");
}