function makeBold(element, callback) {
  element.style.fontWeight = 'bold';
  if (callback && typeof callback === 'function') {
    callback(element);
  }
}

// const sectionElement = document.querySelector('section');

// function makeBold(element) {
//   element.style.fontWeight = 'bold';
//   const event = new CustomEvent('bolded');

//   element.dispatchEvent(event);
// }

// sectionElement.addEventListener('bolded', (event) => {
//   alert(event.target.tagName);
//   event.target.classList.add('highlight');
// });

// makeBold(sectionElement);