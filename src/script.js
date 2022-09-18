import { Task } from "./script/main";
import './scss/index.scss';


const init = () => {
  
const task = new Task('что-то', 6);
console.log('task: ', task);
console.log('taskName: ', task.taskName);
console.log('changeTask: ', task.setTaskName('что-то еще'));
console.log('taskName: ', task.taskName);
console.log('changeTimer: ', task.changeTimer())
};

init();
