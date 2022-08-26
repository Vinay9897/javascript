// clone node

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
ul.append(li);


// clone node

const li2 = li.cloneNode(true);
ul.prepend(li2);