// get and set attribute

//By using querySelector we get the first anchor(a) tag
const link = document.querySelector("a");
// using getAttribute method we can get the data from inside a tag
console.log(link.getAttribute("href"));

// setattribute
link.setAttribute("href", "https://www.google.com");
console.log(link);
