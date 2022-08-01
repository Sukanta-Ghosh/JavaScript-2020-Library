const objName = {
  name: "Sukanta",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};

console.log(objName);

const objRoll = {
  roll: 1,
  /* If name var is put here, then 
  objRoll will take its own name var
  rather than objName object name var*/
  //name: "Anshu",
  __proto__: objName,
};

console.log(objRoll); //{ roll: 1 }
console.log(objRoll.getName()); //Sukanta

/* Here objRoll is accessing objName objects
getRoll function which contains roll var which is 
part of objRoll object*/
console.log(objRoll.getRoll()); //1

//Inheritance
const obj = {
  role: "SDE",
  __proto__: objRoll,
};

console.log(obj.getName()); //Sukanta

//Array Prototype
const array = new Array();

//Polyfill Declaration
Array.prototype.show = function () {
  return this;
};
const roles = ["SDE1", "SDE2", "PM", "Associate"];
console.log(roles.show()); //[ 'SDE1', 'SDE2', 'PM', 'Associate' ]

Array.prototype.converToObject = function () {
  let newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });
  return newObj;
};

console.log(roles.converToObject()); //{ SDE1: 'SDE1', SDE2: 'SDE2', PM: 'PM', Associate: 'Associate' }

//Prototype through constructor
function myPrototype(name) {
  this.name = name;
}

myPrototype.prototype = objName;

const myProto = new myPrototype("Ghosh");
console.log(myProto); //{ name: 'Ghosh' }
console.log(myProto.getName()); //Ghosh
