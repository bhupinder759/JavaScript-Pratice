// Find the second lowest number in an array

let arr = [5, 2, 9, 1, 5, 6];

function secondLowest(arr) {
    let lowest = Infinity;
    let secondLowest = Infinity;

    for (let num of arr) {
        if (num < lowest) {
            secondLowest = lowest;
            lowest = num;
        } else if (num < secondLowest && num !== lowest) {
            secondLowest = num;
        }
    }

    return secondLowest === Infinity ? null : secondLowest;
}

console.log(secondLowest(arr)); // Output: 2