//  promise && setTimeout

// I want to resolve / reject promise after 1 seconds

function myPromise() {
    return new Promise((resolve, reject) => {
        // const value = true;
        const value = false;
        setTimeout(
            () => {
                if (value) {
                    resolve();
                }
                else
                    reject();
            }
        )
    })
}

myPromise().then(
    () => {
        console.log("resolve");
    }
).catch(() => {
    console.log("rejected");
})