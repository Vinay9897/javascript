// filter method

// It is used to filter the necessary data from the data.  
const numbers = [1, 3, 2, 6, 4, 8];

const isEven = (number) => {
    return number % 2 === 0;
}

const isOdd = number => {
    return number % 2 != 0;
}

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers);
console.log(oddNumbers);
