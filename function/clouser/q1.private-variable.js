// how to create a private variable without using class
// using clouser

function createCounter(name) {
    let secret = "MyPass123"; // private variable

    return {
        getName() {
            return name; // accessing private variable
        },
        mySecret() {
            return secret; // accessing private variable
        }
    }
}

const counter1 = createCounter("Counter 1");

console.log(counter1.getName()); // Output: Counter 1
console.log(counter1.mySecret()); // Output: MyPass123
console.log(counter1.secret); // Output: undefined, kyuki secret variable private hai aur uska reference createCounter function ke scope me hi hai, isliye counter1 object se secret variable ko access nahi kiya ja sakta hai, isliye output undefined hoga