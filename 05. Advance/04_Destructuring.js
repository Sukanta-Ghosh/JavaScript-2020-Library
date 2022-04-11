//Destructuring in Array
const user = ["hitesh", 3, "admin"];
// var role = user[2];
// var name = user[0];

//Note: In Array: left side naming does not matter
var [name, courseCount, role] = user;

console.log(role);

//Destructuring in Objects
const MyUser = {
  name: "hitesh",
  courseCount: 5,
  role: "admin",
};

console.log(MyUser.courseCount);

//Note: In Objects: left side naming should be matched with object key fields
const { name, courseCount, role } = MyUser;
console.log(role);
