const URL = "https://jsonplaceholder.typicode.com/posts";
// await is used to wait 
//
async function getPosts() {
    const response = await fetch(URL);
    return await response.json(); // it is returning promise
}
// getPost function get promise
// to get the data we use then
getPosts().then(data => {
    console.log(data);
})