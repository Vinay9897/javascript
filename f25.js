// splic method
// splice(start ,delete, insert)

const myArray = ['item1', 'item2', 'item3'];


// myArray.splice(0, 1); // delete
// myArray.splice(1, 1, 'inserted item'); // insert
// myArray.splice(0, 2, 'inserted item'); // insert

// myArray.splice(1, 2, "Hello"); // delete and insert both


// store deleted item into another varible

console.log(myArray);
const deletedItems = myArray.splice(1, 2, "InsertedItem");
console.log(myArray);

console.log(deletedItems);