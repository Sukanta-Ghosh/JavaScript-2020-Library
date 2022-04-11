var name = "Hitesh";

console.log(name); //Hitesh

//In scope chaining: Any var will find values from higher scope
//Lexical Scoping
//Example: 1
function sayName() {
  var name = "Mr. H";
  console.log("Inside sayName:", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. HC";
    console.log("Inside sayNameTwo:", name);
  }
}

sayName(); //Inside sayName: Mr. H  //Inside sayNameTwo: Mr. HC

//Example: 2
function init() {
  var firstName = "hitesh";
  function sayFirstName() {
    console.log(firstName);
  }
  sayFirstName();
}

init(); //hitesh
