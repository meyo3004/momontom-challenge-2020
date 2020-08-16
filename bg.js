const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  return Math.floor(Math.random() * 5);
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
