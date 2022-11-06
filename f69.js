// callbacks , callback hell ,pyramid of doom
// asyncronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//================================

// setTimeout(() => {
// heading1.textContent = "Heading 1";
// }, 1000);

//  heading 2 after 1 second gap

// setTimeout(() => {
//     heading2.textContent = "Heading 2";
// }, 2000);

// so for next heading3 we need to write time 3000
// this is not efficeint way

// we another way that is callback hell

//==================== callback hell

setTimeout(() => {
    heading1.textContent = "Heading 1";
    setTimeout(() => {
        heading2.textContent = "Heading 2";
        setTimeout(() => {
            heading3.textContent = "Heading 3";
            setTimeout(() => {
                heading4.textContent = "Heading 4";
            }, 2000);
        }, 2000);
    }, 2000);
}, 1000);
// this is also not efficient way

// ===========pyramid of doom
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
};

changeText(heading1, "one", "yellow", 1000, () => {
    changeText(heading2, "two", "pink", 2000, () => {
        changeText(heading3, "three", "green", 1000, () => {
            changeText(heading4, "four", "blue", 1000, () => {
                changeText(heading5, "four", "blue", 1000, () => {

                }, () => {
                    console.log("Heading doesn't exist")
                })
            }, () => {
                console.log("Heading doesn't exist")
            })
        }, () => { console.log("Heading doesn't exist") })
    }, () => { console.log("Heading doesn't exist") })
}, () => { console.log("Heading doesn't exist"); });


