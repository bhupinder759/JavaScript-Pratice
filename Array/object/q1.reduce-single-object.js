//Array of object -> single object

const arr = [
    { name: "sahil", age: 25 },
    { name: "bhupinder", age: 30 },
]

let obj = arr.reduce((acc, curr) => {
    acc[curr.name] = curr.age;
    return acc;
}, {});

console.log(obj);

//