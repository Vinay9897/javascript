// random color generator using setInterval function
const body = document.body;
const buttonid = document.querySelector("#btn");
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
    buttonid.textContent = body.style.background;
}, 1000);

buttonid.addEventListener("click", () => {
    clearInterval(intervalId);
    buttonid.textContent = body.style.background;
});
console.log(intervalId);


