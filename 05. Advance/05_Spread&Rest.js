//Topic: Spread Operator
//Note: Spread Operator convert array into individual values
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA)); // Here ... is Spread Operator

//Topic: Rest Operator
//Note: Rest Operator convert individual values into an array
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Here ... is Rest Operator
function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}
y;
console.log(sumTwo(2, 3, 1, 1, 1));
