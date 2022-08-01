const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];


// =================Array destructuring

// let [myvar1, myvar2] = myArray;
// myvar1 = "value changed";


//===== escaping second value
// let [myvar1, , myvar2] = myArray;

let [myvar1, myvar2, ...remainValue] = myArray;
console.log(myvar1);
console.log(myvar2);
console.log(remainValue);
// console.log(typeof remainValue);

