console.log("Script start!!!");
const allButtons = document.querySelectorAll(".mybuttons button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        console.log(e.currentTarget.textContent, sum);
    })
})

let outerVar = 0;
for (let i = 0; i < 1000000000; i++) {
    outerVar += i;
}
console.log("the outer variable value", outerVar);
console.log("script end!!!!");

//humare saare buttons webAPI ke pass available honge.
// js engine code run karega
//or webAPI button ki sarri information rakhega
// whenever we click on any button we put the button inside
// callback queue ,from the callback queue  function will
// callback to call stack then execute
// after complete execution of the function we move to next button if requried