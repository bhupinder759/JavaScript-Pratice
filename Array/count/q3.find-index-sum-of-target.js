// Find the index of array element whose sum with its index equals the target O(n™2)

let arr = [1, 2, 3, 4, 5];
let target = 8;

let map = {}

for(let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if(map[diff] !== undefined) {
        console.log("Indexes are",map[diff], i);
        break;
    }
    map[arr[i]] = i;
}

