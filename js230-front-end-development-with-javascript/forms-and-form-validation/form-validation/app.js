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
    event.preventDefault();
    let keyValuePairs = [];
    let creditCardValue = '';
    let data;
    let serializedDiv = document.querySelector('.serialized');

    if (![...inputs].every(input => input.checkValidity())) {
      form.firstElementChild.innerText = 'Form cannot be submitted until errors are corrected.';
    } else {
      inputs.forEach(input => {
        let key = encodeURIComponent(input.name);
        let value = encodeURIComponent(input.value);

        if (input.name !== 'credit_card') {
          keyValuePairs.push(`${key}=${value}`);
        } else {
          creditCardValue += value ? value : '';
        }
      });
    }
    
    keyValuePairs.push(`${encodeURIComponent('credit_card')}=${encodeURIComponent(creditCardValue)}`);
    data = keyValuePairs.join('&');

    // data = new FormData(event.target);
    // creditCardValue = data.getAll('credit_card').join('');
    // data.set('credit_card', creditCardValue);
    // let queryString = new URLSearchParams(data).toString();


    let p = document.createElement('p');
    p.innerText = data;
    serializedDiv.insertAdjacentElement('beforeend', p);
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

  function tabForward(event) {
    let input = event.target;
    if (input.value.length === 4) {
      let inputs = [...input.parentElement.querySelectorAll('input')];
      let index = inputs.findIndex(el => el.id === input.id);
      inputs[index + 1].focus();
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

    if (input.id === 'cc1' || input.id === 'cc2' || input.id === 'cc3') {
      input.addEventListener('keyup', tabForward);
    }
  });

  form.addEventListener('submit', submitForm);
});