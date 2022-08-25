// Sibling Relation
//nextSibling
//nextElementSibling
//nextSibling.textContent


const htmlElementNode = document.getRootNode().childNodes[0];
const headElementNode = htmlElementNode.childNodes[0];
console.log(htmlElementNode);

//we can find the next Siblings(on same level)
console.log(htmlElementNode.nextSibling); // null because <html> have no siblings
console.log(headElementNode.nextSibling); //  #text
console.log(headElementNode.nextSibling.nextSibling); // body

// we can find the (next Element Sibling)
console.log(headElementNode.nextElementSibling); // it means next ka next  like  head--> #text--->body


// we check also textContent

console.log(headElementNode.textContent);