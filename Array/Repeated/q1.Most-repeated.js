// Most Repeated Element in an Array

const arr = [1, 2, 3, 2, 4, 1, 1];

const frequency = {};
let maxCount = 0, result;

for(let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if(frequency[num] > maxCount) {
        maxCount = frequency[num];
        result = num;
    }

}
console.log(result); // 1