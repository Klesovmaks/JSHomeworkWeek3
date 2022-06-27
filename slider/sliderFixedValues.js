const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currenRight = parseInt(computedStyles.right);

  if (currenRight < 500) {
    itemsList.style.right = `${currenRight + 100}px`;
  }
});

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currenRight = parseInt(computedStyles.right);

  if (currenRight > 0) {
    itemsList.style.right = `${currenRight - 100}px`;
  }
});