const theme = document.querySelector(".switch");
const body = document.body;
const checkbox = document.querySelector("#toggle");


const changeTheme = () => {
    console.log(checkbox.checked);
    if(checkbox.checked) {
        console.log('darkmode');
        body.classList.add('dark-mode');
    } else {
        console.log('light-mode');
        body.classList.remove('dark-mode');
    }
}
checkbox.addEventListener('click', changeTheme);