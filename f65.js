//================== setTimeOut 
// : In which we define in Time(in miliseconds) to delay a function

// javascrit is synchronous programmin and single threaded
//synchronous : Next line executed only when previous line executed 
// or

// asynchronous : which are not sync 

//============== noramal way (using function expression)
// console.log("script start");
// function Hello() {
//     console.log("Hello Vinay");
// }
// console.log("script End");

// setTimeout(Hello, 2000);


//================ Using arrow function
// console.log("script start");
// setTimeout(() => {
//     console.log("Hello Vinay");
// }, 1000);
// console.log("script end");

// ======================

//setTimeout function have its own id
// if we clear the setTimeout "id" the setTimeout function stop at the movement

console.log("script start");

const id = setTimeout(() => {
    console.log("Inside SetTimout");
}, 1000);

for (let i = 0; i < 99; i++) {
    console.log("....");
}

console.log("the settimeout id is :", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");





