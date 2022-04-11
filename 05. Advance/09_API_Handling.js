//This code will not run in node environment
//Run this code in browser console
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("DATA is :", data);
    var joke = data.value;
    console.log("JOKE:", joke);
  })
  .catch();
