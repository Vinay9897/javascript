// string indexing

let firstName = " Vinay ";

console.log(firstName[1]); // i
console.log(firstName.length); // 5
console.log(typeof firstName); // string
console.log(firstName.trim()); // "Vinay"
console.log(firstName.trimStart()); // "Vinay "
console.log(firstName.trimEnd()); //" Vinay"
console.log(firstName.toLowerCase()); // vinay
console.log(firstName.toUpperCase()); // VINAY

//slice
console.log(firstName.slice(0, 4)); //


// convert number to string
let n = 12;
console.log(typeof (n + " ")); //string
let n1 = String(12); // explicit conversion
console.log(typeof n1);

let n2 = Number(n1);
console.log(typeof n2);

// another trick to convert string to integer using '+' sign
console.log(typeof +n2);