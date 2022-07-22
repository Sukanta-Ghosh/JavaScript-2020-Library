/* Call, Apply & Bind */

let user_1 = {
  name: "Sukanta",
  age: 25,
  designation: "SDE1",
  printDetails: function () {
    console.log(`Name: ${this.name} Age: ${this.age} Des: ${this.designation}`);
  },
};

let formatDetails = function () {
  console.log(`${this.name},${this.age},${this.designation}`);
};

//Arguments can pass individually
let printDetailsArgs = function (state) {
  console.log(`${state},${this.name},${this.age},${this.designation}`);
};

user_1.printDetails();

let user_2 = {
  name: "Anshu",
  age: 24,
  designation: "Network",
};

/** Call
The call() method calls a function with a given this value and
arguments provided.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
*/
user_1.printDetails.call(user_2);

console.log("Method outside Object:");
formatDetails.call(user_1);

console.log("call() method with args:");
printDetailsArgs.call(user_1, "Kolkata");

/** Apply
 * The apply() method calls a function with a given this value,
 * and arguments provided as an array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
console.log("apply() method with array args:");
printDetailsArgs.call(user_1, ["Kolkata", "Banglore"]);

/** Bind: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * The bind() method creates a new function that, when called,
 * has its this keyword set to the provided value, with a given sequence of
 * arguments preceding any provided when the new function is called.
 */
let newFun = printDetailsArgs.bind(user_1, "Kolkata");
console.log("bind() method with args:");
newFun();
