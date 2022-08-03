// function inside object 
//  passing function as a keys value in object

function personInfo() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 = {
    firstName: "Vinay",
    age: 22,
    about: personInfo,
}
const person2 = {
    firstName: "yadu",
    age: 20,
    about: personInfo,
}

person1.about();
person2.about();