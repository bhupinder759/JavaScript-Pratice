// Reverse a string without using the built-in reverse() method

const str = "Hello World";

let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);