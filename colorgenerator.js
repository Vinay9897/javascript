const button = document.querySelector("button");
console.log(button.textContent);
const body = document.body;
const span = document.querySelector("span");

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

button.addEventListener("click", () => {
    const randomNumber = randomColorGenerator();
    body.style.backgroundColor = randomNumber;
    span.textContent = randomNumber;
    console.log(randomNumber);
})


//