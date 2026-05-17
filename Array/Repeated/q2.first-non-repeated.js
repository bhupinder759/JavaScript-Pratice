// First non repeated element in an array

const arr = [1, 2, 3, 4, 2, 1];

let firstNonRepeated = null;

for(let i = 0; i < arr.length; i++) {
    let isRepeated = false;
    for(let j = 0; j < arr.length; j++) {
        if(i !== j && arr[i] === arr[j]) {
            isRepeated = true;
            break;
        }
    }
    if(!isRepeated) {
        firstNonRepeated = arr[i];
        break;
    }
}

console.log(firstNonRepeated); // 3, kyuki arr array me 3 element pehli baar repeat nahi ho raha hai, isliye output 3 hoga