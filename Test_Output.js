let greeting = (person) => {
  let name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};
console.log(greeting(null));
