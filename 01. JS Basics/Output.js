console.log("1" - -"1"); //2
console.log(0 == "0"); //true
console.log(0 == []); //true
console.log("0" == []); //false
var LCO = parseInt("123xyz"); //123

var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
console.log(returnedValue);

var foo = function foo() {
  console.log(foo == foo);
};
foo(); //true

//[x, y] = [y, x];  //This will throw error

/*Ex: Adding null & undefined will form NaN as it can’t be defined.
Hence coming to addition of typeof(null + undefined) would generate a
unimaginably number. */
console.log(typeof (null + undefined)); //number
console.log(null + undefined); //NaN

/*Ex: The ‘value’ here is an immediately invoked function expression, 
the delete operator removes a property from an object. So 
if property or key remove from an object it values are also removed. 
Delete operator work on array & object which are non-primitive types. 
But ‘name’ here is a primitive type. So no effect on the value, and it gets returned.
*/
let value = (function (name) {
  delete name;
  return name;
})("LearnCodeOnline.in");
console.log(value); //LearnCodeOnline.in

//+ + “a” Evaluates to NaN
const goBananas = () => "b" + "a" + +"a" + "a";
goBananas(); //baNaNa

//NaN is equal to itself also, hence indexOf() search will fail and return -1.
const nums = [20, "10", NaN, 3];
console.log(nums.indexOf(NaN)); //-1

/*Ex: The target object is returned and assigned to 'newObj'. 
So, 'one' object is only the one which pass their reference to newObj object. 
'newObj' object and 'one' object are pointing to same memory location. 
If anything happens to either of them, changes will reflect to both of them. 
'two' object does not have any impact of changes as 
there is no reference pass to the newObj object. */
let one = { first: "Java" };
let two = { last: "Script" };
let newObj = Object.assign(one, two);
newObj["first"] = "Node";
newObj["last"] = "React";
console.log(one["first"]); //Node
console.log(one["last"]); //React

/*Ex: The addition of multiple arrays using + operator converts array 
to string. First we are adding two array as [] + [] = ‘’ 
Which gives us an empty string as nothing is inside the array which then coverts 
to string. Now, in ‘str’ variable first we use split method which covert a string 
to array by breaking into multiple element based on separator passed to it. 
So your, ‘str’ variable look like something: str.split() = [‘L’, ‘C’, ‘O’] that 
gets added with remaining statement. ‘’ + ‘’ + ‘L,C,O’ => ‘L,C,O’
*/
let arr = [];
let str = "LCO";
let result = arr + arr + str.split("");
console.log(result); //‘L,C,O’

/*Ex: Arrow functions are not suited to be used as methods because these 
function do not have their own ‘this’. Hence in this example, the ‘this’ inside 
arrow method is referring to ‘window’ object. */
var title = "Learn Code Online";
var obj = {
  title: "I write code",
  testOne: () => {
    console.log(this.title);
  },
  testTwo: function () {
    console.log(this.title);
  },
};
obj.testOne(); //Learn Code Online
obj.testTwo(); //I write code

/* Ex: The variables declared with ‘let’ have block level {} scope, 
hence in testOne, it will print 100. In testTwo, the variable ‘a’ is already 
declared inside the block {} using var keyword, hence the error. */
function testOne() {
  var a = 100;
  {
    let a = 200;
  }
  console.log(a);
}
function testTwo() {
  {
    var a = 100;
    let a = 200;
  }
  console.log(a);
}
testOne(); //100
testTwo(); //Uncaught SyntaxError

//Doubt:
/* Ex: The ‘this’ inside a function always refers to the object that is the 
owner of the function. The setTimeout function executes in context of the window 
object, hence this.name inside setTimeout will refer to window.name that has 
value ‘Code Online’.*/
var name = "Code Online";
var obj = {
  name: "Learn",
  showName: function () {
    console.log(this.name); //Learn
    setTimeout(function () {
      console.log(this.name); //undefined
    }, 3000);
  },
};
obj.showName();

/* Ex: The variables are initially of string data type. The syntax console.log(+a); 
will convert them into number. Hence the result is 20 + 20 = 40.*/
let a1 = "20";
let b1 = "20";
console.log(+a1 + +b1); //40

/* Ex: It is because of hoisting. The variables declared inside a function are hoisted to the top. 
Hence, variable ‘a’ declared inside the test function is available in the 
first console statement. But its value is not defined yet, hence, it is undefined.*/
var a = 10;
function test() {
  console.log(a);
  var a = 20;
  console.log(a);
}
test(); //undefined 20

/* Ex: During runtime, the ‘test’ variable is assigned an anonymous function which 
overrides the named function test. That is why it prints 10. It will print 20, 
if you call function test right at the top, case named functions are hoisted.*/
var test = function () {
  console.log(10);
};
function test() {
  console.log(20);
}
test(); //10

/* Ex:   The arrays are mutable objects in JavaScript. Hence, 
we can change a part of its value. However, title[0] in itself is a string 
and is immutable. When we try to change a part of it, like we tried with 
title[1][0] = “C”; it will be silently ignored.*/
var title = ["Learn", "Learn"];
title[0] = "Code";
title[1][0] = "C";
console.log(title); //[“Code”, “Learn”]

/* Ex: The ‘name’ is declared and initialized to ‘LCO’. The function enrollMe() is 
called and it has a ‘if’ check where arrays are objects and truthy value, this 
condition evaluates to false with not operator. The ‘name’ hoisted to the function’s 
scope remains within the condition. The console log will catch the ‘name’ hoisted 
within the function’s scope. As it wasn’t explicitly initialized, the runtime 
initialized the hoisted variable to undefined.*/
var name = "LCO";
function enrollMe() {
  if (![]) {
    var name = "Hitesh";
  }
  console.log("I am", name);
}
enrollMe(); //I am undefined

/* Ex: The value of diameter is a regular function, whereas the value of perimeter 
is an arrow function. Using arrow functions, the ‘this’ keyword refers to its current 
surrounding scope, unlike regular functions. This means that when we call perimeter, 
it doesn’t refer to the shape object, but to its surrounding scope (window for example). 
There is no value radius on that object, which returns undefined.*/
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN

/* Ex: The variable ‘b’ here is an anonymous function that is taken from object ‘a’.
Hence first it evaluates to false. Cloning an object would also bring in the prototype 
values. Hence second it evaluates to true.*/
const a = new Object().constructor;
const b = new a.__proto__.constructor();
console.log(a == b); //false
console.log(typeof a.prototype == typeof b.prototype); //true

/* Ex: String localeCompare() */
var str1 = new String("This is string");
var index = str1.localeCompare("utiful string");
console.log("Result :" + index);
