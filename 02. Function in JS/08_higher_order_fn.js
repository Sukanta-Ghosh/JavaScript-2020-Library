//Namaste JS

const radius = [3, 1, 2, 4];

//Used as Callback Function
const area = function (radius) {
  return Math.PI * radius * radius;
};

//Used as Callback Function
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

//Used as Callback Function
const diameter = function (radius) {
  return 2 * radius;
};

//This is called Higher Order Function
const calculateLogic = function (radius, logic) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(radius[i]));
  }
};

console.log(calculateLogic(radius, area));
//or
console.log(radius.map(area));

console.log(calculateLogic(radius, circumference));
console.log(calculateLogic(radius, diameter));
