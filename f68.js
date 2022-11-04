// understand callback function

// suppose  we have to two function myfun1() and myfun2()
// we want to them 
// then we have one of the way is "callback"

// function myfun1() {
//     console.log("outer function");
// }

// function myfun2() {
//     console.log("inner function");
// }

//======================= 1) way 
// myfun1();
// myfun2();

// ======================= 2)way
// function myfun1(callback) {
//     console.log("outer function");
//     callback();
// }

// function myfun2() {
//     console.log("inner function");
// }

// myfun1(myfun2);



//============= we can directly pass myfun2 inside myfun1

function myfun1(callback) {
    console.log("Outer function");
    callback();
}



// myfun1(function myfun2() {
//     console.log("Inner function");
// });

//===============arrow funtion

myfun1(() => {
    console.log("Inner function");
});



// addition of numbers using call back function


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// function getTwoNumbers(number1, number2, callback) {
//     console.log(number1, number2);
//     callback(number1, number2);
// }

// getTwoNumbers(4, 5, addTwoNumbers);




//===================== same work we do this way

function getTwoNumbers(number1, number2, callback) {
    console.log(number1, number2);
    callback(number1, number2);
}

getTwoNumbers(4, 5, function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
});




