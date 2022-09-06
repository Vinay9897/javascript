//fetch

const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch return promises 
// promises return response
fetch(URL).then(
    (response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(console.log("error"));