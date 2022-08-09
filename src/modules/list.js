import task from './task.js';

const tasks = () => {
  const ul = document.getElementById('ul');
  let tasksElement = '';
  for (let i = 0; i < task.length; i += 1) {
    tasksElement += `
    <li>
        <div>
        <input type="checkbox" id="checkbox" class="checkbox">
        <p id="list-header">${task[i].desc}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
    `;
  }
  ul.innerHTML = tasksElement;

  return ul;
};

export default tasks;