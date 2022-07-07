/* Resources: 
MDN docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
Namanste JS: https://www.youtube.com/watch?v=Fnlnw8uY6jo&t=198s&ab_channel=AkshaySaini
Technical Suneja: https://www.youtube.com/watch?v=nCNB-_i1yNY&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im&index=9&ab_channel=TechnicalSuneja
*/

getName();

console.log(a);

var a = 5;

function getName() {
  console.log("getName() function");
}

testArrowFn(); //Uncaught ReferenceError: Cannot access 'testArrowFn' before initialization
getAnything(); //Uncaught ReferenceError: getAnything is not defined
testFunction(); //Uncaught ReferenceError: Cannot access 'testFunction' before initialization

const testFunction = function getAnything() {
  console.log("getAnything() function");
};

const testArrowFn = () => {
  console.log("getAnArrow() function");
};
