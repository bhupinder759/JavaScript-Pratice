// Array object -> group by a property

const arr = [
    { name: "sahil", city: "delhi" },
    { name: "bhupinder", city: "delhi" },
    { name: "rahul", city: "mumbai" },
    { name: "rohit", city: "mumbai" },
]

const grouped = arr.reduce((acc,curr) => {
    const key = curr.city;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
}, {});

console.log(grouped);