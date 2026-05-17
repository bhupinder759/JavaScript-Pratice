// Check Array is Sorted or Not

const arr1 = [1, 2, 3, 4, 5];

let isSorted = true;

for(let i = 0; i < arr1.length - 1; i++) {
    if(arr1[i] > arr1[i + 1]) {
        isSorted = false;
        break;
    }
}

console.log(isSorted); // true, kyuki arr1 array me elements ascending order me hai, isliye output true hoga