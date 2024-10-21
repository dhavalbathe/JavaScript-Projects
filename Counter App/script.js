const counter = document.querySelector(".count");
const increment = document.querySelector(".add");
const decrement = document.querySelector(".sub");
const reset = document.querySelector(".reset");

let count = 0;
const incrementCount = () => {
    count++;
    counter.innerText = `${count}`;
}
const decrementCount = () => {
    count--;
    counter.innerText = `${count}`;
}
const resetCount = () => {
    count = 0;
    counter.innerText = `${count}`;
}
increment.addEventListener("click", incrementCount);
decrement.addEventListener("click", decrementCount);
reset.addEventListener("click", resetCount);