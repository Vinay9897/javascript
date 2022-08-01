// string indexing

let firstName = " Vinay ";

console.log(firstName[1]);
console.log(firstName.length);
console.log(typeof firstName);
console.log(firstName.trim())
console.log(firstName.trimStart())
console.log(firstName.trimEnd());
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//slice
console.log(firstName.slice(0, 4));


// convert number to string
let n = 12;
console.log(typeof (n + " "));
let n1 = String(12);
console.log(typeof n1);

let n2 = Number(n1);
console.log(typeof n2);
// another trick to convert string to integer using '+' sign

console.log(typeof +n2);