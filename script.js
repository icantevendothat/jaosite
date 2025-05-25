document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'media/page1.png',
        'media/page2.png',
        'media/page3.png',
        'media/page4.png',
        'media/page5.png',
        'media/page6.png',
        'media/page7.png',
        'media/page8.png',
        'media/page9.png',
        'media/page10.png',
        'media/page11.png',
        'media/page12.png',
        'media/page13.png',
        'media/page14.png',
        'media/page15.png'
    ];

    let currentIndex = 0;
    const body = document.body;
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    // Function to update the background image
    function updateBackgroundImage() {
        body.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // Initial background image
    updateBackgroundImage();

    // Right arrow click handler
    rightArrow.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateBackgroundImage();
        }
    });

    // Left arrow click handler
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateBackgroundImage();
        }
    });

    // Optional: Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateBackgroundImage();
            }
        } else if (event.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                updateBackgroundImage();
            }
        }
    });
});