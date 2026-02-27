//build a counter application . the count starts from 0 and increases by 1
// everytime someone clicks on the increase button and decreases by 1 when someone clicks on the decrease button



let count = 0;

const countDisplay = document.getElementById('count-display');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

let count = 0;

const countDisplay = document.getElementById("count-display");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");


increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
