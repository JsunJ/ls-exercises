document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let inputs = document.querySelectorAll('input');

  function validateInput(event) {
    let input = event.target;
    let errorMessage = input.parentElement.querySelector('.error_message');
    if (input.checkValidity()) {
      input.classList.remove('invalid_field');
      errorMessage.innerText = '';
    }

    if ([...inputs].every(input => input.checkValidity())) {
      form.firstElementChild.innerText = '';
    }
  }

  function setInvalid(event) {
    let input = event.target;
    let errorMessage = input.parentElement.querySelector('.error_message');
    let inputName = event.target.parentElement.previousElementSibling.innerText;

    input.classList.add('invalid_field');
    if (input.hasAttribute('required') && input.value === '') {
      errorMessage.innerText = `${inputName} is a required field.`;
    } else {
      errorMessage.innerText = `Please enter a valid ${inputName}.`;
    }
  }

  function submitForm(event) {
    if (![...inputs].every(input => input.checkValidity())) {
      event.preventDefault();
      form.firstElementChild.innerText = 'Form cannot be submitted until errors are corrected.';
    }
  }

  function blockNonAlphabetical(event) {
    if (!event.key.match(/[a-zA-Z'\s]/) && event.key.length === 1) {
      event.preventDefault();
    }
  }

  function blockNonNumerical(event) {
    if (!event.key.match(/[\d-]/) && event.key.length === 1) {
      event.preventDefault();
    }
  }

  inputs.forEach(input => {
    input.addEventListener('focusout', validateInput);
    input.addEventListener('invalid', setInvalid);
    input.addEventListener('focus', event => {
      let errorMessage = input.parentElement.querySelector('.error_message');
      errorMessage.innerText = '';
    });
    
    if (input.name === 'first_name' || input.name === 'last_name') {
      input.addEventListener('down', blockNonAlphabetical);
    }

    if (input.name === 'credit_card' || input.name === 'phone') {
      input.addEventListener('keydown', blockNonNumerical);
    }
  });

  form.addEventListener('submit', submitForm);
});