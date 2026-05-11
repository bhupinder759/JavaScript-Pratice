// Check if all elements same type

const arr = [1, 2, 3, 4, "5"];

const allSameType = arr.every(item => typeof item === 'number');

console.log(allSameType); // Output: false, kyuki arr array me 4 number hai aur 1 string hai, isliye sabhi elements same type ke nahi hai, isliye output false hoga