var currentImage = 0;
const imagesParent = document.getElementById("galerie-images");
const circlesParent = document.getElementById("circles");
function OnNextImage (step = 1) {
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
    
    imagesParent.children[currentImage].classList.add("active");
    circlesParent.children[currentImage].classList.add("active");
}

function OnSelectShopCategory (itemName) {
    document.getElementById("galerie").style.display = "none";
    document.getElementById("articles-list").style.display = "block";

    document.getElementById("casques").style.display = "none";
    document.getElementById("gants").style.display = "none";
    document.getElementById("vestes").style.display = "none";

    document.getElementById(itemName).style.display = "block";
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
       width++;
        elem.style.width = width + "%";
      }
    }
  }
}

