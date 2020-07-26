//im(port { viewTodo } from "./view";

"use strict";

import { todoModel } from "./model";
import { viewTodo } from "./view";
//import { viewTodo } from "./view";


//interaction with button

const controlTodo = (()=>{
//cachedome
const btn = document.querySelector('.btn');
const list = document.querySelectorAll('.ul_plistitems');
//eventlisteners
btn.addEventListener('click', addProject);
list.forEach((item)=>{
    item.addEventListener('click', detailRemove);
})

//functions

function addProject(e){
    let name = prompt("what is name of project?");
    todoModel.createProject(name);
    viewTodo.renderProjects();
    console.log(todoModel.getProjects());
}

function detailRemove(e){
    let id;
    if(e.target.matches('li')){
        console.log(e.target);
      
    }else if(e.target.matches('button')){
        todoModel.removeProject(e.target.parentNode.dataset.list);
        viewTodo.renderProjects();
        todoModel.setProjectsId();
        console.log(todoModel.getProjects());

    }else{
       return;
    }
}

  

})()

