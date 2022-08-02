// important array methods

const numbers = [1, 2, 3, 4];

// function multiplyby2(number, index) {
//     console.log("index is :", index);
//     console.log(`${number}*2 = ${number * 2}`);
// }
// for (let x in numbers) {
//     multiplyby2(numbers[x], x);
// }

//  using forEach

// any function withount its name is anonymous function
// numbers.forEach(function (number, index) {
//     console.log(`${number}*2 = ${number * 2} ------ ${index} index`);
// });



// forEach use with arrayObject

const users = [
    { firstName: "vinay", age: 221 },
    { firstName: "vinay2", age: 22 },
    { firstName: "vinay23", age: 222 },
]

// users.forEach(function (user) {

//     console.log(user.firstName);
// }); 

// forEach with arrow function

users.forEach(user = (user) => {
    console.log(user.firstName);
});