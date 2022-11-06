//  Optional Chaining

const obj = {
    id: 1,
    age: 23,
    name: "vinay",
    hobbie: { anime: "Tokyo Ghoul" },
}
// this is chaining
// console.log(obj.hobbie.anime);.

// This is optional Chaining -- in which even data is not 
// present in object still doesn't give error
console.log(obj?.hobbie?.anime);
