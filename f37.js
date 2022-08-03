//function that create object
// 2) key value pair object ko return karega

const userMethods = {
    about: function () {
        return `${this.firstName} ${lastName} is ${this.age} year old and his emailid is${email} and address ${address}`
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createObject(firstName, lastName, email, age, address) {
    const user = {} // object in which we store all the data
    //    key      =   value
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
const user2 = createObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
const user3 = createObject("vinay", "yadav", "vinay.yadav_cs19@gla.ac.in", 22, "kuldeep vihar");
console.log(user1, user2, user3);
