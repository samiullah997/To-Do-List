import task from '../modules/task.js';

class Task {
  constructor(description, complete = false, index) {
    this.description = description;
    this.complete = complete;
    this.index = index;
  }
}

function add(note, index) {
  const taksNote = new Task(note, false, index);
  task.push(taksNote);
  localStorage.setItem('NOTE', JSON.stringify(task));
  return task;
}
export default add;
