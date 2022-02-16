let email = document.querySelector('#email');
let submit = document.querySelector('button');
let success = document.querySelector('.submitted');

submit.addEventListener('click', function validEmail() {
  if (email.checkValidity()) {
    success.classList.replace('hide', 'show');
    email.style.borderColor = 'hsl(223, 87%, 63%)';
  } else {
    chooseError();
  }
  messageNum();
});

function chooseError() {
  let empty = document.querySelector('.empty');
  let invalid = document.querySelector('.invalid');

  if (success.classList.contains('show')) {
    success.classList.replace('show', 'hide');
  }

  if (!email.checkValidity() && email.value.length == 0) {
    empty.classList.replace('hide', 'show');
    console.log('empty');
  } else if (!email.checkValidity() && email.value.length > 0) {
    invalid.classList.replace('hide', 'show');
  }
  email.style.borderColor = 'hsl(354, 100%, 66%)';
}

let messages = document.querySelector('.messages');
let prevMessage;

function messageNum() {
  if (messages.getElementsByClassName('show').length > 1) {
    prevMessage = messages.getElementsByClassName('show')[0];
    prevMessage.classList.replace('show', 'hide');
  }
}
