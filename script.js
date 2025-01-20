const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.circle.active');
    const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;
    progress.style.backgroundColor = "rgb(52,152,219)";

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Initial call to set the correct state on page load
update();