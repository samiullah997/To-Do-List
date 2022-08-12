/* eslint-disable no-restricted-globals */
import './style.css';
import tasks from './modules/list.js';
import Cruds from './cruds/curds.js';

const taskData = new Cruds();
function component() {
  const cardBody = document.getElementById('card-body');
  cardBody.innerHTML = tasks(taskData.getSortedTasks());
  return cardBody;
}

const form = document.body.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#note');
  if (note.value !== '') {
    taskData.addTask({
      description: note.value,
      completed: false,
      index: taskData.tasks.length,
    });
    note.value = '';
    component();
    form.reset();
  }
});

document.getElementById('submit').addEventListener('click', () => {
  const note = document.querySelector('#note');
  if (note.value !== '') {
    taskData.addTask({
      description: note.value,
      completed: false,
      index: taskData.tasks.length,
    });
    note.value = '';
    component();
  }
});
document.getElementById('clear-all').addEventListener('click', () => {
  while (taskData.tasks.length > 0) {
    taskData.pop();
  }
  if (localStorage.getItem('NOTE')) {
    localStorage.setItem('NOTE', JSON.stringify(taskData));
  }

  component();
});

document.getElementById('refresh').addEventListener('click', () => {
  location.reload();
});

document.body.appendChild(component());
export default component;