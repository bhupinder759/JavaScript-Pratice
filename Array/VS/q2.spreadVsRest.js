// Spread Operator vs Rest Parameters

// Spread Operator: Expands an iterable (like an array) into individual elements
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

// Rest Parameters: Collects multiple elements into an array
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Example of using spread operator to combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]

// Example of using rest parameters to handle variable number of arguments
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]