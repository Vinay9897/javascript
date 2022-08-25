//get multiple elements using getElementsByClassName() function

const navItems = document.getElementsByClassName("nav-item");  // HtmlCollections
console.log(navItems[0]);
console.log(navItems[1]);
console.log(Array.isArray(navItems)); // this is not Array


// get multiple elements items using querySelectorAll() function

const nvItems = document.querySelectorAll(".nav-item");
console.log(nvItems[0]);
console.log(nvItems[2]);


//we can't use forEach method to iterate through HTMLCollections

//we have
// Simple for loop
// for of loop
// forEach


//array like object--> means ( indexing and length)properties


