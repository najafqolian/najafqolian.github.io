// Block right-clicking on images and GIFs
document.addEventListener('contextmenu', event => {
    if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
    }
});

// Block dragging images and GIFs
document.addEventListener('dragstart', event => {
    if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
    }
});

let currentSlide = 0;
let autoSlideInterval;

function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveCarousel(1), 5000);
}

resetAutoSlide();
