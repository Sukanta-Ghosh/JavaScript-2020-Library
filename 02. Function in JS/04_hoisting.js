tipper("80"); //85

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200"); //215

console.log(name); //undefined
var name = "hitesh";

function sayName() {
  var name = "MR. H";
  console.log(name);
}
sayName(); //MR. H

console.log(name); //hitesh
