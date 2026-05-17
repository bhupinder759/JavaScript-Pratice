// Longest String in an Array

const arr = ["sahil", "bhupinder", "rahul", "rohit"];

let longest = "";

for (let str of arr) {
    if (str.length > longest.length) {
        longest = str;
    }
}

console.log(longest);