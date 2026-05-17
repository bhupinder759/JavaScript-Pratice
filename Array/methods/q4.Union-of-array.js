// Union of two arrays

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const union = [...new Set([...arr1, ...arr2])];

console.log(union); // Output: [1, 2, 3, 4, 5]

// Without using Set for loop

const unionWithoutSet = [];

for (let num of arr1) {
    if (!unionWithoutSet.includes(num)) {
        unionWithoutSet.push(num);
    }
}

for (let num of arr2) {
    if (!unionWithoutSet.includes(num)) {
        unionWithoutSet.push(num);
    }
}

console.log(unionWithoutSet); // Output: [1, 2, 3, 4, 5]