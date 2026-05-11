// Object to Entries

const obj = {
    name: "sahil",
    age: 25,
    city: "delhi"
}

const entries = Object.entries(obj);

console.log(entries); // [["name", "sahil"], ["age", 25], ["city", "delhi"]], kyuki Object.entries method object ke key-value pairs ko ek array of arrays me convert kar deta hai, jisme har inner array me pehla element key hota hai aur dusra element value hota hai, isliye output [["name", "sahil"], ["age", 25], ["city", "delhi"]] hoga

//Entries to Object

const entriesArray = [["name", "sahil"], ["age", 25], ["city", "delhi"]];

const objFromEntries = Object.fromEntries(entriesArray);

console.log(objFromEntries); // { name: "sahil", age: 25, city: "delhi" }, kyuki Object.fromEntries method array of arrays ko ek object me convert kar deta hai, jisme har inner array me pehla element key hota hai aur dusra element value hota hai, isliye output { name: "sahil", age: 25, city: "delhi" } hoga