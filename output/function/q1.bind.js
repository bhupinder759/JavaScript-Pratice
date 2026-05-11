const number = {
    x: 1,
    y: 2,
    sum() {
        return this.x + this.y;
    }
}

const sum = number.sum;

console.log(sum()); // NaN
// (hinglsih) Resion: sum() function ko call krte time this keyword ka reference number object ki taraf nhi ja rha h isliye this.x and this.y undefined hote h aur undefined + undefined = NaN

// Solution: bind method ka use krke sum function ko number object se bind kr do taki this keyword ka reference number object ki taraf jaye
const boundSum = sum.bind(number);
console.log(boundSum()); // 3