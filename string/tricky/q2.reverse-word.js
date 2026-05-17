// Reverse String Word without using built-in methods

const str = "Hello World js";

let reversedStr = "";
let word = str.split(" ");

for (let i = word.length -1; i >= 0; i--) {
    reversedStr += word[i] + " ";
}

console.log(reversedStr.trim());