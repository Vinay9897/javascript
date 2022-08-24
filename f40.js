// create new Object in function using function Object.create()
// prototype
// const userMethods = {
//     about: function () {
//         return `${this.firstName}${this.lastName} is ${this.age} year old and his emailid is${this.email} and address ${this.address}`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// } 
function createObject(firstName, lastName, email, age, address) {
    const user = Object.create(createObject.prototype);// object in which we store all the data
    //    key      =   value
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}
createObject.prototype.about = function () {
    return `${this.firstName}${this.lastName} is ${this.age} year old and his emailid is${this.email} and address ${this.address}`
};
createObject.prototype.is18 = function () {
    return this.age >= 18;
};
const user1 = createObject("vinay", "yadav", " vinay.yadav_cs19@gla.ac.in ", 22, "kuldeep vihar");
const user2 = createObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
const user3 = createObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
console.log(user1, user2, user3);
console.log(user1.about());
console.log(user1.is18());
