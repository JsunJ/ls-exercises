document.addEventListener('DOMContentLoaded', () => {
  const mainArea = document.querySelector('main');
  const subArea = document.querySelector('#sub');

  mainArea.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    alert('Main');
  });

  subArea.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();

    alert('Sub');
  });
});