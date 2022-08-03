const user1 = {
    firstName: "vinay",
    age: 8,
    about: function () {
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}
user1.about();

// dont't do this mistake
// const myFunc = user1.about;
// myFunc();

// bind return function
const myFunc = user1.about.bind(user1);
myFunc();
