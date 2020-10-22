const overlay= document.querySelector(".overlay_container_moto");
const left= document.querySelector(".text_left");
const right= document.querySelector(".text_right");
const img= document.querySelector(".overlay_container_moto img");

console.log(right);

overlay.addEventListener("mouseover", function(){
    left.style.left = "40%"
    right.style.right= "40%"
})
overlay.addEventListener("mouseout", function(){

    left.style.left = "50%"
    right.style.right= "50%"
})
