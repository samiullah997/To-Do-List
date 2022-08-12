/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */

import Cruds from '../cruds/curds.js';

const task = new Cruds();
const tasks = (dataTask) => {
  const ul = document.getElementById('ul');
  ul.id = 'ul';
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
    div.appendChild(input);
    const desc = document.createElement('p');
    desc.id = 'list-header';
    desc.innerText = `${listItem.description} ${listItem.index}`;
    div.appendChild(desc);
    const editButton = document.createElement('i');
    editButton.classList = 'fa-solid fa-ellipsis-vertical';
    editButton.id = 'edit';
    editButton.onclick = () => {
      editInput.style.display = 'unset';
      desc.style.display = 'none';
      removeList.style.display = 'unset';
      editButton.style.display = 'none';
    };
    li.appendChild(editButton);
    const removeList = document.createElement('i');
    removeList.classList = 'fa-solid fa-trash-arrow-up';
    removeList.id = 'remove';
    removeList.style.display = 'none';
    removeList.onclick = () => {
      task.removeTask(listItem);
      location.reload();
    };
    const editInput = document.createElement('input');
    editInput.id = `input-${listItem.index}`;
    editInput.value = `${listItem.description} ${listItem.index}`;
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
    li.appendChild(removeList);
  });
  return ul;
};

export default tasks;