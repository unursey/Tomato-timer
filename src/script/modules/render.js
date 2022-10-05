import { el, setChildren } from "redom";
import image from '../image'

export class RenderTomato {
  constructor() {
    this.windowTitle = el("p.window__panel-title");
    this.windowText = el("p.window__panel-task-text", "Томат 0");
    this.windowTimer = el("p.window__timer-text", "00:00");
    this.taskForm = el("form.task-form");
    this.btnStart = el("button.button.button-primary.button-start", "Старт");
    this.btnStop = el("button.button.button-secondary.button-stop", "Стоп");

    this.btnImportant = this.createBtnImportant();
    this.btnAddTask = this.createBtnAddTask();
    this.tasksList = this.createTasksList();
    this.init();
  }

  init() {
    setChildren(document.body, [this.createHeader(), this.createMain()]);
  }

  createHeader() {
    return el(
      "header",
      el(
        "section.header",
        el("div.container.header__container", [
          el("img.header__logo", {
            src: "img/svg/noto_tomato.svg",
            alt: "Tomato image",
          }),
          el("h1.header__title", "Tomato timer"),
        ])
      )
    );
  }

  createMain() {
    const main = el(
      "section.main",
      el("div.container.main__container", [
        this.createWindow(),
        this.createTasks(),
      ])
    );

    return el("main", main);
  }

  createWindow() {
    return el("div.pomodoro-form.window", [
      el("div.window__panel", [
        this.windowTitle,
        this.windowText,
      ]),
      el("div.window__body", [
        this.windowTimer,
        el("div.window__buttons", [this.btnStart, this.btnStop]),
      ]),
      this.createTaskForm(),
    ]);
  }

  createTasks() {
    return el("div.pomodoro-tasks", [el("p.pomodoro-tasks__header-title", "Инструкция:"),
    el("ul.pomodoro-tasks__quest-list", [
      el(
        "li.pomodoro-tasks__list-item",
        "Напишите название задачи, чтобы её добавить."
      ),
      el(
        "li.pomodoro-tasks__list-item",
        "Чтобы задачу активировать, выберите её из списка."
      ),
      el("li.pomodoro-tasks__list-item", "Запустите таймер."),
      el("li.pomodoro-tasks__list-item", "Работайте, пока таймер не прозвонит."),
      el("li.pomodoro-tasks__list-item", "Сделайте короткий перерыв (5 минут)."),
      el(
        "li.pomodoro-tasks__list-item",
        "Продолжайте работать, пока задача не будет выполнена."
      ),
      el(
        "li.pomodoro-tasks__list-item",
        "Каждые 4 периода таймера делайте длинный перерыв (15-20 минут)."
      ),
    ]), this.tasksList]);
  }

  createTaskForm() {
    const inputTask = el("input.task-name.input-primary", {
      type: "text",
      name: "task-name",
      id: "task-name",
      placeholder: "название задачи",
    });

    setChildren(this.taskForm, [
      inputTask,
      this.btnImportant,
      this.btnAddTask,
    ]);

    return this.taskForm;
  }

  createBtnImportant() {
    return el("button.button.button-importance.default", {
      type: "button",
      ariaLabel: "Указать важность",
    });
  }

  createBtnAddTask() {
    return el(
      "button.button.button-primary.task-form__add-button",
      {
        type: "submit",
      },
      "Добавить"
    );
  }

  createTasksList() {
    return el("ul.pomodoro-tasks__quest-tasks");
  }

  createTask(task) {
    const newTask = el("li.pomodoro-tasks__list-task", [
      el("span.count-number", `${task.count}`),
      el("button.pomodoro-tasks__task-text", `${task.taskName}`),
      el("button.pomodoro-tasks__task-button"),
    ]);
    newTask.classList.add(task.important);
    newTask.dataset.id = task.id;
    this.tasksList.append(newTask);
  }

  setTitle(taskName, taskIndex, timer) {
    this.windowTitle.textContent = taskName;
    this.windowText.textContent = `Томат ${taskIndex}`;
    this.windowTimer.textContent = `${timer}:00`;
  }
}
