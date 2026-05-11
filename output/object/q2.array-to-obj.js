//using reduce method convert array to object

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

let fruitObject = fruits.reduce((obj, fruit) => {
    obj[fruit] = fruit;
    return obj;
}, {});

console.log(fruitObject);