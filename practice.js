// array destructuring
// const num = ["a", "b", "c", "d"];
// let [a, b, ...remainingArray] = num;
// console.log(remainingArray);

// object destructuring

// const obj = {
//     name: "vinay",
//     age: 33,
//     color: "brown",
//     height: 268,
// }
//Default changedname
// let { name:   fname, age, ...remainingObj } = obj;
// console.log(fname);
// console.log(remainingObj);

//object inside array

// let num = [
//        { name: "vinay", rollno: 35 },
//        { name: "vinay", rollno: 35 },
//        { name: "vinay", rollno: 35 },
// ]
// console.log(num);
// for (let index of num) {
//        console.log(index.name, index.rollno);
// }


// ===============functions

// function declaration

// function isprime(number) {
//        let flag = 0;
//        for (let x; x < number; x++) {
//               if (number % x == 0) {
//                      flag = 1;
//                      break;
//               }

//        }
//        if (flag === 1)
//               console.log("not prime");
//        else
//               console.log("prime");

// }
// isprime(5);

//================= function expresion

// const isprime = function (number) {
//        let flag = 0;
//        for (let x = 0; x < number; i++) {
//               if (number % x == 0) {
//                      flag = 1;
//                      break;
//               }
//               if (flag == 1)
//                      return "not prime";
//               else
//                      return "prime";
//        }
// }

// console.log(isprime(5));

// ==================arrow function

// const isprime = (number) => {
//        let flag = 0;
//        for (let x = 0; x < number; i++) {
//               if (number % x == 0) {
//                      flag = 1;
//                      break;
//               }
//               if (flag == 1)
//                      return "not prime";
//               else
//                      return "prime";
//        }
// }
// console.log(isprime(6));

