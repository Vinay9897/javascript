// keypress event // whenvever the key will press on element
// mouseover event // whenever the cursor reach over element it will notify us
const body = document.body;

//keypress event
// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })

//mouseover
const button = document.querySelector(".btn");
button.addEventListener("mouseover", (e) => {
    console.log("mouseover event occured!!!");
})

button.addEventListener("mouseleave", (e) => {
    console.log("mouseleave event occured!!!");
})

