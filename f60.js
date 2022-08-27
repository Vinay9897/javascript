const allButtons = document.querySelectorAll(".mybuttons button");


// for (let button of allButtons) {
//     button.addEventListener("click", function (button) {
//         console.dir(this.textContent);
//     })
// }

// for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function () {
//         console.log(this.textContent);
//     })
// }

allButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log(this.textContent);
    })
})

