//Topic: Function Statement/Declaration
function a() {
  console.log("a is called");
}
a(); //a is called

//Topic: Function Expression
var b = function () {
  console.log("b is called");
};
b(); //b is called

//Anonymus Function: function{}

//Topic: Named Function Expression
var c = function xyz() {
  console.log("c is called");
};
c(); //c is called
//xyz(); //Will give error, not valid code

/* Topic: First Class Function/Citizen: 
Ability to use function as value/argument and 
can be return from a function is called First Class Functions.  
 */
var d = function (param) {
  console.log("First Class Function Log: ", param);
  return function () {};
};
d(function () {
  var i = 0;
}); //[Function (anonymous)]

//Topic: Difference b/w parameters and arguments: It depends upon where it is used
var argument = "Log Argument";
var p = function (parameter) {
  console.log(parameter);
};
p(argument); //Log Argument
