//data handeling, storing data and modifying it.
import { viewTodo } from "./view"; //IMPORTED VIEW to check amount of Li-items created 
// Length of UL is to give id-number to project.

const todoModel= (()=>{

let projArr = [];
 let counterP = 0;
const todoProject = (id,name,desc,task,counter)=>{
       
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

function newProject(id,name,desc,task=[],counter){

    let project = todoProject(id,name,desc,task,counter);
    projArr.push(project);
    return project;
}


function getProject(){
   console.log(projArr);
}


function removeTodo(proj,todo){
    return proj.task.splice(todo.id,1);

}

function getListLength(){
    return document.querySelectorAll('.projects>ul>li').length;
}




    return{
        todoProject,
        todoTask,
        addTask,
        doneTodo,
        removeTodo,
        getListLength,
        newProject,
        getProject
    }
})()


export { todoModel }