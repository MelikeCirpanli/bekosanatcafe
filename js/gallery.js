document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const leftArrow = document.querySelector('.gallery-arrow-left');
    const rightArrow = document.querySelector('.gallery-arrow-right');
    
    if (slider && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            const scrollAmount = slider.offsetWidth; // Tam genişlik kadar kaydır
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        rightArrow.addEventListener('click', () => {
            const scrollAmount = slider.offsetWidth; // Tam genişlik kadar kaydır
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});