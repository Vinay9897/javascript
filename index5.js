const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//capturing  : start from most outsided function
// only on those function which are "true"
// child.addEventListener("click", () => {
//     console.log("Capture  child!!!");
// }, true)
// parent.addEventListener("click", () => {
//     console.log("Capture  parent!!!");
// }, true)
// grandparent.addEventListener("click", () => {
//     console.log("Capture on grandparent!!!!");
// }, true)
// document.body.addEventListener("click", () => {
//     console.log("Capture on body");
// }, true)

//bubbling
//bubbling or event propogation : we call child function and parent is call also(with child function)
// child.addEventListener("click", () => {
//     console.log("Bubbling  child!!!");
// })
// parent.addEventListener("click", () => {
//     console.log("Bubbling  parent!!!");
// })
// grandparent.addEventListener("click", () => {
//     console.log("Bubbling grandparent!!!!");
// })
// document.body.addEventListener("click", () => {
//     console.log("Bubbling body");
// })

// Event Delegation
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
    // console.log(e.target.textContent);
})

