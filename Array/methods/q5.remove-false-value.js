// Remove False Values from Array

const arr = [0, 1, false, 2, '', 3, null, 4, undefined, 5];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr); // Output: [1, 2, 3, 4, 5]

// Without using filter method

const filteredArrWithoutFilter = [];

for (let item of arr) {
    if (item) {
        filteredArrWithoutFilter.push(item);
    }
}

console.log(filteredArrWithoutFilter); // Output: [1, 2, 3, 4, 5]