const start_btn = document.querySelector("#start");
const game_enter_box = document.querySelector(".game-enter-box");
const game_box = document.querySelector(".game-box");
const userInput = document.querySelector(".user-input");
const check = document.querySelector(".check");
const result_display = document.querySelector(".result");
const expected_answer = document.querySelector(".expected");
const toggleButton = document.querySelector(".switch-theme");
const body = document.body;
const themeChange = document.querySelector(".theme-change");
const themeBall = document.querySelector(".theme-ball");

const randomNumber = Math.floor(Math.random()*11);

const startGame = () => {
    game_enter_box.style.display = `none`;
    game_box.style.display = `flex`;
    console.log(randomNumber);
    
}

const checkResult = () => {
    const Input = userInput.value;
    if(Input == "") return;
    const result = (Input == randomNumber) ? "You'r correct" : "You'r Wrong";
    if(result == "You'r Wrong") {
        result_display.style.color = "red";
        expected_answer.innerText = `Expected: ${randomNumber}`;
    }
    else {
        result_display.style.color = "green";
    }
    result_display.innerText = result;
    userInput.value = " ";
}

//check for previously saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
//if a saved theme exists, apply it
if(savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
}

//toggle between light and dark mode when the button is clicked
const changeTheme = () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    if(isDarkMode) {
        themeBall.style.transform = `translateX(170%)`;
    }
    else {
        themeBall.style.transform = `translateX(0)`;
    }
    // save the user's theme perference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
start_btn.addEventListener('click', startGame );
check.addEventListener('click', checkResult);
// toggleButton.addEventListener('click', changeTheme);



themeChange.addEventListener('click', changeTheme);