import { Tomato } from "./modules/tomato";
import { Task } from "./modules/task";

export const init = () => {

  const taskOne = new Task('Постирать посуду', 3);
  console.log('taskOne: ', taskOne);

  const taskTwo = new Task('Помыть одежду');
  console.log('taskTwo: ', taskTwo);

  const tomatoTask = new Tomato();

  tomatoTask.addTask(taskOne);
  tomatoTask.addTask(taskTwo);

  tomatoTask.showTasks();

  tomatoTask.setActiveTask(1);

  tomatoTask.startTask();
};

init();


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
