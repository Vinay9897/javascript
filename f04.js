//intro to arrays
// reference type
// how to create arrays

// ordered collection of items

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// access indexing
console.log(fruits[0]);
//changing data in array

fruits[1] = "banana";
console.log(typeof fruits);

// kya fruits array han

console.log(Array.isArray(fruits));


//push
fruits.push("papaya");
console.log(fruits);
//pop
fruits.pop();
console.log(fruits);
fruits.shift(); // remove from starting
console.log(fruits);
fruits.unshift("Vinay"); // add at starting
console.log(fruits);


