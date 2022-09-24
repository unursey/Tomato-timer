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
      this._id = String(Date.now() + Math.floor(Math.random()*1000));
      this._taskName = String(taskName);
      this._timer = Number(timer);
    }
  
    setTaskName(taskName) {
      this._taskName = taskName;
      return this;
    }
  
    changeTimer() {
      return (this._timer += 1);
    }
  }