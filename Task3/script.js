let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let current = 0;
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

// Function to move to the next slide
function nextSlide() {
    current = (current + 1) % images.length;
    updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    let imageWidth = images[0].clientWidth;
    slider.style.transform = `translateX(-${current * imageWidth}px)`;
}

// Event listeners for buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Optional: Auto-slide functionality
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Update slider position on window resize
window.addEventListener('resize', updateSlider);