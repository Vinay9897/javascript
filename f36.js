/* in arrow function 
"this" keyword doesn't point
to object , it point of one level 
up object it mean object of object
*/

const user1 = {
    name: "vinay",
    age: 22,
    about: function () {
        console.log(this.name, this.age);
    }
}
//both function are same
const user2 = {
    name: "vinay",
    age: 22,
    about() {
        console.log(this.name, this.age);
    }
}


user1.about();
user2.about(); 