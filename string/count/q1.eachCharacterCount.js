// count each character in a string and return an object with the character as the key and the count as the value
let string = "My name is bhupinder and i am praticing to javascript";

let frequency = {}

for(let char of string) {
    if(frequency[char]) {
        frequency[char]++
    } else {
        frequency[char] = 1
    }
}

console.log(frequency)
