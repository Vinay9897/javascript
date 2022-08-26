// this keyword

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    console.log("You click me");
    console.log(this);
})