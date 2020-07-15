//data handeling, storing data and modifying it.

const todoModel= (()=>{

const todoProject = (id,name,desc,task=[],counter = 0)=>{
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

function printObj (val){
    console.log(val);
}


function addTask(proj,todo){
    
    //todo.id = proj.task.length;
    proj.task.push(todo);
}

function doneTodo(todo){
   return !todo.checked? todo.checked = true : todo.checked = false;
}


function removeTodo(proj,todo){
    return proj.task.splice(todo.id,1);

}


    return{
        todoProject,
        todoTask,
        printObj,
        addTask,
        doneTodo,
        removeTodo
    }
})()


export { todoModel }