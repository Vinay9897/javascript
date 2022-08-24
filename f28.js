// Maps 
// map is an iterable

// store data in ordered fashion

//store key value pair {like object}

// duplicate between maps  and objects
// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as a key

// like array, number, string

// object literal 
//key-> string
//key-> symbol

const person = new Map();

// we can add (key) any type of data in Map
// Map store data in key and value pair
// ex:--
person.set(1, "1");
person.set("vinay", "hello");
person.set([1, 2, 3], "array");
person.set("a", "value");
person.set({ 1: 'one' }, '123');
// console.log(person);
// for (let key of person.keys()) {
// console.log(key, typeof key);
// // console.log(Array.isArray(key));
// }

//========== destructuring with array

for (let [key, value] of person) {
    console.log(key, value);
}



// ========= Directy add key value pair in Map----------

// const person1 = new Map([['key', 'value'], ['key2', 'value2'], ['key3', 'value3']]);

// console.log(person1);


// we hava object person3

const person3 = {
    id: 3,
    name: "vinay",
}

// now we have to some extra infomation of person3 but 
// not inside person3 some where else
// we can store in map

// let's see how we can store information of person3 in map
// we will make person3 as key
// and information as value 

//one way : directly store infomation
// const extraInfo = new Map([
//     [person3, { age: 34, color: "black" }]
// ]);

// second way by using set() method

const extraInfo = new Map();
extraInfo.set(person3, { age: 8, gender: "male" });

console.log(person3);
console.log(person3.id);
console.log(extraInfo);
// console.log(extraInfo.age);
console.log(extraInfo.get(person3));
console.log(extraInfo.get(person3).gender);