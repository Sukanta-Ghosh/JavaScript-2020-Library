/* Ex: */
let greeting = (person) => {
  let name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};
console.log(greeting(null)); //Howdy, stranger

/* Ex: Addition with string coverts number type into string*/
function callAB(a, b) {
  console.log(a + b);
}
callAB(20, "30"); //2030

/* Ex: */
var a = new Number(5);
var b = 5;
if (a == b) {
  console.log("a");
} else {
  console.log("b");
}
//a

/* Ex: TODO: Explanation*/
const str = ["10", "10", "10"];
const num = str.map(parseInt);
console.log(num); //[ 10, NaN, 2 ]

/* Ex: Reference Error */
function call() {
  console.log(name);
  let name = "ram";
}
call(); //ReferenceError: Cannot access 'name' before initialization

/* Ex:
let num = 1;
let num = 2;
console.log(num);   //SyntaxError: Identifier 'num' has already been declared
 */

/* Ex: */
let a = [10, 20];
let b = [20, 30];
let c = [...a, ...b];
console.log(c); //[ 10, 20, 20, 30 ]

/* Ex: */
class Parent {
  sayHello() {
    console.log("Parent");
  }
}

class Child extends Parent {
  sayHello() {
    console.log("Child");
  }
}

const greet = new Child();
greet.sayHello(); //Child
