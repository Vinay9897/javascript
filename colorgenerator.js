const button = document.querySelector("button");
console.log(button.textContent);
const body = document.body;
const h1 = document.querySelector("h1");

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
    h1.innerHTML = "Color :" + randomNumber;
    console.log(randomNumber);
})


//