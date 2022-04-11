console.log(this); //{}

var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    //This will print user object signature
    console.log("LINE 7", this);
    function sayHello() {
      console.log("Hello");
      //This will print window object
      console.log("LINE 10", this);
    }
    //Note: This is regular function call
    sayHello();
  },
};

// Note: This function is called through a object, so
// this is not regular function call
console.log("Get course count:");
user.getCourseCount();
