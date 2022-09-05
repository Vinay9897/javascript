// promises
// in our freeze we have these items
const freeze = ['mango', 'water', 'sugar', 'banana', 'grapes'];
// we promise to drink mangoShake
const mangoShakePromise = new Promise((resolve, reject) => {
    if (freeze.includes("mango") && freeze.includes("water") && freeze.includes("sugar")) {
        resolve("We drink MangoShake");
    }
    else
        reject("We didn't drink MangoShake");
})

//produce


//consume

//how to consume

//----------------------resolve fun ki value
// mangoShakePromise.then((resolve_value) => {
//     console.log(resolve_value);
// },
//     //reject func ki value(error)
//     (error) => {
//         console.log(error);
//     }
// );

// we can pass reject function value  in catch also
// like this
// promise have more priority then setTimout function
// because it is microtask
console.log("script start");

setTimeout(() => {
    console.log("Timeout");
})

mangoShakePromise.then((resolve_value) => {
    console.log(resolve_value);
}).catch(((error => {
    console.log(error);
})))


for (let i = 0; i < 50; i++) {
    console.log(Math.random() * 10);
}

console.log("Script End");
