// objects inside array

// very useful in real world applications

const users = [
    { userId: 1, firstName: "vinay", gender: "male" },
    { userId: 2, firstName: "shivam", gender: "female" },
    { userId: 3, firstName: "priyansh", gender: "male" },
]

// console.log(users);
// ==============for of loops in array with objects
// for (let user of users) {
//     // console.log(user);  // for taking each object
//     console.log(user.userId, user.firstName); // for taking each object userId
// }


//nested destructuring

// const [user1, user2, user3] = users;
// console.log(user1);


// first we destructure user1 from users then destructure firstName from user1
// const [{ firstName }, user2, user3] = users;
// console.log(firstName);

// for name changing

const [{ firstName: user1firstName, userId }, user2, user3] = users
console.log(user1firstName);
console.log(userId);