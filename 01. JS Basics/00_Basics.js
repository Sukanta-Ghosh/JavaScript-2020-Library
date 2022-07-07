//typeof()
typeof 1; //number
typeof true; //boolean
typeof "Hello"; //string
typeof function () {}; //function
typeof {}; //object
typeof null; //object
typeof undefined; //undefined
typeof NaN; //number

//Note: Common Type Conversions
//convert to string
foo.toString();
//convert string to integer
Number.parseInt("55"); //55 as a number
//convert string to float
Number.parseFloat("55.99"); //55 as a number

//Values interpret as false
false;
0;
("");
null;
undefined;

//true is 1, the o/p is 6 here.
let adder = true + 5;
