const counter = document.getElementById('counter');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

function updateCounter() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

updateCounter();
