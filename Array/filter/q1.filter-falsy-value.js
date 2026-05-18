// Filter out falsy values from an array

let arr = [0, 1, false, 2, '', 3, null, undefined, NaN];

function filterFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log(filterFalsyValues(arr)); // Output: [1, 2, 3]