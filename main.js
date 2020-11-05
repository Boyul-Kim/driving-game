var $racecar = document.querySelector('.racecar');

var car = {
  direction: 'east'
};

function arrowKeys(event) {
  var direction = '';

  if (event.keyCode === 38) {
    direction = 'up';
    car.direction = 'north';
  } else if (event.keyCode === 37) {
    direction = 'left';
    car.direction = 'west';
  } else if (event.keyCode === 40) {
    direction = 'down';
    car.direction = 'south';
  } else if (event.keyCode === 39) {
    direction = 'right';
    car.direction = 'east';
  }

  $racecar.className = 'racecar rotate' + direction;

}
document.addEventListener('keydown', arrowKeys);
