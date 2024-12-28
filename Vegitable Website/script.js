let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector('.shopping-cart');
let loginBtn = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');


document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove('active');
    loginBtn.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    loginBtn.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    loginBtn.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}