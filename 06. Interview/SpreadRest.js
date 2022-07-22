/* Spread and Rest Operator in ES6 */
//Rest Operator with Object
var students = {
  name: "Sukanta",
  age: "25",
  hobbies: ["Guitar", "Coding"],
};

//Rest: At the time of combining use Rest
const { age, ...rest } = students;
console.log(rest);

//Spread with Object
var newStudent = {
  ...students,
  age: "26", //Value is overridden
};
console.log(newStudent);
