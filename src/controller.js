//import { viewTodo } from "./view";

import { todoModel } from "./model";
import { viewTodo } from "./view";


//interaction with button

const controlTodo = (()=>{



let btn = document.querySelector('.btn');

btn.addEventListener('click', printClick);

function printClick(e){
        let id = todoModel.getListLength();
        let name = prompt("what is the name of the project?");
        let desc = prompt("what is the description of the project?");
        viewTodo.createProject(id,name,desc);
        todoModel.newProject(id,name,desc);
        todoModel.getProject();
   //let project = todoModel.todoProject()
            


}








})()
