// ========computed properties

const key1 = "objects1";
const key2 = "objects2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     key1: value1,
//     key2: value2
// }
// console.log(obj); we want keynames : "objects1" and  " objects2"

//=====so we have to compute them

const obj = {
    [key1]: value1,
    [key2]: value2
}

console.log(obj);


//=========== spread operator with array

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2];
// console.log(newArray);
// const newArray = [..."123534"];
// console.log(newArray);

//==============spread operator in object




