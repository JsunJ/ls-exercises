document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('img-container');
  let timeout;

  container.addEventListener('mouseover', event => {
    if (event.target.tagName === 'IMG') {
      timeout = setTimeout(() => {
        event.target.nextElementSibling.classList.add('show');
      }, 2000);
    }
  });

  container.addEventListener('mouseout', event => {
    if (event.target.tagName === 'IMG') {
      clearTimeout(timeout);
      event.target.nextElementSibling.classList.remove('show');
    }
  });
});