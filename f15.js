// call back functions
// At the completion of one function execution another function execution start


function fun2(name) {
    console.log(`my name is ${name}`);
    console.log("inside function fun1()");
}

function fun1(callback) {
    console.log("Hello", "this is callback function");
    callback("\"vinay\"");
}
fun1(fun2);