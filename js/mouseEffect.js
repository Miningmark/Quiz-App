

const circle = document.getElementById("circle");

document.addEventListener('mousemove', function (event) {
  console.log("MouseX", event.clientX, "MouseY", event.clientY);
  circle.style.top = event.clientY + "px";
  circle.style.left = event.clientX + "px";
});

