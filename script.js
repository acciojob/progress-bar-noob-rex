const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
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
  // Update circles
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update lines
  lines.forEach((line, index) => {
    if (index < currentActive - 1) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });

  // Enable/disable buttons
  prevButton.disabled = currentActive === 1;
  nextButton.disabled = currentActive === circles.length;
}
