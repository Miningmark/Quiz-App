

const circle = document.getElementById("circle");

let mousePosX = 0;
let mousePosY = 0;
let scrollX = 0;
let scrollY = 0;
let isX = 0;
let isY = 0;
let shouldX = 0;
let shouldY = 0;

document.addEventListener('mousemove', function (event) {
  mousePosX = event.clientX;
  mousePosY = event.clientY;
  mouseEffect();
});

document.addEventListener("scroll", function (event) {
  scrollX = window.scrollX;
  scrollY = window.scrollY;
  mouseEffect();
});



function mouseEffect(){
  shouldX = mousePosX + scrollX;
  shouldY = mousePosY + scrollY;
  circle.style.top = shouldY + "px";
  circle.style.left = shouldX + "px";
}

