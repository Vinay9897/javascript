// access element using array

// simple  array
let navItems = document.querySelectorAll(".nav-item"); // It will give NodeList
for (let i = 0; i < navItems.length; i++) {
    //apply style on each items
    let navItem = navItems[i].style.backgroundColor = "lightgreen";
    navItem = navItems[i].style.color = "yellow";// text color will not yellow because text inside
    // anchor tag
    console.log(navItem);
}


// getElementsByTagName()

let navItem1 = document.getElementsByTagName("a"); // It will give HtmlCollection
console.log(navItem1);

//with this we can also use loops

//we can iterate by using forEach method also but we can't use with Html Collection directly

//First convert the htmlCollection into array

navItem1 = Array.from(navItem1);

navItem1.forEach((navItem) => {
    navItem.style.backgroundColor = "pink";
});


//we can use all 3 type loop in NodeList without any conversion