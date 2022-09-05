const myThrottleFn = (func, timeout) => {
  return function (...args) {
    document.getElementById("myBtn").disabled = true;
    setTimeout(() => {
      func();
    }, timeout);
  };
};

const throttleFn = myThrottleFn(() => {
  console.log("User Clicked!!");
  document.getElementById("myBtn").disabled = false;
}, 3000);
