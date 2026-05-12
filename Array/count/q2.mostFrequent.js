// Find the most frequent element in an array
const arr = [1, 2, 3, 4, 5, 1, 2, 1];

const freq = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

console.log(freq)