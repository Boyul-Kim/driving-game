var $racecar = document.querySelector('.racecar');

var car = {
  direction: 'east'
};

function arrowKeys(event) {
  if (event.keyCode === 38) {
    car.direction = 'north';
  } else if (event.keyCode === 37) {
    car.direction = 'west';
  } else if (event.keyCode === 40) {
    car.direction = 'south';
  } else if (event.keyCode === 39) {
    car.direction = 'east';
  }
  $racecar.className = 'racecar rotate' + car.direction;
}

document.addEventListener('keydown', arrowKeys);
