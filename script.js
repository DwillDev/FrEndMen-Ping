const submit = document.querySelector('button');
const subscribe = document.querySelector('#email');
const error = document.querySelector('.error');
const correct = document.querySelector('.submitted');

submit.addEventListener('click', function emailCheck() {
  if (subscribe.checkValidity() && error.classList.contains('hide')) {
    correct.classList.remove('hide');
  } else if (!subscribe.checkValidity() && correct.classList.contains('hide')) {
    error.classList.remove('hide');
    subscribe.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    changeBack();
  }
});

function changeBack() {
  if (subscribe.checkValidity() && !error.classList.contains('hide')) {
    error.classList.add('hide');
    subscribe.style.borderColor = 'hsl(223, 87%, 63%)';
    correct.classList.remove('hide');
  } else {
    correct.classList.add('hide');
    subscribe.style.borderColor = 'hsl(354, 100%, 66%)';
    error.classList.remove('hide');
  }
}
