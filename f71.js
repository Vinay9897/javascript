// function returning promises

function pro() {
    const freeze = ['mango', 'water', 'sugar', 'banana', 'grapes'];
    // we promise to drink mangoShake
    return new Promise((resolve, reject) => {
        if (freeze.includes("mango") && freeze.includes("water") && freeze.includes("sugar")) {
            resolve("We drink MangoShake");
        }
        else
            reject("We didn't drink MangoShake");
    })
}

pro().then(
    (resovle_value) => {
        console.log(resovle_value);
    },
    (error) => {
        // reject ki value;
        console.log(error);
    }
)