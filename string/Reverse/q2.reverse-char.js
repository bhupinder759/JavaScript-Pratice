// Reverse only characters in a string, keeping the positions
const str = "my name bhupinder";

let result = "";
let word = "";

for (let i = 0; i <= str.length; i++) {
  if (str[i] !== " " && i < str.length) {
    word = str[i] + word; // reverse word
  } else {
    result += word + " ";
    word = "";
  }
}

console.log(result.trim()); // ym eman rednipuhb