/* Memorization is an optimization technique that can be
used to reduce time-consuming calculations by saving previous 
input to something called cache and returning the result from it.*/

//Define a nth sum calculation function
let sum = 0;
const nCalc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//Implement memorize function
const memorize = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("Calculating first time");

      let result = nCalc(n);
      cache[n] = result;
      return result;
    }
  };
};

const memo = memorize(nCalc);

console.time();
console.log(memo(5));
console.timeEnd();

console.time();
console.log(memo(5));
console.timeEnd();
