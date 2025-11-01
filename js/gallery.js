document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const leftArrow = document.querySelector('.gallery-arrow-left');
    const rightArrow = document.querySelector('.gallery-arrow-right');
    
    if (slider && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            slider.scrollBy({ left: -400, behavior: 'smooth' });
        });
        
        rightArrow.addEventListener('click', () => {
            slider.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }
});