const quanitySelector = document.querySelector(".quanity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const creatMarkup = (quanity) => {
  let markup = "";

  for (let i = 0; i < quanity; i++) {
    const block = document.createElement("div");
    block.classList.add("item");
    block.innerHTML = i + 1;

    markup += block.outerHTML;
  }

  return markup;
}

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}

quanitySelector.addEventListener("change", (e) => {
  const quanity = e.target.value;
  const markup = creatMarkup(quanity);
  blocksContainer.innerHTML = markup;
});

let changed = false;

colorSelector.addEventListener("change", (e) => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items [i];
    const blockNumber = i + 1;

    if (changed) {
      const colorToApply = blockNumber % 2 != 0 ? color : "#fff";
      colorTheBlock(currentBlock, colorToApply);
    } else {
      const colorToApply = blockNumber % 2 === 0 ? color : "#fff";
      colorTheBlock(currentBlock, colorToApply);
    }
  }
})