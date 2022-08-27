//event Object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//     console.log(this);
// })

//jab bhi kisi bhi element pe event listener add hoga
//or jab browser ko pata chalega ki user ne event perform kia han
// jo hum listen kar rahe han
//--
// browser 2 kaam karta han
//1) callback function hai vo js Engine ko degi
//2) callback function ke sath browser jo event hua hai uski information bhi dega
//browser infomation object ke form mai milegi

const allButtons = document.querySelectorAll(".mybuttons button");

for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        console.log(e.currentTarget);
    });
}
