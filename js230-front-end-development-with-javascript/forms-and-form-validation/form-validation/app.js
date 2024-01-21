document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let inputs = document.querySelectorAll('input');

  function validateInput(event) {
    let input = event.target;
    if (input.checkValidity()) {
      input.classList.remove('invalid_field');
      input.nextElementSibling.innerText = '';
    }

    if ([...inputs].every(input => input.checkValidity())) {
      form.firstElementChild.innerText = '';
    }
  }

  function setInvalid(event) {
    let input = event.target;
    let inputName = event.target.parentElement.previousElementSibling.innerText;

    input.classList.add('invalid_field');
    if (input.hasAttribute('required') && input.value === '') {
      input.nextElementSibling.innerText = `${inputName} is a required field.`;
    } else {
      input.nextElementSibling.innerText = `Please enter a valid ${inputName}.`;
    }
  }

  function submitForm(event) {
    if (![...inputs].every(input => input.checkValidity())) {
      event.preventDefault();
      form.firstElementChild.innerText = 'Form cannot be submitted until errors are corrected.';
    }
  }

  inputs.forEach(input => {
    input.addEventListener('focusout', validateInput);
    input.addEventListener('invalid', setInvalid);
    input.addEventListener('focus', event => {
      input.nextElementSibling.innerText = '';
    });
  });

  form.addEventListener('submit', submitForm);
});