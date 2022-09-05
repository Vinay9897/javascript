// ================= setInterval()
// : This function we call  after particular interval of time , whatever the time is define in the function


// console.log("Script Start");

// setInterval(() => {
//  console.log(Math.floor(Math.random() * 10));
// }, 1000);

// console.log("script end");


//============example 
console.log("script start");

let total = 0;
for (let i = 0; i < 100; i++) {
    total += i;
}
setInterval(() => {
    // console.log(total);
    // console.log(Math.floor(Math.random() * 10));
}, 500);

console.log("script end");
