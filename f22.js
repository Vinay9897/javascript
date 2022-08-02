//   Find method

const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength(string) {
//     return string.length === 3;
// }
// find the word of length 3 return it
// const ans = myArray.find(string => string.length == 3);
// console.log(ans);


const users = [
    { userId: 1, userName: "vinay" },
    { userId: 2, userName: "shivam" },
    { userId: 3, userName: "priyansh" },
    { userId: 4, userName: "bhanu" },
]

const ans = users.find((user) => (user.userId === 3));
console.log(ans);