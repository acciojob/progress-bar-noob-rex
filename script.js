//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
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
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}


// const lines = document.querySelectorAll('.line');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// let currActive = 1;

// nextBtn.addEventListener('click', () => {
//   currActive++;

//   if (currActive > lines.length) {
//     currActive = lines.length;
//   }

//   updateline();
// });

// prevButton.addEventListener('click', () => {
//   currActive--;

//   if (currActive < 1) {
//     currActive = 1;
//   }

//   updateline();
// });

// function updateline() {
//   lines.forEach((line, index) => {
//     if (index < currActive) {
//       line.classList.add('active');
//     } else {
//       line.classList.remove('active');
//     }
//   });

//   if (currActive === 1) {
//     prevBtn.disabled = true;
//   } else if (currActive === lines.length) {
//     nextBtn.disabled = true;
//   } else {
//     prevBtn.disabled = false;
//     nextBtn.disabled = false;
//   }
// }