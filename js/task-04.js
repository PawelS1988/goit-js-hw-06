const qs = (selector) => document.querySelector(selector);

let counterValue = 0;
const btnDecrease = qs('button[data-action="decrement"]');
const btnIncrease = qs('button[data-action="increment"]');
const textCounterValue = qs("span#value");

const increaseCounterValue = () => {
  counterValue += 1;
  textCounterValue.textContent = counterValue;
};

const decreaseCounterValue = () => {
  counterValue -= 1;
  textCounterValue.textContent = counterValue;
};

btnIncrease.addEventListener("click", increaseCounterValue);
btnDecrease.addEventListener("click", decreaseCounterValue);
