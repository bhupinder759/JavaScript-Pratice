// Find Missing Number in an Array

const arr = [1, 2, 3, 5];

const n = arr.length + 1; // Total numbers should be 5 (1 to 5)
const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
const actualSum = arr.reduce((acc, val) => acc + val, 0); // Sum of elements in the array

const missingNumber = expectedSum - actualSum;

console.log(missingNumber); // Output: 4