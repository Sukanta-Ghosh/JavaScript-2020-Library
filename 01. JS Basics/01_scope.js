console.log(name); //undefined
var name = "hitesh";

if (true) {
  var firstName = "Sukanta";
  //Note: let will keep the scope inside {} scope
  let lastName = "Ghosh";
}

console.log(firstName); //Sukanta
console.log(lastName); //ReferenceError: lastName is not defined
