// Remove Duplicates from an Array without using built-in methods

const arr = [1, 2, 3, 4, 2, 3, 5];

const uniqueArr = [];

for(let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for(let j = 0; j < uniqueArr.length; j++) {
        if(arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr); // [1, 2, 3, 4, 5], kyuki arr array me 1, 2, 3, 4, 5 element pehli baar repeat nahi ho raha hai, isliye output [1, 2, 3, 4, 5] hoga

// Second method
const arr2 = [1, 2, 3, 4, 2, 3, 5];

const uniqueArr2 = [];

for (let n of arr2) {
    if (!uniqueArr2.includes(n)) {
        uniqueArr2.push(n);
    }
}

console.log(uniqueArr2); // [1, 2, 3, 4, 5], kyuki arr2 array me 1, 2, 3, 4, 5 element pehli baar repeat nahi ho raha hai, isliye output [1, 2, 3, 4, 5] hoga