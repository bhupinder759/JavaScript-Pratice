const arr = [1,2]

let str = "hello" // ager ye line likh to es liye error nhai ata kunki js me Automatic Semicolon Insertion (ASI) hota hai aur js is line ke end me semicolon add kar deta hai, isliye arr variable ko access karne se pehle str variable ko initialize kar diya jata hai aur error nahi aata nhi to js const arr = [1,2][arr[0], arr[1]] = [arr[1], arr[0]] padh leta hai 

[arr[0], arr[1]] = [arr[1], arr[0]]

console.log(arr) // Cannot access 'arr' before initialization