//console.log(document)

// To change the title of the html file
document.title = "Title Manupulated";

//Select by a particular tag for first one
let myElement = document.querySelector("p");

//Select by a particular tag(All). myAllElement is array variable.
let myAllElement = document.querySelectorAll("p");
//To print only one element
//console.log(myAllElement[0])

//Select by a particular tag by id
let myidElement = document.querySelector("#someId");

//Select by a particular tag by class
let myclassElement = document.querySelector(".someClass");

//Change text in a tag
myElement.textContent = "I am changed by JS";

//Looping through elements using function
myAllElement.forEach(function (pt) {
  //pt.textContent = 'I am changed by using loop in JS'
});

//Looping through elements using arrow function
//myAllElement.forEach((pt) => pt.textContent = 'I am changed by using loop in JS')

//html always runs top to bottom so newElement text will not change by previous function
//Creating new element in DOM
const newElement = document.createElement("p");
newElement.textContent = "Created by JS";

//Putting newElement
//appendChild put anything at the end
document.querySelector("body").appendChild(newElement);

//Event listeners
document.querySelector("button").addEventListener("click", (event) => {
  event.target.textContent = "I was clicked";
});

//Form validation
//Track input form
document.querySelector("#myForm").addEventListener("input", (event) => {});

// var title = document.getElementsByTagName("h1");
// var titleTwo = document.getElementsByClassName("title");
