"use-strict";
// primitive vs reference data types

// primitive data types
let num1 = 6;
let num2 = num1;
console.log("num1  ", num1);
console.log("num2  ", num2);
num1++;
console.log("num1  ", num1);
console.log("num2  ", num2);

// Reference data types
// memory create in heap memory
// both reference pointing to same address;
let array1 = ["item1", "item2"]
let array2 = array1;
console.log(array1); // ex 0x11
console.log(array2); // ex 0x11
array1.push("item3");
console.log("after pushing element to array 1");
console.log(array1);
console.log(array2);


//slice
let array3 = array1.slice(0);
console.log("Using slicing", array3);

//Or Using Concatenation
let array = [];
array = [].concat(array1);
console.log("Using Concatenation", array);

// spread operator
// it is used for copying the another array

let array4 = [...array1];
console.log("Using spread operator", array4);
