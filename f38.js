// suppose we hava a obj1 
const obj1 = {
    key1: "value1",
    key2: "value2",
}
// we have another obj2
// const obj2 = {
//     key3: "value3",
// }

// now we hava to search key1
//in obj2 if we got that's ok
// if not got search in obj1


// for this we have a function 
// Object.create()

const obj2 = Object.create(obj1); // this will create a empty object{}
obj2.key3 = "value3";
//1st check in obj2 , if not found check in __proto__  or  ([[prototype]])
console.log(obj2);


// __proto__

//official ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]


// prototype



// 


