const str =
  "The happiest people don't have the best of everything, they just make the best of everything they have.";

const vowvels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowvels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str));

function singleVowlesCount(str) {
  let count = {};
  for (let char of str.toLowerCase()) {
    if (vowvels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}

console.log(singleVowlesCount(str));