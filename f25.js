// splic method
// start ,delete, insert

const myArray = ['item1', 'item2', 'item3'];


// myArray.splice(0, 1); // delete
// myArray.splice(1, 0, 'inserted item'); // insert
// myArray.splice(1, 2, "Hello"); // delete and insert both


// store deleted item into another varible

const deletedItems = myArray.splice(0, 1, "InsertedItem");

console.log(myArray);
console.log(deletedItems);