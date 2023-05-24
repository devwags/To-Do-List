const storedTasks = [];

const add_task = (str) => {
  if (str){
    //CREATE NEW TASK IN STANDARD FORMAT
    let newTaskItem = document.createElement('li');
    let newTaskText = document.createElement('p');
    let newTaskButton = document.createElement('button');

    //ENTIRE TASK ITEM DEFAULTS
    newTaskItem.classList.add("task");

    //TASK TEXT DEFAULTS
    newTaskText.innerHTML = str;
    newTaskText.classList.add("task-text");

    //TASK BUTTON DEFAULTS
    newTaskButton.innerHTML = "x";
    newTaskButton.classList.add("remove-task-button");
    newTaskButton.addEventListener("click", remove_task);

    //TASK COMPLETED BUTTON DEFAULTS

    //TASK STRUCTURE DEFAULTS
    newTaskItem.appendChild(newTaskText);
    newTaskItem.appendChild(newTaskButton);

    //ADD THE TASK TO THE SITE
    let taskList = document.querySelector('#task-list');
    taskList.appendChild(newTaskItem);

    //UPDATE LOCAL STORAGE TO INCLUDE NEW TASK
    addToLocalStorage(str);
  } else {
    console.log("Did nothing.");
  }
}

const addToLocalStorage = (str) => {
  storedTasks.push(str)
  localStorage.setItem('storedTasksArr', storedTasks);
}

const removeFromLocalStorage = (index) =>  {
  storedTasks.splice(index, 1);
  localStorage.setItem('storedTaskArr', storedTasks);
}

//FUNCTION FOR REMOVING TASKS FROM THE LIST
const remove_task = (e) => {
  let node = e.srcElement.parentNode;
  node.parentNode.removeChild(node);

  //UPDATE LOCAL STORAGE TO EXCLUDE REMOVED TASK
  console.log()
}

//FUNCTION FOR ADDING TASKS TO CONTAINER
let addTaskButton = document.querySelector('#add-task-button');
let addTaskInput = document.querySelector('#add-task-input');

addTaskButton.addEventListener("click", () => {
  add_task(addTaskInput.value);
  addTaskInput.value="";
});

//POPULATE SITE WITH DEFAULT TASKS
localStorage.clear();
console.log(localStorage.getItem('storedTasks'));
debugger;
if (!localStorage.getItem('storedTasks')){
  const defaultTasks = ['Default Task #1', 'Default Task #2', 'Default Task #3'];
  defaultTasks.forEach(add_task);
  console.log(localStorage.getItem('storedTasks'));
} else {
  //Append all items to task list
  console.log(localStorage.getItem('storedTasks'));
}