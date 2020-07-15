import { todoModel } from "./model";

let steph = todoModel.todoProject(1,"steph","description");

todoModel.printObj(steph);

let todo = todoModel.todoTask(0,"title","omschrijving");
let todo2 = todoModel.todoTask(1,"title2","omschrijving2");
todoModel.printObj(todo);
todoModel.addTask(steph,todo);
todoModel.addTask(steph,todo2);
todoModel.doneTodo(todo);
console.log(steph);

todoModel.removeTodo(steph,todo);
console.log(steph);
let todo3 =  todoModel.todoTask(2,"title3","omschrijving3");
todoModel.addTask(steph,todo3);
console.log(steph);

