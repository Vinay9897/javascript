const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();// XMLHttpRequest is used to interact with server

// console.log(xhr);
// console.log(xhr.readyState); // 0 stop
xhr.open("GET", URL); // 1 opened


// ======================== getting data
// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState);
//     // console.log(xhr);
//     if (xhr.readyState === 4) {
//         const response = xhr.response; // store the json
//         const data = JSON.parse(response); // convert to object
//         console.log(data);
//         console.log(typeof data);
//     }
// }
// xhr.send();
// =========================

//========= onload work equal to line 10 to 20
// onload gives us directly 4 state

// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
//     else
//         console.log("something went wrong");
// }
// xhr.send();

// now we want to extract paticular row id
// let see how to do it

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            // console.log(xhr2.readyState);
            const response2 = xhr2.response;
            const data2 = JSON.parse(response2);
            console.log(data2);
        }
        xhr2.send();
    }
    else {
        console.log("something went wrong");
    }
}
xhr.onerror = () => {
    console.log("Network error");
}
xhr.send();



