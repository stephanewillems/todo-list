//import { viewTodo } from "./view";

import { todoModel } from "./model";
import { viewTodo } from "./view";


//interaction with button

const controlTodo = (()=>{


    //cache dom
const btn = document.querySelector('.btn');
const plist = document.querySelectorAll('.ul_plistitems');

    //eventlisteners

btn.addEventListener('click', createProject);
plist.forEach((items)=>{
    items.addEventListener('click',detailsProject);
})
//plist.addEventListener('click',detailsProject);


// add project
function createProject(e){
        let id = todoModel.getListLength();
        let name = prompt("what is the name of the project?");
        let desc = prompt("what is the description of the project?");
        viewTodo.createProject(id,name,desc);
        todoModel.newProject(id,name,desc);
        todoModel.getProject();
   //let project = todoModel.todoProject()
        
}

//click on project to get todo's from project



function detailsProject(e){
    if(e.target.matches('li')){
        console.log(e.target);
        todoModel.getProject(e.target.id);
    }else if(e.target.matches('.removeP')){
           console.log(e.target);
        } else {
            console.log("wrong");
        }
}










})()
