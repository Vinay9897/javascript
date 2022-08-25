//innerHTML : we can get the innerHTML 

const headline = document.querySelector(".headline");
//change the innerHTML
headline.innerHTML = "Inner Headline has changed";
headline.innerHTML += "<button class=\"btn\"> Learn More</button>";
console.log(headline.innerHTML);