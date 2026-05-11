const number = [1,2,3,4,5];

// find max number in the array using without using ...spread operator 
function findMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(findMax(number)); // 5

// (hinglish) Explanation: Math.max function ko call krte time this keyword ka reference null 
// hoga aur arr array ke elements ko arguments ke roop me pass kiya jayega. apply method ka use krke hum array ke elements ko individual 
// arguments ke roop me pass kar sakte h aur Math.max function unme se maximum value return karega.

// without using apply method
function findMaxWithoutApply(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxWithoutApply(number)); // 5