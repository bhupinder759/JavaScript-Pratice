const fruits = ['apple', 'banana', 'orange', 'grape'];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count); // { apple: 1, banana: 1, orange: 1, grape: 1

// (acc[curr] || 0) + 1; meanong (hinglish) : agar acc[curr] exist krta h to uska value le lo warna 0 le lo aur usme 1 add kr do