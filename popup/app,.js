let btnModal = document.querySelector(".btn-modal");
let windowModal = document.getElementById("modalwindow");
let bodyModal = document.querySelector("modal-body");
let popupClose = document.querySelector(".popup-close");

btnModal.addEventListener("click", () => {
  windowModal.classList.add("active");
});
document.addEventListener("keydown", (event) => {
  if (windowModal.classList.contains("active") && event.code === "Escape")
    windowModal.classList.remove("active");
});
windowModal.addEventListener("click", (event) => {
  if (event.target.closest(".popup-close")) {
    windowModal.classList.remove("active");
  }
});
