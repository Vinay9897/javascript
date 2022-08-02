// some method

const nums = [2, 4, 6, 8, 10];
//kya ek bhi number esa hai jo even hai

const ans = nums.some((num) => num % 2 !== 0);
console.log(ans);