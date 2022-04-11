// Function declaration
let sayHi = function (name) {
  return `hi! ${name}`;
};

//Arrow function Method 1
sayHi = (name) => {
  return `hi! ${name}`;
};

//Arrow function Method 2 (Same method)
sayHi = (name) => `hi! ${name}`;

console.log(sayHi(`Suku`)); //hi! Suku

//Define todos
const todo = [
  {
    title: "Brush",
    done: true,
  },
  {
    title: "Gym",
    done: false,
  },
  {
    title: "Coding",
    done: true,
  },
];

const thingsDone = todo.filter((todos) => todos.done == true);
console.log(thingsDone); //[ { title: 'Brush', done: true }, { title: 'Coding', done: true } ]

//here arrow function will give error
//Action: why?
const cameras = {
  price: 50000,
  weight: 2000,
  description: function () {
    return `This canon camera is of Rs.${this.price}`;
  },
};
console.log(cameras.description()); //This canon camera is of Rs.50000

//Redux stuff
const func = () => ({ key: "value" });
