// Ваша задача создать класс для реализации задачи
// Принимает параметры название и счетчик (по умолчанию 0)
// Полученный объект должен иметь:

// 1) уникальный ID (string)
// 2) название (string)
// 3) счетчик (number)

// методы:
// 1) Изменить значение счетчика (+1)
// 2) Изменить имя

export class Task {
  constructor(taskName, timer = 0) {
    this.id = String(performance.now()).replace('.', '');
    this.taskName = String(taskName);
    this.timer = Number(timer);
  }

  changeTimer() {
    return (this.timer += 1);
  }

  setTaskName(taskName) {
    this.taskName = taskName;
    return this;
  }
}




export const one = () => {
  let count = 0;
  const imp = ["default", "important", "so-so"];
  document
    .querySelector(".button-importance")
    .addEventListener("click", ({ target }) => {
      count += 1;
      if (count >= imp.length) {
        count = 0;
      }

      for (let i = 0; i < imp.length; i++) {
        if (count === i) {
          target.classList.add(imp[i]);
        } else {
          target.classList.remove(imp[i]);
        }
      }
    });
};
