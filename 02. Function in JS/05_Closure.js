//Refer also scopeChaining.js in Function in JS
//Example: 1 on closure
function init() {
  var firstName = "hitesh";
  console.log("I am init");

  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName;
}

var value = init();

value(); //I am init //hitesh

//Example: 2 on closure
function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

//One way of calling this function
var add5 = doAddition(4);
console.log(add5(5)); //9

//Recomended way of calling doAddition() function
console.log(doAddition(5)(5)); //10
//doAddition()()() //curring
