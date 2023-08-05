let ball = document.querySelector(".ball");

ball.addEventListener("mousedown", (event) => {
  ball.style.position = "absolute";
  ball.style.zIndex = 10;
  ball.hidden = true;
  console.log(document.elementFromPoint(event.clientX, event.clientY));
  ball.hidden = false;
  moveAt(event.pageX, event.pageY);

  ball.addEventListener("mouseup", (event) => {
    document.body.removeEventListener("mousemove", move);
    ball.onmouseup = null;
  });
  function moveAt(pageX, pageY) {
    // console.log(`PageX: ${pageX}`);
    // console.log(`PageY: ${pageY}`);
    // console.log(`Ball offsetWidth: ${ball.offsetWidth}`);
    // console.log(`Ball offsetHeight: ${ball.offsetHeight}`);

    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetHeight / 2 + "px";
  }

  function move(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.body.addEventListener("mousemove", move);
});
