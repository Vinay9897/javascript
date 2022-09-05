// promise.resolve
// promise chaining

const myPromise = Promise.resolve(5);
Promise.resolve(5).then(value => {
    console.log(value);
})


function myPromis() {
    return new Promise((resolve, reject) => {
        resolve("vinay");
    })
}


// then method hamesha promise return karta han
myPromis().then((resolve_value) => {
    // here we are returning Promise.resolve(resolve_value);
    // not resolve_value
    console.log(resolve_value);
    resolve_value += "hooka";
    return resolve_value;
}).then((resolve_value) => {
    console.log(resolve_value);
    resolve_value += "baaz";
    return resolve_value;
}).then((resolve_value) => {
    console.log(resolve_value);
    return resolve_value;
})
