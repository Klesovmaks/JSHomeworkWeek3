const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll(".slider__item");
const itemWidth = getComputedStyle(items[0]).width;

const step = parseInt(itemWidth);
const minRight = 0;
const preShowItems = 300 / step;
const maxRight = (items.length - preShowItems) * step;
let currenRight = 0;

itemsList.style.right = currenRight;

right.addEventListener("click", (e) => {
  e.preventDefault();

  if (currenRight < maxRight) {
    currenRight += step;
    itemsList.style.right = `${currenRight}px`
  }
});

left.addEventListener("click", (e) => {
  e.preventDefault();

  if (currenRight > minRight) {
    currenRight -= step;
    itemsList.style.right = `${currenRight}px`
  }
});