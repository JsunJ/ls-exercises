document.addEventListener('DOMContentLoaded', () => {
  function executeButton(event) {
    event.target.classList.toggle('pushed');

    let control = event.target.dataset.control;
    switch(control) {
      case 'createLink':
        let url = prompt('Enter the URL to link to:');
        if (url && url.length > 0) document.execCommand(control, false, url);
        break;
      default:
        document.execCommand(control);
    }
  }

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', executeButton);
  });
});