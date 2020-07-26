
"use strict";
import { todoModel } from "./model";

const viewTodo = (() => {


    //cache dom
    const projectList = document.querySelector('.ul_plistitems');

    function renderProjects(){
       projectList.innerHTML =  todoModel.getProjects().map((item,i)=>{

        return `
        <li  data-list = ${i}>
            ${item.name} <button class= "listitem"></button>
        </li>
        `;
       }).join('');
    }
    

   return {
       renderProjects
   }

})()


export { viewTodo };