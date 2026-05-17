// Manual Grouping of Array Elements

const arr = [
    { name: "sahil", age: 25 },
    { name: "bhupinder", age: 30 },
    { name: "rahul", age: 25 },
    { name: "rohit", age: 30 },
]

const group = {};

for (let u of arr) {
    if (!group[u.age]) {
        group[u.age] = [];
    }
    group[u.age].push(u);
}

console.log(group);