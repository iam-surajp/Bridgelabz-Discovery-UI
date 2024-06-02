document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('#left');
    const nextButton = document.querySelector('#right');
    
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const imageCount = images.length;
    const imageWidth = images[0].clientWidth;
    
    // Clone first and last images
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[imageCount - 1].cloneNode(true);
    
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, images[0]);
    
    const updateCarousel = () => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;
    };
    
    const handleTransitionEnd = () => {
        if (images[currentIndex].classList.contains('clone')) {
            carousel.style.transition = 'none';
            currentIndex = (currentIndex === 0) ? imageCount - 1 : 0;
            carousel.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;
        }
    };
    
    carousel.addEventListener('transitionend', handleTransitionEnd);
    
    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imageCount;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-imageWidth * (currentIndex + 1)}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                updateCarousel();
            }, 0);
        } else {
            updateCarousel();
        }
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > imageCount) {
            currentIndex = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${imageWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
                currentIndex++;
                updateCarousel();
            }, 0);
        } else {
            updateCarousel();
        }
    });
    
    // Auto-scroll functionality
    setInterval(() => {
        nextButton.click();
    }, 5000); // Adjust the interval as needed
    
    // Initial update to position the carousel correctly
    carousel.style.transform = `translateX(${-imageWidth}px)`;
});
