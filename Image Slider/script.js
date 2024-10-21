let slideIndex = 0;
let slides = document.querySelectorAll('.slider-container img');
let totalSlides = slides.length;



function showSlide(index) {
    if(index >= totalSlides) {
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    let offset = -slideIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000);
}

window.onload = function() {
    showSlide(slideIndex);
    autoSlide();
}