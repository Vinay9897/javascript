// get the root(document is the rootNode) node
const rootNode = document.getRootNode();
// console.log(rootNode);
const htmlElementNode = rootNode.childNodes; // <html> ...</html>
// console.log(htmlElementNode);
// console.log(htmlElementNode[0]);
// console.log(htmlElementNode[1]); // undefined because,It have one childNode that is html
const headElementNode = htmlElementNode[0].childNodes[0]; // first child // <head>...</head>
console.log(headElementNode);
const textElementNode = htmlElementNode[0].childNodes[1]; // second child // #text
console.log(textElementNode);
const bodyElementNode = htmlElementNode[0].childNodes[2]; // third child // <body>...</body>
console.log(bodyElementNode);

// get the parent Node

console.log(headElementNode.parentNode); //html
console.log(textElementNode.parentNode); //html
console.log(bodyElementNode.parentNode); //html

console.log(htmlElementNode.parentNode); //document
console.log(rootNode.parentNode); //
