// Convert MAP to Object withou using loop

const map = new Map([
    ["name", "sahil"],
    ["age", 25],
    ["city", "delhi"]
]);

const obj = Object.fromEntries(map);

console.log(obj); // { name: "sahil", age: 25, city: "delhi" }

//