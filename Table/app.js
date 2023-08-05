let grid = document.getElementById("grid");
let gridInnerElements = document.querySelector("tbody");

grid.addEventListener("click", (event) => {
  let result;
  if (event.target.closest("th")) {
    let type = event.target.dataset.type;
    let ArrayRows = Array.from(gridInnerElements.rows);

    switch (type) {
      case "number":
        result = ArrayRows.sort((rowA, rowB) => {
          return rowA.children[0].innerHTML - rowB.children[0].innerHTML;
        });
        break;
      case "string":
        result = ArrayRows.sort((rowA, rowB) => {
          console.log(rowA.children[1].innerHTML);
          return rowA.children[1].innerText > rowB.children[1].innerText
            ? 1
            : -1;
        });
    }
  }
  
  gridInnerElements.append(...result);
});
