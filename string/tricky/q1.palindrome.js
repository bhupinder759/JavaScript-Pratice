// Check String is Palindrome without using built-in methods

const str = "madam";

let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);