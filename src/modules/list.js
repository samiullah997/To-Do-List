/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import Cruds from '../cruds/curds.js';

const task = new Cruds();
const tasks = () => {
  const dataTask = task.getSortedTasks();
  const ul = document.getElementById('ul');
  ul.innerHTML = '';
  dataTask.forEach((listItem) => {
    const li = document.createElement('li');
    li.id = listItem.index;
    ul.appendChild(li);
    const div = document.createElement('div');
    li.appendChild(div);
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'checkbox';
    input.className = 'checkbox';
    input.addEventListener('change', (event) => {
      const index = task.tasks.findIndex((t) => listItem.index === t.index);
      if (index === -1) {
        return;
      }
      task.tasks[index].completed = event.target.checked;
      task.editTask(listItem, listItem.description);
      if (listItem.completed) {
        input.setAttribute('checked', 'checked');
        desc.style.textDecoration = 'line-through';
        desc.style.color = '#A3A3A3';
        document.getElementById('clear-all').style.textDecoration = 'underline';
      } else {
        input.setAttribute('checked', 'unchecked');
        desc.style.textDecoration = 'none';
        desc.style.color = '#000';
      }
    });
    document.getElementById('clear-all').addEventListener('click', () => {
      task.clearCompletedTasks();
      location.reload();
    });
    div.appendChild(input);
    const desc = document.createElement('p');
    desc.id = 'list-header';
    desc.innerText = `${listItem.description}`;
    desc.onclick = () => {
      editInput.style.display = 'unset';
      desc.style.display = 'none';
      removeList.style.display = 'unset';
      editButton.style.display = 'none';
    };
    div.appendChild(desc);
    const editButton = document.createElement('i');
    editButton.classList = 'fa-solid fa-ellipsis-vertical';
    editButton.id = 'edit';

    li.appendChild(editButton);
    const removeList = document.createElement('i');
    removeList.classList = 'fa-solid fa-trash-arrow-up';
    removeList.id = 'remove';
    removeList.style.display = 'none';
    removeList.onclick = () => {
      task.removeTask(listItem);
      location.reload();
    };
    li.appendChild(removeList);
    const editInput = document.createElement('input');
    editInput.id = `input-${listItem.index}`;
    editInput.value = `${listItem.description}`;
    editInput.style.display = 'none';
    editInput.onfocus = () => {
      submitButton.style.display = 'unset';
      editButton.style.display = 'none';
      removeList.style.display = 'none';
    };
    div.appendChild(editInput);
    const submitButton = document.createElement('i');
    submitButton.classList = 'fa-solid fa-arrow-left-long';
    submitButton.id = 'submit';
    submitButton.style.display = 'none';
    submitButton.onclick = () => {
      submitButton.style.display = 'none';
      editButton.style.display = 'unset';
      removeList.style.display = 'none';
      editInput.style.display = 'none';
      desc.style.display = 'unset';
      const { value } = document.getElementById(`input-${listItem.index}`);
      task.editTask(listItem, value);
      document.getElementById(`input-${listItem.index}`).value = '';
      location.reload();
    };
    li.appendChild(submitButton);
  });
  return ul;
};

export default tasks;