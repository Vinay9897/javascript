const newTodo = document.querySelector(".todo-list");

const formtodo = document.querySelector(".form-todo");
const formtext = document.querySelector(".form-todo input[type=text]");
formtodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const newText = formtext.value;
    const newLis = document.createElement("li");
    newLis.innerHTML = `<span class="text">${newText}</span>
    <div class="todo-bottons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn delete">Delete</button>
    </div>`
    newTodo.append(newLis);
    formtext.value = "";
})

const done = document.querySelector(".done");

newTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})
newTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const liRemove = e.target.parentNode.parentNode;
        liRemove.remove();
    }
})

