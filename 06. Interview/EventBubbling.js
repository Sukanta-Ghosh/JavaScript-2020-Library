//Event Bubbling & Capturing
//MDN Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

/* Event Bubbling: Child to parent event propagation */
const div = document.querySelector("div");

div.addEventListener("click", () => {
  console.log("div event");
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("button event");
});

/* Event Capturing: Parent to child event propagation */
// div.addEventListener(
//   "click",
//   () => {
//     console.log("div event");
//   },
//   true
// );

// button.addEventListener(
//   "click",
//   () => {
//     console.log("button event");
//   },
//   true
// );

/* Stop Propagation: Child will not propagate event to its parent */
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button event");
});

/* Stop Immediate Propagation: Will not propagate further*/
button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("button event 2");
});

/* Prevent Default: Will prevent default behaviour */
const a = document.querySelector("a");
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("a event prevented");
});
