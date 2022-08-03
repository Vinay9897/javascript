// call apply bind

const user1 = {
    name: "vinay",
    age: 22,
    about: function () {
        console.log(this.name, this.age);
    }
}

const user2 = {
    name: "yadu",
    age: 20
}

// we want use the function about for user2 without creating
// a function in user2 

// let's see how to do this

// with the help of call() method

user1.about();
user1.about.call(user2); // for user2
// we have to pass the "object name " user2  in call() method