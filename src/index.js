/* eslint-disable no-restricted-globals */
import './style.css';
import tasks from './modules/list.js';
import Cruds from './cruds/curds.js';

const taskData = new Cruds();
function component() {
  const cardBody = document.getElementById('card-body');
  cardBody.innerHTML = tasks();
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
    location.reload();
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
    location.reload();
  }
});

document.getElementById('refresh').addEventListener('click', () => {
  location.reload();
});

document.body.appendChild(component());
export default component;