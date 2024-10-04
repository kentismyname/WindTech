// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Apply class when the element is in the viewport
function checkSlideIn() {
    const slideText = document.getElementById('slideText');
    
    if (isInViewport(slideText)) {
        slideText.classList.add('slide-in');
        // Remove the event listener after the class is applied to prevent further checks
        window.removeEventListener('scroll', checkSlideIn);
    }
}

// Attach the event listener to the scroll event
window.addEventListener('scroll', checkSlideIn);
