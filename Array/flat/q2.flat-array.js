// Flat array of nested arrays

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(arr) {
    let result = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7], kyuki nestedArray me jo elements hai unko flatten kar diya gaya hai, isliye output [1, 2, 3, 4, 5, 6, 7] hoga