var $body = document.querySelector('body');
var $racecar = document.querySelector('.racecar');

function arrowKeys(event) {
  var direction = '';
  if (event.keyCode === 38) {
    direction = 'up';
  } else if (event.keyCode === 37) {
    direction = 'left';
  } else if (event.keyCode === 40) {
    direction = 'down';
  }
  $racecar.className = 'racecar rotate' + direction;
}
$body.addEventListener('keydown', arrowKeys);
