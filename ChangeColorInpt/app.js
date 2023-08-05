let container = document.querySelector(".container");
let square = document.querySelector(".square");
console.log(square);
container.addEventListener("keyup", (event) => {
  if (event.target.closest("#inputSquare")) {
    square.style.backgroundColor = event.target.value;
  }
});
