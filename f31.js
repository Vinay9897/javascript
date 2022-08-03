// function inside object
//  those function inside object we called them methods

const person = {
    firstName: "vinay",
    age: 8,
    about: function () { console.log(`I am ${this.firstName} and my age is ${this.age}`) }
}

person.about();

//  we can say "this keyword" is object which are
//  calling the function

// we can see below example

const person1 = {
    firstName: "vinay",
    age: 8,
    about: function () { console.log(this) }
}

person1.about();

