//Set (it is iterable)
// store data

//set also have ites own methods
// No index-based access
// order is not guranted
// unique items only (no duplicates allowed)

const numbers = new Set([1, 2, 2, 3, 3, 5, 5, 6]);
// console.log(numbers);

// const numb = new Set();
// numb.add(1);
// numb.add(1);
// numb.add(2);
// numb.add(2);
// numb.add(3);
// numb.add(3);
// numb.add(4);
// numb.add(4);
// numb.add(5);
// numb.add(5);
// console.log(numb);
// if (numb.has(1))
//     console.log("1 is present");
// else
//     console.log("1 is not present");

const unique = new Set(numbers);
console.log(unique);

const data = new Set();
data.add(
    { "1": 'One' },
    { "2": 'two' },

);
console.log(data);










