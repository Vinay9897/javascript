// DOM traversing

const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "blue";
div.style.backgroundColor = "green";
const body = div.parentNode;
body.style.backgroundColor = "yellow";
