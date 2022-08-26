// to add new class in the tags
// to remove the class from the tags
// to check the class

const sectiontodo = document.querySelector(".section-todo");

sectiontodo.classList.add("bg-dark");
sectiontodo.classList.remove("bg-dark");
console.log(sectiontodo.classList);
const ans = sectiontodo.classList.contains("container");
console.log(ans);