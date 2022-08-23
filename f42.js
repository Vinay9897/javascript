//getelementbyId is used for selecting (only)id from the html page
const website = document.getElementById("website");
const c = website.style.color = "blue";


//querySelector is used for selecting properties(anyone)

// id selector
let mainHeading = document.querySelector("#main-heading");
const heading = mainHeading.textContent = "MANAGE YOUR TASK";
console.log(heading);

// class selector
const navitems = document.querySelector(".nav-item");
console.log(navitems)

//querySeclectorAll is used for select all properties
// it is a 

const navites = document.querySelectorAll(".nav-item");
console.log(navites)


