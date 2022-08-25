// access element using array

// simple  array
const navItems = document.querySelectorAll(".nav-item");
for (let i = 0; i < navItems.length; i++) {
    //apply style on each items
    let navItem = navItems[i].style.backgroundColor = "lightgreen";
    navItem = navItems[i].style.color = "yellow";// text color will not yellow because text inside
    // anchor tag
    console.log(navItem);
}


// getElementsByTagName()

const navItem1 = document.getElementsByTagName("a"); // It will give HtmlCollection
console.log(navItem1);

//with this we can also use loops