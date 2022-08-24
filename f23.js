//every method

const numbers = [2, 4, 6, 8];


//every() method return boolean answers 
// if all the value satisfy the condition then only return "true" 
// else false
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);


const userCart = [
    { productId: 1, product: "a", price: 1000 },
    { productId: 2, product: "b", price: 2000 },
    { productId: 3, product: "c", price: 3000 },
]

const ans1 = userCart.every((user) => user.price > 300);
console.log(ans1);