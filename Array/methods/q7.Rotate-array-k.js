// Rotate Array by K times

const arr = [1, 2, 3, 4, 5];
const k = 2;

const rotated = arr.slice(k).concat(arr.slice(0, k));

console.log(rotated); // [2, 3, 4, 5, 1]

// Without using slice and concat

const rotatedWithoutSlice = [];

for (let i = k; i < arr.length; i++) {
    rotatedWithoutSlice.push(arr[i]);
}

for (let i = 0; i < k; i++) {
    rotatedWithoutSlice.push(arr[i]);
}

console.log(rotatedWithoutSlice); // [2, 3, 4, 5, 1]