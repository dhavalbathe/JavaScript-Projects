const body = document.getElementById("body");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const random = document.getElementById("random");

const changeRed = () => {
    body.style.backgroundColor = 'red';
}
const changeBlue = () => {
    body.style.backgroundColor = 'blue';
}
const changeGreen = () => {
    body.style.backgroundColor = 'green';
}

const changeRandom = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

red.addEventListener("click", changeRed);
blue.addEventListener("click", changeBlue);
green.addEventListener("click", changeGreen);
random.addEventListener("click", changeRandom);

