let menu = document.querySelector(".dropdown-menu");
menu.addEventListener("click", (event) => {
  let btnDropDown = event.target.closest(".menu__button");
  if (!btnDropDown || !menu.contains(btnDropDown)) return;
  else {
    let dropdownList = document.querySelector(".menu__list");
    dropdownList.hidden = !dropdownList.hidden;
  }
});
