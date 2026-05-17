// Convert Array to object by id

const arr = [
    { id: 1, name: "sahil" },
    { id: 2, name: "bhupinder" },
    { id: 3, name: "rahul" },
    { id: 4, name: "rohit" },
]

let obj = {};

for (let u of arr) {
    obj[u.id] = u;
}

console.log(obj);