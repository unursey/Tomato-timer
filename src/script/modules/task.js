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
    constructor(taskName, importance, timer = 0) {
      this._id = String(Date.now() + Math.floor(Math.random()*1000));
      this._taskName = String(taskName);
      this._timer = Number(timer);
      this._importance = importance;
    }

    execute() {
      throw new Error('Error!');
    }
  
    setTaskName(taskName) {
      this._taskName = taskName;
      return this;
    }
  
    changeTimer() {
      return (this._timer += 1);
    }   
  }

  export class defaultTask extends Task {
    constructor() {
      this._importance = 'default';
    }
  }
  export class importantTask extends Task {
    constructor() {
      this._importance = 'important';
    }
  } 
  export class sosoTask extends Task {
    constructor() {
      this._importance = 'so-so';
    }
  } 

  export class AddNewTask extends Task {
    execute() {
      switch (this._importance) {
        case 'default':
          return new defaultTask(this._taskName);
        case 'important':
          return new importantTask(this._taskName);
        case 'so-so':
          return new sosoTask(this._taskName);
      }
    }
  }