let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.getElementById('todo_list');
  const overlayDiv = document.querySelector('.overlay');
  const promptDiv = document.querySelector('.prompt_container');
  const contextDiv = document.querySelector('.context_menu');
  const template = document.getElementById('todo_template');
  const todoTmpl = Handlebars.compile(template.innerHTML);
  template.remove();

  listDiv.innerHTML = todoTmpl({todos: todo_items});

  let todoId;

  listDiv.addEventListener('contextmenu', event => {
    if (event.target.tagName === 'LI') {
      event.preventDefault();
      let posX = event.clientX;
      let posY = event.clientY;

      contextDiv.classList.replace('hide', 'show');
      contextDiv.style.left = posX + 'px';
      contextDiv.style.top = posY + 'px';

      todoId = event.target.dataset.id;
    }
  });

  contextDiv.addEventListener('click', event => {
    if (event.target.classList.contains('delete')) {
      overlayDiv.classList.replace('hide', 'show');
      promptDiv.classList.replace('hide', 'show');
    }
  });

  promptDiv.addEventListener('click', event => {
    let noBtn = promptDiv.querySelector('.prompt_no');
    let yesBtn = promptDiv.querySelector('.prompt_yes');

    if (event.target === noBtn) {
      promptDiv.classList.replace('show', 'hide');
      overlayDiv.classList.replace('show', 'hide');
    } else if (event.target === yesBtn) {
      listDiv.querySelector(`li[data-id='${todoId}'`).remove();
      todo_items = todo_items.filter(todo => {
        return todo.id !== parseInt(todoId, 10);
      });
      promptDiv.classList.replace('show', 'hide');
      overlayDiv.classList.replace('show', 'hide');
    }
  });

  overlayDiv.addEventListener('click', event => {
    overlayDiv.classList.replace('show', 'hide');
    promptDiv.classList.replace('show', 'hide');
  });

  document.body.addEventListener('click', event => {
    contextDiv.classList.replace('show', 'hide');
  });
});