let thumb = document.querySelector(".thumb");
let slider = document.querySelector(".slider");

thumb.addEventListener("mousedown", (event) => {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  thumb.style.zIndex = 10;

  function moveAt(pageX) {
    let newLeft = pageX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let right = slider.offsetWidth - thumb.offsetWidth;
    console.log(newLeft);
    if (newLeft > right) {
      newLeft = right;
    }
    thumb.style.left = newLeft + "px";
  }
  function mouseMove(event) {
    moveAt(event.pageX);
  }

  moveAt(event.pageX, shiftX);

  document.addEventListener("mousemove", mouseMove);

  thumb.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", mouseMove);
    thumb.onmouseup = null;
  });
});
