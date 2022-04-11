//Object Declaration
//Note: Not recomended this way to declare objects. Refer to 01_Object_ByFunction
var user = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],

  //Methods declaration inside Object
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

//Access objects variable
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

//Output in Table view of Object
console.table(user);

//Access object functions
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());

//Assign Objects
var myObj = {};
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);
