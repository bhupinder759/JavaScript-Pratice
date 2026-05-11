// Memoization (perfomance optimization)

// example
function memoize(fn) {
  const cache = {};

  return function(n) {
    if (cache[n]) return cache[n];

    cache[n] = fn(n);
    return cache[n];
  }
}

const square = memoize(function(n) {
  console.log("Calculating square of " + n);
  return n * n;
});

console.log(square(5)); // Calculating square of 5 \n 25
console.log(square(5)); // 25, kyuki pehle call me square(5) ka result cache me store ho gaya hai, isliye dusre call me cache se result mil jayega aur "Calculating square of 5" print nahi hoga, isliye output sirf 25 hoga