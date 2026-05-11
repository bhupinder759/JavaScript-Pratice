// output

console.log("8" > "16"); // true
//  (hinglish) Explanation: JavaScript me jab hum string ko compare karte hain to wo unhe lexicographically compare karta hai, yani ki unke characters ke Unicode values ke basis par compare karta hai. "8" ka Unicode value 56 hai aur "1" ka Unicode value 49 hai, isliye "8" > "16" true hoga.

console.log("8" > 16); // false
//  (hinglish) Explanation: Jab hum string "8" ko number 16 ke sath compare karte hain, to JavaScript pehle string "8" ko number me convert karta hai. "8" ko number me convert karne par wo 8 ban jata hai. Ab comparison 8 > 16 hota hai, jo false hoga.

console.log("" > -1); // true
//  (hinglish) Explanation: Jab hum empty string "" ko number -1 ke sath compare karte hain, to JavaScript pehle empty string "" ko number me convert karta hai. Empty string ko number me convert karne par wo 0 ban jata hai. Ab comparison 0 > -1 hota hai, jo true hoga.

console.log("MD" > 16); // true
//  (hinglish) Explanation: Jab hum string "MD" ko number 16 ke sath compare karte hain, to JavaScript pehle string "MD" ko number me convert karta hai. "MD" ko number me convert karne par wo NaN (Not a Number) ban jata hai. Ab comparison NaN > 16 hota hai, jo false hoga. Lekin JavaScript me jab hum NaN ko kisi bhi number ke sath compare karte hain, to wo hamesha false return karta hai. Isliye "MD" > 16 true hoga.