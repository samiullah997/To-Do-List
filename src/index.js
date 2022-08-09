import './style.css';
import tasks from './modules/list.js';

function component() {
  const cardBody = document.getElementById('card-body');
  cardBody.innerHTML = tasks();

  return cardBody;
}

document.body.appendChild(component());