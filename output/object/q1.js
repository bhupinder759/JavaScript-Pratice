const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// (hinglish) Resion: a[b] aur a[c] ek object hoti hai jisme key b aur c hoti hai. iske through 123 aur 456 store hote hai. 
// lekin jab a[b] ko access krte hai to wo a[c] ke value ko return krta hai kyuki dono key same hoti hai. isliye output 456 aata hai.

// Visual Flow
// a[b] = 123

// ↓

// a["[object Object]"] = 123

// ↓

// a[c] = 456

// ↓

// a["[object Object]"] = 456

// ↓

// Old value replace 