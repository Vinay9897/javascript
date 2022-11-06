// functions declaration
function HappyBirthDay() {
    console.log("Happy BirthDay");
}
HappyBirthDay();


//function expersion
const Number = function (x) {
    if (x > 10)
        return 1;
    else
        return 0;
}

// storing data in variables of function
const data = Number(12);
console.log(typeof data);


// Arrow function

const HappyBirthDay1 = () => {
    console.log("Happy BirthDay again");
}

HappyBirthDay1();

// ####################################

// ====== arrow function used with function expersion
// const isEven = (number1, number2) => {
//     if (number1 % 2 === 0)
//         console.log("number1 is even");
//     else
//         console.log("number1 is odd");
//     if (number2 % 2 === 0)
//         console.log("number2 is even");
//     else
//         console.log("number2 is odd");
// }

// isEven(4, 5);

// ####################################


//==== modified  isEven() program

const isEven = number1 => number1 % 2 === 0;
const ans = isEven(6);
console.log(ans);








