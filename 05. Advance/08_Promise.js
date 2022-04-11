//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
const uno = () => {
  return "I am One";
};

//Asnyc Problem Statement Method. This code will not wait for timeout, It will execute next statements
// const dos = () => {
//   setTimeout(() => {
//     console.log("Wooohoooo");
//   }, 3000);
//   console.log("I am Two");
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

//Topic: async & await
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

//uno()
//dos()
//tres()
