import { AddNewTask } from "./task";

export class ControllerTomato {
  constructor(tomato) {
    this.tomato = tomato;
    this.btnAddTask = document.querySelector(".task-form__add-button");
    this.taskTitle = document.querySelector(".task-name");
    this.taskImportance = document.querySelector(".button-importance");
    this.btnStart = document.querySelector(".button-start");
    this.btnStop = document.querySelector(".button-stop");
    this.count = 0;
    this.importanceList = ["default", "important", "so-so"];
    this.tasksList = document.querySelector(".pomodoro-tasks__quest-tasks");
    this.init();
  }

  init() {
    this.importance = this.createImportance();

    this.btnAddTask.addEventListener("click", (e) => {
      e.preventDefault();
      this.addTask();
    });

    this.tasksList.addEventListener("click", (e) => {
      if (e.target.classList.contains("pomodoro-tasks__task-text")) {
        this.tomato.setActiveTask(
          e.target.closest(".pomodoro-tasks__list-task").dataset.id
        );
      }
    });

    this.btnStart.addEventListener('click', (e) => {
      this.tomato.startTask();
    })
  }

  countUp() {
    this.count += 1;
    return this.count;
  }

  changeName(name) {
    this.name = name;
  }

  get importanceName() {
    return this.name;
  }

  addTask() {
    const newTask = new AddNewTask(
      this.taskTitle.value,
      this.importanceList[this.count]
    );
    console.log("newTask: ", newTask);
    this.tomato.showTasks();
    this.tomato.addTask(newTask);
  }

  createImportance() {
    this.taskImportance.addEventListener("click", (e) => {
      this.countUp();
      console.log("this.count: ", this.count);
      if (this.count >= this.importanceList.length) {
        this.count = 0;
      }

      this.importanceList.forEach((item, i) => {
        if (this.count === i) {
          e.target.classList.add(item);
          this.changeName(item);
        } else {
          e.target.classList.remove(item);
        }
      });
    });

    return this.importanceList[this.count];
  }
}
