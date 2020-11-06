var $racecar = document.querySelector('.racecar');

var car = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  movementInterval: null,
  motion: false
};

$racecar.style.left = car.location.x + 'px';
$racecar.style.top = car.location.y + 'px';

function arrowKeys(event) {

  if (event.keyCode === 32) {
    car.motion = !car.motion;
    if (car.motion === true) {
      car.movementInterval = setInterval(movement, 1.6);
    } else if (car.motion === false) {
      clearInterval(car.movementInterval);
    }
  }

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

function movement() {
  if (car.direction === 'east') {
    car.location.x++;
    $racecar.style.left = car.location.x + 'px';
  } else if (car.direction === 'west') {
    car.location.x--;
    $racecar.style.left = car.location.x + 'px';
  } else if (car.direction === 'north') {
    car.location.y--;
    $racecar.style.top = car.location.y + 'px';
  } else if (car.direction === 'south') {
    car.location.y++;
    $racecar.style.top = car.location.y + 'px';
  }

}
