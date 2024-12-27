let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector('.shopping-cart');
let loginBtn = document.querySelector('.login-form');

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove('active');
    loginBtn.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    loginBtn.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    loginBtn.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}