/* Problem Statement*/
function addition(a, b, c) {
  return a + b + c;
}

let res = addition(3, 4, 5);
console.log(res);

//Implementing Currying
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Before Currying:");
let dummyRes = add(3);
let dummyRes1 = dummyRes(4);
console.log(dummyRes1(5));

console.log("After Currying:");
let finalRes = add(2)(3)(4);
console.log(finalRes);

//Real Project Usage
const userObj = {
  name: "Sukanta",
  age: 25,
};

function userInfo(obj) {
  return function (userDetail) {
    return obj[userDetail];
  };
}

let user = userInfo(userObj)("name");
console.log(user);

//Infinite Currying
//Function Implementation
function addInfinite(a) {
  return function (b) {
    if (b) return addInfinite(a + b);
    return a;
  };
}

console.log("Infinite Currying:");
console.log(addInfinite(2)(3)(5)(9)());
