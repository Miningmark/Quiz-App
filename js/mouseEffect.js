

const circle = document.getElementById("circle");

let mousePosX = 0;
let mousePosY = 0;
let isX = 0;
let isY = 0;
let shouldX = 0;
let shouldY = 0;
const offSetY = 0;
const borderTop = 100;
const borderBottom = 52;

document.addEventListener('mousemove', function (event) {
  mousePosX = event.clientX;
  mousePosY = event.clientY;
  mouseEffect();
});




function mouseEffect(){
  shouldX = mousePosX;
  shouldY = mousePosY + offSetY;
  console.log(shouldY);
  if(shouldY < borderTop){
    circle.style.top = borderTop + "px";
  }else if(shouldY > borderTop && shouldY < window.innerHeight - borderBottom + offSetY){
    circle.style.top = shouldY + "px";
  }else{
    circle.style.top = window.innerHeight - borderBottom + offSetY + "px";
  }
  circle.style.left = shouldX + "px";
}

