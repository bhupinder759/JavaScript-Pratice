// Flatten an array with infinite depth

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

let res = nestedArray.flat(Infinity);
console.log(res); // Output: [1, 2, 3, 4, 5, 6, 7], kyuki nestedArray me jo elements hai unko flatten kar diya gaya hai, isliye output [1, 2, 3, 4, 5, 6, 7] hoga

// without mathod flat

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