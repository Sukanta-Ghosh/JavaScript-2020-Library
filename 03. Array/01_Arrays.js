//Array declarations
var superHero = ["Iron Man", "Thor", "Captain America"];
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//Topic: Push & Pop
//Note: Push: At the end of the array
superHero.push("Gamora");
//Output: [‘Iron Man’ , ‘Thor’, ‘Captain America’ , ‘Gamora’]

//Note: Pop - Remove the last item from the array
let element = superHero.pop(); // Gamora
//Output: [‘Iron Man’ , ‘Thor’, ‘Captain America’]

//Topic: Shift & Unshift
//Note: Unshift: Add to the front of an Array
superHero.unshift("Spider Man");
//Output: ["Spider Man", ‘Iron Man’ , ‘Thor’, ‘Captain America’]

//Note: Shift: Remove the first item from the array. Shift() return the removed element
let element2 = superHero.shift(); //Spider Man
//Output: [‘Iron Man’ , ‘Thor’, ‘Captain America’]

//Create array of character from string
console.log(Array.from("hitesh")); //[ 'h', 'i', 't', 'e', 's', 'h' ]

//Topic: Array Manipilation
var isEven = (element) => {
  //   if (element % 2 === 0) {
  //     return true;
  //   }
  //   return false;

  return element % 2 === 0;
};
var result_0 = [2, 3, 6, 8].every(isEven);

var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
console.log("Even result: ", result); //false

// var testArray = [2, 4, 6, 3];
// testArray.fill("empty");
// console.log("testArray after fill: ", testArray);

//Note: filter():
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
const result_2nd = myNumber.filter((num) => num > 55);
console.log("filter(): ", result_2nd);

//Topic: Slice & Splice(filter array)
//Diff b/w slice & splice: https://www.geeksforgeeks.org/what-is-the-difference-between-array-slice-and-array-splice-in-javascript/
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log("\nUsers List: ", users);

//Note: slice(): method returns a shallow copy of a portion of an array into a new array object selected from start to end(excluded)
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
console.log("After Slice(1): ", users.slice(1));
//O/P: [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

//Note: splice(): method changes the contents of an array by removing or replacing existing elements and/or adding new elements
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//Syntax: splice(start, deleteCount, item1, item2, itemN)
console.log("After Splicing: ");

let arr = [1, 2, 3, 4, 5];
arr.splice(2); //[ 1, 2 ]

arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); //[ 1, 2, 5 ]

arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 6); //[ 1, 6, 2, 3, 4, 5 ]
