//  using innerHTML, add html Element

const todolist = document.querySelector(".todo-list");
todolist.innerHTML += "<li> New Todo </li>";

// 2 way 

const newTodoItem = document.createElement("li"); // for creating a element

let newTodoItemText = document.createTextNode("New Todo 2"); // store a text that we want to add in element
// using append()
newTodoItem.append(newTodoItemText);
todolist.append(newTodoItem);

// 3way

// i) first creating a element 
const newTodoItem2 = document.createElement("li");

//(ii) add store the text in newTodoItem

newTodoItem2.textContent = "New Todo 3";

// add in the element of todolist class

todolist.append(newTodoItem2);


