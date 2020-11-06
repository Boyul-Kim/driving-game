var $racecar = document.querySelector('.racecar');

var car = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
};

$racecar.style.left = car.location.x + 'px';
$racecar.style.top = car.location.y + 'px';

function arrowKeys(event) {

  if (event.keyCode === 32) {
    setInterval(movement, 1.6);
    // var interval = setInterval(movement, 1.6); for next feature
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
  car.location.x++;
  $racecar.style.left = car.location.x + 'px';
}
