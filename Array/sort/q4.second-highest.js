// Find the second highest number in an array

let arr = [5, 2, 9, 1, 5, 6];

function secondHighest(arr) {
    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num !== highest) {
            secondHighest = num;
        }
    }

    return secondHighest === -Infinity ? null : secondHighest;
}

console.log(secondHighest(arr)); // Output: 6