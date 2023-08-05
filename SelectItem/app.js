let listItem = document.getElementById("ul");

listItem.addEventListener("click", (event) => {
  if (event.target.closest("li")) {
    let list = Array.from(event.target.parentNode.children);
    if (event.ctrlKey) {
      event.target.classList.add("selected");
    } else {
      list
        .filter((value) => value.classList.contains("selected"))
        .map((value) => value.classList.remove("selected"));
      event.target.classList.add("selected");
    }
  }
});
