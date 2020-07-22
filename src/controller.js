//im(port { viewTodo } from "./view";

"use strict";

import { todoModel } from "./model";
import { viewTodo } from "./view";


//interaction with button

const controlTodo = (()=>{


    let project;

    //cache dom
const btn = document.querySelector('.projectcontent>.btn');
const plist = document.querySelectorAll('.ul_plistitems');
const btnTodo = document.querySelector('.todos>.btn');

    //eventlisteners

btn.addEventListener('click', createProject);
plist.forEach((items)=>{
    items.addEventListener('click',detailsProject);
})

    btnTodo.addEventListener('click',createTodo);
    console.log("button ready");


//plist.addEventListener('click',detailsProject);


// add project
function createProject(e){
    let id = todoModel.getListLength();
        let name = prompt("what is the name of the project?");
        let desc = prompt("what is the description of the project?");
        viewTodo.createProject(id,name,desc);
        todoModel.newProject(id,name,desc);
        //todoModel.getProject();
        console.log(todoModel.projArr);
        project = todoModel.getProject(id);
        viewTodo.showTodo(project);

   //let project = todoModel.todoProject()
        
} 

//click on project to get todo's from project



function detailsProject(e){
    if(e.target.matches('li')){
        console.log(e.target);
        project = todoModel.getProject(e.target.id);
        viewTodo.inputTodo.style.display = "none";
        viewTodo.showTodo(project);
       /*  viewTodo.renderTodo(project.task); */
        viewTodo.renderTodo(project.task);
        
    }else if(e.target.matches('.removeP')){
           //console.log(e.target.parentNode);
           let id = e.target.parentNode.id;
           todoModel.removeProject(id);
           console.log(todoModel.projArr);
           viewTodo.removeProj(id);
           viewTodo.setIds();
           for(let i = 0; i< todoModel.projArr.length; i++){
               todoModel.projArr[i]["id"] = i;
           }
        } else {
            console.log("wrong");
        }

        return project;
}



function createTodo(e){
        let id = todoModel.getTodoLength();
        let name2 = prompt("what is the name of the todo?");
        let desc2 = prompt("what is the description of the todo?");
        
        let todo = todoModel.newTodo(id,name2,desc2);
        let dataId = e.target.dataset["project"];
        let project = todoModel.getProject(dataId);
        todoModel.addTask(dataId, todo);
        viewTodo.renderTodo(project.task);
        //viewTodo.createTodo(id,name2);
        
   //let project = todoModel.todoProject()
        
} 












})()
