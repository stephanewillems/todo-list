//data handeling, storing data and modifying it.
import { viewTodo } from "./view"; //IMPORTED VIEW to check amount of Li-items created 
// Length of UL is to give id-number to project.

const todoModel= (()=>{

let projArr = [];
 let counterP = 0;
const _todoProject = (id,name,desc,task,counter)=>{
   id = getListLength()-1;
      return {
      id,
      name,
      desc,
      task,
      counter
  }
}

const todoTask = (id,title,description,dueDate = Date.now(),priorety = 0 ,checked = false)=>{
    return {
        id,
        title,
        description,
        dueDate,
        priorety,
        checked
      }
}



function addTask(proj,todo){
    
    //todo.id = proj.task.length;
    proj.task.push(todo);
    todoProject.counter++;
}

function doneTodo(todo){
   return !todo.checked? todo.checked = true : todo.checked = false;
}
//Create new project

function newProject(name,desc,task=[],counter){
  

    let project = _todoProject(name,desc,task,counter);
    projArr.push(project);
    return project;
}


function getProject(id){
   console.log(projArr[id]);
   //return projArr[id];
}


function removeTodo(proj,todo){
    return proj.task.splice(todo.id,1);

}

function getListLength(){
    return document.querySelectorAll('.projects>ul>li').length;
}

function removeProject(id){
   return projArr.splice(id,1);

   //console.log(projArr[id]);


}
function setId(item){
    return projArr.indexOf(item);
}



    return{
        todoTask,
        addTask,
        doneTodo,
        removeTodo,
        getListLength,
        newProject,
        getProject,
        removeProject,
        projArr
    }
})()


export { todoModel }