//Namaste Javascript

//setTimeout
setTimeout(() => {
  console.log("timer"); //timer
}, 5000);

//What is a Callback Function in JS
function x(y) {
  console.log("x");
  y();
}
//Here y is callback fn
x(function y() {
  console.log("y");
}); //x //y

//Scope Demo with Event listeners with Closure
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Clicked ", ++count);
  });
}

//attachEventListeners();
