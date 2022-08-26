// how to get the dimension of element
//like height and weight

const sectiontodo = document.querySelector(".section-todo");
const info = sectiontodo.getBoundingClientRect();
const height = sectiontodo.getBoundingClientRect().height;
const width = sectiontodo.getBoundingClientRect().width;
console.log(info);
console.log(height);
console.log(width);