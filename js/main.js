const checkbox = document.querySelectorAll(".checkbox");
const radiobutton = document.querySelectorAll(".radiobutton__item");

checkbox.forEach((element) => {
  if (element.children.item("input").checked == true) {
    element.classList.add("active");
  }
  element.addEventListener("click", () => {
    if (element.classList.value == "checkbox active") {
      element.children.item("input").checked = false;
    } else {
      element.children.item("input").checked = true;
    }
    element.classList.toggle("active");
  });
  return false;
});

radiobutton.forEach((element) => {
  if (element.children.item("input").checked == true) {
    element.classList.add("active");
  }
  element.addEventListener("click", () => {
    if (element.classList.value == "radiobutton__item active") {
      return;
    } else {
      radiobutton.forEach((element) => {
        element.children.item("input").checked = false;
        element.classList.remove("active");
      });
      element.children.item("input").checked = true;
      element.classList.add("active");
    }
  });
});
