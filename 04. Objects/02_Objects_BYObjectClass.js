//The Object class represents one of JavaScript's data types.
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};

//1st way: Object creation
var hitesh = Object.create(User);
console.log(hitesh); //{}

hitesh.name = "hitesh Choudhary";
hitesh.getUserName(); //User name is : hitesh Choudhary

//2nd way: Object creation
var sam = Object.create(User, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
});

sam.getUserName(); //User name is : sammy
