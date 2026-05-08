function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6

// (hinglish) : arguments ek array like object hota hai jisme function ke andar pass kiye gaye arguments store hote hai.
// isme length property hoti hai aur hum index ke through bhi access kar sakte hai. lekin ye array nahi hota isliye array ke methods ispe directly use nahi kar sakte.

// (hinglish) : agar hum arrow function me arguments use karne ki koshish karenge to error aayega kyuki arrow function me arguments object nahi hota.
// isliye agar hume arrow function me arguments use karna hai to hume rest parameter ka use karna hoga. rest parameter ke through hum arguments ko array
// ke form me le sakte hai.

// (hinglish) : rest parameter ke through hum arguments ko array ke form me le sakte hai. isme hum ...args likhte hai jisse hum arguments ko array ke
// form me le sakte hai. iske baad hum args ke through arguments ko access kar sakte hai aur array ke methods bhi use kar sakte hai.

function sumWithRest(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

console.log(sumWithRest(1, 2, 3)); // 6

// ager overwrite na karna ho to hum arguments ko kisi variable me store kar sakte hai aur uske baad us variable ko use kar sakte hai.

function sumWithArguments() {
  let total = 0;
  let args = arguments; // arguments ko args variable me store kar diya
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sumWithArguments(1, 2, 3)); // 6

// use strict mode me hume arguments object nahi hota.
"use strict";

function sumStrict() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumStrict(1, 2, 3)); // error: arguments is not defined