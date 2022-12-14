class Cruds {
  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem('NOTE') || '[]');
  }

  addTask(task) {
    this.tasks.push(task);

    this.updateLocalStorage();
  }

  getSortedTasks() {
    return this.tasks.sort((a, b) => a.index - b.index);
  }

  removeTask(task) {
    const index = this.tasks.findIndex((t) => task.index === t.index);

    if (index === -1) return;

    this.tasks.splice(index, 1);

    this.tasks = this.tasks.map((task, index) => ({
      ...task,
      index,
    }));

    this.updateLocalStorage();
  }

  editTask(task, value) {
    const index = this.tasks.findIndex((t) => task.index === t.index);

    if (index === -1) return;

    this.tasks[index].description = value;

    this.updateLocalStorage();
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.completed);

    this.tasks = this.tasks.map((task, index) => ({
      ...task,
      index,
    }));
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    window.localStorage.setItem('NOTE', JSON.stringify(this.tasks));
  }
}

export default Cruds;