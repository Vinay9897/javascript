const number = [93, 53, 32, 65, 87, 98];
number.sort((a, b) => a - b
);
console.log(number);

// a-b ----> negative -----> a,b  else b,a
// b-a ---->positive ------> b,a  else a,b