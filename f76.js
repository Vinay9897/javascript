// use promise with get the file
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendReqest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        // console.log(typeof xhr);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject(new Error("Something went wrong"));
            }

            xhr.onerror = () => console.log("Something went wrong");
        }
        xhr.send();
    })
}
// promise return here
sendReqest("GET", URL)
    .then(
        (response) => {
            const data = JSON.parse(response);
            console.log(data);
            return data;
        }).then((data) => {
            const id = data[3].id;
            return id;
        }).then((id) => {
            const url = `${URL}/${id}`;
            return sendReqest("GET", url);
        }).then((newResponse) => {
            const data = JSON.parse(newResponse);
            console.log(data);
        })
    .catch(console.log("client side error"));
