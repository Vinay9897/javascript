// intro to event
// click
// 

const btn = document.querySelector(".btn");


//---------------1 way
// function clickMe() {
//     console.log("Click me");
// }
// btn.addEventListener("click", clickMe);

//--------------2 way
// btn.addEventListener("click", function () {
//     console.log("Click me");
// })

btn.addEventListener("click", () => {
    console.log("Click Me");
})
