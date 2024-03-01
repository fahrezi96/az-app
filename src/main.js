document.querySelector('.az-splash-screen').classList.add('opacity-0');

setTimeout(() => {
  document.querySelector('.az-splash-screen').classList.add('hidden');
}, 2000);

function onStep(hideScreen, showScreen) {
  document.querySelector(`.${hideScreen}`).classList.add('opacity-0');

  setTimeout(() => {
    document.querySelector(`.${hideScreen}`).classList.add('hidden');

    document.querySelector(`.${showScreen}`).classList.add('opacity-1');
    document.querySelector(`.${showScreen}`).classList.remove('opacity-0');
    document.querySelector(`.${showScreen}`).classList.add('flex');
    document.querySelector(`.${showScreen}`).classList.remove('hidden');
  }, 500);
}

function popUpOpen() {
  document.querySelector('.popup').classList.remove('opacity-0');
  document.querySelector('.popup').classList.remove('hidden');

  document.querySelector('.popup').classList.add('opacity-1');
  document.querySelector('.popup').classList.add('flex');
}

function popUpClose() {
  document.querySelector('.popup').classList.remove('opacity-1');
  document.querySelector('.popup').classList.remove('flex');

  document.querySelector('.popup').classList.add('opacity-0');
  document.querySelector('.popup').classList.add('hidden');
}
