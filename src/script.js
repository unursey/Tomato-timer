import { Task } from "./script/main";
import './scss/index.scss';


const init = () => {
  
const task = new Task('что-то', 6);
console.log('task: ', task);

console.log('taskName: ', task._taskName);
console.log('changeTask: ', task.setTaskName('что-то другое'));

console.log('changeTimer: ', task.changeTimer());
console.log('task: ', task);
};

init();
