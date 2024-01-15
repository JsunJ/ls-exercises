let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.getElementById('todo_list');
  const template = document.getElementById('todo_template');
  const todoTmpl = Handlebars.compile(template.innerHTML);
  const overlayDiv = document.querySelector('.overlay');
  const prompt = document.querySelector('.prompt_container');
  template.remove();

  listDiv.innerHTML = todoTmpl({todos: todo_items});

  let todoId;
  listDiv.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      todoId = event.target.closest('li').dataset.id;
      let overlayDiv = document.querySelector('.overlay');

      overlayDiv.classList.replace('hide', 'show');
      prompt.classList.replace('hide', 'show');
    }
  });

  prompt.addEventListener('click', event => {
    let noBtn = prompt.querySelector('.prompt_no');
    let yesBtn = prompt.querySelector('.prompt_yes');

    if (event.target === noBtn) {
      prompt.classList.replace('show', 'hide');
      overlayDiv.classList.replace('show', 'hide');
    } else if (event.target === yesBtn) {
      listDiv.querySelector(`li[data-id='${todoId}'`).remove();
      todo_items = todo_items.filter(todo => {
        return todo.id !== parseInt(todoId, 10);
      });
      prompt.classList.replace('show', 'hide');
      overlayDiv.classList.replace('show', 'hide');
    }
  });

  overlayDiv.addEventListener('click', event => {
    overlayDiv.classList.replace('show', 'hide');
    prompt.classList.replace('show', 'hide');
  });
});