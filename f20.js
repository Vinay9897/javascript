// reduce method

const numbers = [1, 2, 3, 4, 5];

// let understand reduce method by the example of addition of array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);

/*
        accumulator  currentValue  return
        1               2           3
        3               3           6
        

*/