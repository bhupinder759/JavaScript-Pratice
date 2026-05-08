// Map vs Filter

const arr = [1, 2, 3, 4, 5];

// Map - returns a new array with the results of calling a provided function on every element in the calling array
const mapResult = arr.map(x => x * 2);
console.log(mapResult); // [2, 4, 6, 8, 10]

// Filter - returns a new array with all elements that pass the test implemented by the provided function
const filterResult = arr.filter(x => x % 2 === 0);
console.log(filterResult); // [2, 4]