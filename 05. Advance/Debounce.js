let counter = 0;
function getData() {
  console.log("Fetching data " + counter++);
}

function myDebounce(call, timeout) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, timeout);
  };
}

const callFunction = myDebounce(getData, 1000);

/* Use  <input type="text" id="search" onchange="callFunction()" />
in html file.*/
