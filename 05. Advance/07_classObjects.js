console.log("Log for classObjects.js class");

//TODO: Find how to work with ES6 here.
// import User from "./06_class_";   //This will not work here

//This will get access to the User class from 06_class_.js file
const User = require("./06_class_.js").default; //old way of importing

//TODO: Find out why getting error
console.log("Getting error from next line");
const hitesh = new User("hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();
console.log("Ending Log for classObjects.js class");

courses.forEach((c) => console.log(c));
