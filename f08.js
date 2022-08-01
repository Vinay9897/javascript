// object is also refernce type like array
// arrays are good but not sufficient
// for real world data
// objects store key value pair
// objects don't have index

// how to create objects

// for objects we use curly braces{}
const person = {
    name: "Vinay",
    age: "22",
    hobbies: ["manga", "novel", "anime"],
    "my hobbies": ["manga", "pokemon"] // key with spaces
    // required double  quotes
};
console.log(person);


// how to access data from objects

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// or
console.log(person["name"]);
console.log(person["my hobbies"]);

//how to add key value pair to objects

