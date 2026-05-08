// JSON to String
// String to JSON
// full form : JavaScript Object Notation

// JSON to String
let jsonData = {
    name: "John",
    age: 30,
    city: "New York"
};

let jsonString = JSON.stringify(jsonData);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// String to JSON
let jsonString2 = '{"name":"Jane","age":25,"city":"Los Angeles"}';
let jsonData2 = JSON.parse(jsonString2);
console.log(jsonData2); // Output: { name: 'Jane', age: 25, city: 'Los Angeles' }