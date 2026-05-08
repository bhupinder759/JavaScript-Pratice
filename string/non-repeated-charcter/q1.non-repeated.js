// first non repeated character aaabbbc = c
let string = "aaabbbbccccddddefffhgggee"

function nonRepeatedCharacter(str) {
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}

nonRepeatedCharacter(string)