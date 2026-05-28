// Find the longest word in a string

const str = "The happiest people don't have the best of everything, they just make the best of everything they have.";

const words = str.split(" ");

let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord); // everything