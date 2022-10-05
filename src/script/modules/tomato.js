export class Tomato {
  #timer;
  constructor(page, options = {}) {
    if (Tomato._instance) {
      return Tomato._instance;
    }
    this.taskTime = options.taskTime || 25;
    this.shortBreak = options.shortBreak || 5;
    this.longBreak = options.longBreak || 15;
    this.tasks = options.tasks || [];
    this.activeTask = null;
    this.#timer = 0;
    this.page = page;
    Tomato._instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
    this.page.createTask({
      id: task._id,
      taskName: task._taskName,
      important: task._importance,
      count: this.tasks.length,
    });
  }

  setActiveTask(id) {
    
    let i;
    let task = this.tasks.find((item, index) => {         
      if (item._id === id) {
        this.activeTask = item;
        i = index + 1; 
        return item};
    });
 
    this.page.setTitle(task._taskName, i, this.taskTime)   
  }

  startTask() {
    if (this.activeTask) {
      this.#timer = 0;
      console.log("Start task id:", this.activeTask._id);
      const timerId = setInterval(() => {
        if (this.timer() === this.taskTime) {
          clearInterval(timerId);
          this.break(this.countUp(this.activeTask._id));
        }
      }, 1000);
    } else {
      console.log("Нет задач");
    }
  }

  break(count) {
    if (count % 3 === 0) {
      console.log("longBreak");
      this.startBreak(this.longBreak);
    } else {
      console.log("shortBreak");
      this.startBreak(this.shortBreak);
    }
  }

  startBreak(time) {
    this.#timer = 0;
    const breakId = setInterval(() => {
      if (this.timer() === time) {
        clearInterval(breakId);
        console.log("Перерыв закончен");
        this.startTask();
      }
    }, 1000);
  }

  countUp(id) {
    let i = this.tasks.find((item) => item._id === id);
    const count = i.changeTimer();
    console.log("Новый счетчик ", count);
    return count;
  }

  timer() {
    console.log('this.#timer : ', this.#timer );
    return ++this.#timer;
  }

  showTasks() {
    console.log("All tasks ", this.tasks);
  }
}
