//Function + Object
//Function. + property + new object

function Foo() {
    this.value = 100;
}

Foo.prototype.value = 200;
Foo.value = 300;

console.log(Foo.value); // 300, kyuki Foo ek function hai aur uske upar value property hai jiska value 300 hai, isliye output 300 hoga

const f = new Foo();
console.log(f.value); // 100, kyuki jab hum new keyword ke sath Foo function ko call karte hai to ek naya object create hota hai jiska prototype Foo.prototype hota hai, aur us object me value property set hoti hai jiska value 100 hota hai, isliye output 100 hoga