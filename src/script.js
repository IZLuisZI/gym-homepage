const rightNav = document.querySelector("#right-nav");
const leftNav = document.querySelector("#left-nav");
const items = document.querySelectorAll("#item");
const carousel = document.querySelector("#carousel");
const itemsParent = document.getElementById("items-parent");

const itemWidth = items[0].offsetWidth;
const gap = parseFloat(getComputedStyle(document.documentElement).fontSize);
let index = 1;

function updateButtonState() {
  const length = itemsParent.childElementCount;
  leftNav.disabled = index <= 1;
  rightNav.disabled = index >= length + 1;
}

function next() {
  const length = itemsParent.childElementCount;
  const translateX = -(itemWidth + gap) * index;
  if (index >= length - 6) {
    rightNav.disabled = true;
    return;
  }
  carousel.style.transform = `translateX(${translateX}px)`;
  index++;
  updateButtonState(); // Update the state of the buttons
  console.log(index, length);
}

function prev() {
  const translateX = -(itemWidth + gap) * (index - 2);
  if (index <= 1) {
    leftNav.disabled = true;
    return;
  }
  carousel.style.transform = `translateX(${translateX}px)`;
  index--;
  updateButtonState(); // Update the state of the buttons
}

// Initial call to set the correct state of the buttons when the page loads
updateButtonState();
leftNav.addEventListener("click", prev);

rightNav.addEventListener("click", next);
