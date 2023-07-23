var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var clearTasksButtonEl = document.querySelector("#clear-tasks");

var createTaskHandler = function () {
  // Prompt the user for a task description
  var taskDescription = window.prompt("Enter your task:");

  if (taskDescription) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = taskDescription;
    tasksToDoEl.appendChild(listItemEl);
  }
};

var clearTasksHandler = function () {
  // Remove all the child elements (tasks) from the "Tasks To Do" list
  tasksToDoEl.innerHTML = "";
};

buttonEl.addEventListener("click", createTaskHandler);
clearTasksButtonEl.addEventListener("click", clearTasksHandler);
