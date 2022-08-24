// new keyword


function CreateObject(firstName, lastName, email, age, address) {
    // const user = new createObject();// object in which we store all the data
    //    key      =   value
    this.stName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateObject.prototype.about = function () {
    return `${this.firstName}${this.lastName} is ${this.age} year old and his emailid is${this.email} and address ${this.address}`
};
CreateObject.prototype.is18 = function () {
    return this.age >= 18;
};
const user1 = new CreateObject("vinay", "yadav", " vinay.yadav_cs19@gla.ac.in ", 22, "kuldeep vihar");
const user2 = new CreateObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
const user3 = new CreateObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
console.log(user1, user2, user3);
console.log(user1.about());
console.log(user1.is18());
// console.log(user1.about.prototype);


// for getting all keys 

// for (let key in user1) {
//     console.log(key);
// }

// for getting own properties

for (let key in user1) {
    if (user1.hasOwnProperty()) {
        console.log(key);
    }
}
