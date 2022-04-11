var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

//Retrieve both key & value together using for of
for (let [key, value] of myMap) {
  console.log(`Key is : ${key} and Value is ${value}`);
}

//Retrieve both key & value together using forEach loop
myMap.forEach((value, key) => console.log(`${value} and key is ${key}`));

myMap.delete(2);
console.log(myMap);

//Retrieve only key from map
for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
}
//Retrieve only value from map
for (let value of myMap.values()) {
  console.log(`Value is ${value}`);
}
