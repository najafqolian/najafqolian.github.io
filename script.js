function toggleMenu() {
    const navbarList = document.querySelector('.navbar-list');
    navbarList.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    const navbarList = document.querySelector('.navbar-list');
    const isClickInside = navbar.contains(event.target);

    if (!isClickInside && navbarList.classList.contains('active')) {
        navbarList.classList.remove('active');
    }
});
function toggleAboutText() {
    const aboutText = document.querySelector('.about-text');
    const toggleBtn = document.querySelector('.toggle-btn2');

    aboutText.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector(".project-list");
    const publicationSection = document.querySelector(".publication-list");
    const projectToggleBtn = document.getElementById("toggle-projects");
    const publicationToggleBtn = document.getElementById("toggle-publications");

    projectSection.style.maxHeight = "400px";
    publicationSection.style.maxHeight = "400px";

    projectToggleBtn.addEventListener("click", () => {
        const isCollapsed = projectSection.style.maxHeight === "400px";
        projectSection.style.maxHeight = isCollapsed ? "none" : "400px";
        projectToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });

    publicationToggleBtn.addEventListener("click", () => {
        const isCollapsed = publicationSection.style.maxHeight === "400px";
        publicationSection.style.maxHeight = isCollapsed ? "none" : "400px";
        publicationToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });
});
let currentSlide = 0;
let autoSlideInterval;

// Function to move the carousel in a given direction
function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Reset the auto-slide interval when user interacts
    resetAutoSlide();
}

// Function to reset the auto-slide interval
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change every 5 seconds
}

// Initialize the carousel and set the interval
document.addEventListener("DOMContentLoaded", () => {
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change every 5 seconds
});
// Get the buttons and module
const showModuleBtns = document.querySelectorAll(".show-module-btn");
const infoModule = document.getElementById("infoModule");
const closeModuleBtn = document.getElementById("closeModuleBtn");

// Add event listeners to each button to show the module
showModuleBtns.forEach((button) => {
    button.addEventListener("click", () => {
        infoModule.style.display = "block";
    });
});

// When the "Close" button is clicked, hide the module
closeModuleBtn.addEventListener("click", () => {
    infoModule.style.display = "none";
});

