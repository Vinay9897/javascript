// call apply bind

const user1 = {
    name: "vinay",
    age: 22,
    about: function (hobby, favMusician) {
        console.log(this.name, this.age);
        console.log(this.name, this.age, hobby, favMusician);

        // we cannot use "this" keyword with about parameters(hobby and favMusician)
        // because they are not declare inside the object 
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

// user1.about();
user1.about.call(user2); // for user2
user1.about.call(user1, "reading", "moazrt");


// In the call() function we pass that object(e.g user2) , for which we are calling method (e.g: about())
// we have to pass the "object name " user2  in call() method

//apply()
// apply() is same as call(), only the difference
// is that extra argument pass in list(array)
// ex: user1.about.apply(user1, ["reading", "moazrt"]);


// bind() do the same work but return output in function

// const func = about.bind(user2);
// const func1 = about.bind(user1);