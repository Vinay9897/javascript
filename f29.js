// clone using Object.assign

//memory

const obj = {
    key1: "value1",
    key2: "value2"
}

// one way of cloning
// const obj2 = { ...obj };
// obj.key3 = "value3";

// second way of cloning
// const obj2 = Object.assign({}, obj);
// obj.key4 = "value4";


// console.log(obj);
// console.log(obj2);




// like we can't clone anthoer object because they
// they are pointing a same memory
// so if update the one object another will automatically change

// const obj2 = obj;
// console.log(obj);
// console.log(obj2);