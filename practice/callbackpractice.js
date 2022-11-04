//  This is syncronous callback
// 1 way
function fun1(callback) {
    console.log("This is godd");
    callback();
}
function fun2() {
    console.log("this is not gogd");
}

fun1(fun2);

// 2 way

function fun3(callback) {
    console.log("this is function 3");
    callback();
}


fun3(fun4 = () => console.log("this is function 4"));