// function inside function

const app = () => {
    const addition = (number1, number2) =>
        number1 + number2;

    const mul = (num1, num2) => num1 * num2;

    const hello = () => console.log("Hello Vinay");
    hello();
    console.log(mul(3, 5));
    console.log(addition(3, 5));
}

app();


// rest parameters (...c)

function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(1, 2, 3, 4, 5, 6);

// addAll = (...arr) => {
//     let sum = 0;
//     for (let x of arr) {
//         sum += x;
//     }
//     return sum;
// }
// console.log(addAll(1, 2, 3, 4, 5));