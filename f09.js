//add key and value by using another variable

const key = "email";
const person = {
    name: "Vinay",
    age: 22
}
person["anime"] = "pokemon";
//add key with the name "email" 
person[key] = "vinay.yadav_cs19@gla.ac.in";
// console.log(person);


// loop with objects

//for in loops

for (let key in person) {
    // console.log(key);
    // console.log(person.key); // here we are checking string "key" name key
    //  in whole object(3 keys) that's why 3 undefined
    // console.log(person[key]);

    // template string
    // key-value pair with colon
    console.log(`${key} : ${person[key]}`);
}


// console.log(typeof (Object.keys(person)));
// console.log(Array.isArray(Object.keys(person)));

for (let val of Object.keys(person)) {
    console.log(person[val]);
}