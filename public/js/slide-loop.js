const slides = document.querySelector('[data-slides]');
let dots = document.querySelectorAll('[data-dot]');
dotsPressEvents(dots);

function dotsPressEvents(dots) {
  dots = Array.from(dots);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      if (!e.path[0].matches('.current')) {
        let aim = index % 3;
        slideLoop(aim);
        loopRestart();
      }
    });
  });
}

let direction = 1;

const slideLoop = (slideAim = undefined) => {
  const activeSlide = slides.querySelector('[data-active]');
  let newIndex;
  if (slideAim === undefined) {
    newIndex = [...slides.children].indexOf(activeSlide) + direction;
  } else {
    newIndex = slideAim;
  }
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;

  dots = slides.children[newIndex].querySelectorAll('[data-dot]');

  delete activeSlide.dataset.active;
};

myInterval = setInterval(slideLoop, [5000]);

function loopRestart() {
  clearInterval(myInterval);

  setTimeout(() => {
    direction = 1;
  }, 3000);
  myInterval = setInterval(slideLoop, [5000]);
}

// Touch scroll for gallery:
let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
  if (touchendX < touchstartX) {
    direction = 1;
  }

  if (touchendX > touchstartX) {
    direction = -1;
  }
  setTimeout(slideLoop, 1);

  loopRestart();
}

slides.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slides.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  if (!e.path[0].matches('.dot')) {
    handleGesture();
  }
});
