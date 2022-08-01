const cards = document.querySelectorAll(".card");

var isFlipped = false;
var firstCard;
var secondCard;

var checkIt = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    failed();
  }
};

var success = () => {
  firstCard.removeEventListener("click", flipped);
  secondCard.removeEventListener("click", flipped);
  reset();
};

var failed = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
};

var reset = () => {
  isFlipped = false;
  //TODO: Destructure it
  firstCard = null;
  secondCard = null;
};

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 15);
    card.style.order = index;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipped));

//attention: Convert this func to arrow function will not working for classList.add , check later
function flipped() {
  //console.log(this);

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    // console.log(firstCard);
    // console.log(secondCard);

    checkIt();
  }
}
