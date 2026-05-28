// Find the maximum number in an array without using the built-in Math.max() method

let arr = [3, 7, 2, 9, 5];

let maxNum = arr[0]; // Assume the first element is the maximum

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i]; // Update maxNum if a larger number is found
    }
}

console.log(maxNum); // Output: 9, kyuki arr me jo largest number hai wo 9 hai, isliye output 9 hoga