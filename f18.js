// map method

const numbers = [1, 2, 3, 4, 5];

// ===================================start====

// const square = function (number) {
//     return number * number;
//     // console.log(number * number);
// }

// const newsquareArray = numbers.map(square);
// console.log(newsquareArray);

// ====================END==============


// or

// ==============START===============


// const square = (number) => {
//     return number * number;
// }

// const newSquareArray1 = numbers.map(square);

// console.log(newSquareArray1);

// ================END=========================



// Or


// =================START================
// Using anonymous function

// const newSquareArray2 = numbers.map(function (number) {
//     return number * number;
// });
// console.log(newSquareArray2);

// =====================END===============


// ======================START=================
// Use map with ArrayObject

const users = [
    { firstName: "Vinay", age: 23 },
    { firstName: "rahul", age: 5 },
    { firstName: "shivam", age: 20 },
]

const newSquareArray = users.map((user) => {
    return (user.firstName);
});

console.log(newSquareArray);
