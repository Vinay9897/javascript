// static vs live list

// querySelector give us a static list
//querySelectorTagName give us a live list

const listItems = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list"); // It contains all list
const newlist = document.createElement("li"); // create node or element
newlist.textContent = "Todo 5";// put data in the node
console.log(ul);
ul.append(newlist);

// there we can add new list after printing but we can see new list also
// so that is live list


