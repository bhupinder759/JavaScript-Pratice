// Tempral Dead Zone (TDZ) in Array Methods

// TDZ is a behavior in JavaScript where variables declared with let and const cannot be accessed before they are initialized. This can lead to ReferenceError if you try to access them before their declaration.

// example of TDZ in array methods
console.log(arr[0]); // ReferenceError: Cannot access 'arr' before initialization
const arr = [1, 2, 3];

console.log(arr[0]); // 1, kyuki arr array ke first element ko access kar rahe hai, aur uska value 1 hai, isliye output 1 hoga

console.log(arr[3]); // undefined, kyuki arr array me index 3 par koi element nahi hai, isliye output undefined hoga

console.log(arr[-1]); // undefined, kyuki arr array me negative index ka concept nahi hota hai, isliye output undefined hoga

console.log(arr[0][0]); // undefined, kyuki arr[0] me 1 hai, aur 1 ek number hai, isliye usme index 0 par koi element nahi hai, isliye output undefined hoga