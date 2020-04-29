let leftIndex = 0;
let index = 1;
let rightIndex = 2;
let direction = true;

let images = [];
for (let i = 0; i < 9; i++) {
  images[i] = `./image/img${i}.jpg`;
}

const wrapperLeft = document.querySelector('.wrapper_left');
const wrapperActive = document.querySelector('.wrapper_active');
const wrapperRight = document.querySelector('.wrapper_right');

const loadImage = () => {
  wrapperLeft.style.background = `url(${images[leftIndex]}) no-repeat center center / cover`;
  wrapperActive.style.background = `url(${images[index]}) no-repeat center center / cover`;
  wrapperRight.style.background = `url(${images[rightIndex]}) no-repeat center center / cover`;
};

const addEffect = () => {
  if (direction) {
    if (!wrapperLeft.classList.contains('fadeInLeft')) {
      wrapperLeft.className += ' fadeInLeft';
      setTimeout(() => {
        wrapperLeft.classList.remove('fadeInLeft');
      }, 2000);
    }
    if (!wrapperActive.classList.contains('fadeInActive')) {
      wrapperActive.className += ' fadeInActive';
      setTimeout(() => {
        wrapperActive.classList.remove('fadeInActive');
      }, 2000);
    }
    if (!wrapperRight.classList.contains('fadeOutRight')) {
      wrapperRight.className += ' fadeOutRight';
      setTimeout(() => {
        wrapperRight.classList.remove('fadeOutRight');
      }, 2000);
    }
  } else {
    if (!wrapperLeft.classList.contains('fadeOutLeft')) {
      wrapperLeft.className += ' fadeOutLeft';
      setTimeout(() => {
        wrapperLeft.classList.remove('fadeOutLeft');
      }, 2000);
    }
    if (!wrapperActive.classList.contains('fadeOutActive')) {
      wrapperActive.className += ' fadeOutActive';
      setTimeout(() => {
        wrapperActive.classList.remove('fadeOutActive');
      }, 2000);
    }
    if (!wrapperRight.classList.contains('fadeInRight')) {
      wrapperRight.className += ' fadeInRight';
      setTimeout(() => {
        wrapperRight.classList.remove('fadeInRight');
      }, 2000);
    }
  }
};

const updateIndex = () => {
  if (direction) {
    index--;
    leftIndex--;
    rightIndex--;
    if (index < 0) {
      index = images.length - 1;
    }
    if (leftIndex < 0) {
      leftIndex = images.length - 1;
    }
    if (rightIndex < 0) {
      rightIndex = images.length - 1;
    }
  } else {
    index++;
    leftIndex++;
    rightIndex++;
    if (index > images.length - 1) {
      index = 0;
    }
    if (leftIndex > images.length - 1) {
      leftIndex = 0;
    }
    if (rightIndex > images.length - 1) {
      rightIndex = 0;
    }
  }
};
loadImage();
setInterval(() => {
  updateIndex();
  addEffect();
  setTimeout(() => {
    loadImage();
  }, 1500);
}, 8000);

wrapperRight.addEventListener('click', () => {
  direction = true;
  updateIndex();
  addEffect();
  loadImage();
});

wrapperLeft.addEventListener('click', () => {
  direction = false;
  updateIndex();
  addEffect();
  loadImage();
});
