//Note: Calling a function: namstey()
//Note: Reference a Function: namstey
function namstey() {
  return "Hello in India";
}

var greetings = namstey();

console.log(greetings); //Hello in India
console.log(namstey()); //Hello in India

//Topic: Self Executing Annonymus Function(IFEE)
//This function call itself after its declaration, no need to call
(function () {
  console.log("I say hello");
  console.log("I again say Hello");
})();
