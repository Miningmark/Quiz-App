

generateBackground();

window.addEventListener('resize', function (event) {
  generateBackground();
});


function generateBackground(){
  const hexDiv = document.querySelector(".hexDiv");
  hexDiv.innerHTML = "";
  const displaySizeY = window.innerHeight;
  const displaySizeX = window.innerWidth;
  //console.log("displaySizeX ", displaySizeX, "displaySizeY ", displaySizeY);
  const rows = Math.floor(displaySizeY / (110 - 32)) + 1;
  const columns = Math.floor(displaySizeX / 100) + 2;
  //console.log("rows ", rows, "columns", columns);

  for(let i = 0; i < rows; i++){
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < columns; j++){
      const column = document.createElement("div");
      column.classList.add("hexagon");
      row.append(column);
    }
    hexDiv.append(row);
  }  
}



const circle = document.getElementById("circle");

let circleSize = circle.clientHeight;
let mousePosX = 0;
let mousePosY = 0;
let isX = 0;
let isY = 0;
let shouldX = 0;
let shouldY = 0;
const offSetY = 0;
const borderTop = 0;
const borderBottom = 52;
let flag = false;

//Mousemove Event to mousePosition
window.addEventListener('mousemove', function (event) {
  mousePosX = event.clientX;
  mousePosY = event.clientY;
  mouseEffect();
});

//Touch Event to mousePosition
window.addEventListener("touchmove", function (event) {
  mousePosX = event.touches[0].clientX;
  mousePosY = event.touches[0].clientY;
  mouseEffect();
});


function mouseEffect(){
  circleSize = circle.clientHeight;
  shouldX = mousePosX - circleSize / 2;
  shouldY = mousePosY + offSetY - circleSize / 2;
  circle.style.top = shouldY + "px";
  circle.style.left = shouldX + "px";
  addMoveClass();
}

function addMoveClass(){
  if(!flag){
    document.querySelector('.circle').classList.add('move');
  }
}

