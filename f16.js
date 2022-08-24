// function returning function

function fun1() {

    function hello() {
        // console.log("Hello vinay, i am define inside fun1 ");
        return "hello world";
    }
    return hello;
}
const ans = fun1();
console.log(ans());