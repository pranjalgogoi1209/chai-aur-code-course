const form = document.querySelector("form");
const result = document.querySelector(".result");

let remainingGuess = 10;
let prevGuesses = [];
let targetNumber = ~~(Math.random() * 100 + 1);
let isPlayGame = true;

console.log(remainingGuess);

console.log("target", targetNumber);

// fetching data from form
if (isPlayGame) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const guessNumber = Number(form.guess.value);
    validateGuess(guessNumber);
    form.guess.value = "";
  });
}

// data validation
const validateGuess = guessNumber => {
  if (
    remainingGuess > 0 &&
    (isNaN(guessNumber) || guessNumber <= 0 || guessNumber > 100)
  ) {
    displayMsg("Please enter a valid number");
  } else {
    if (remainingGuess === 1) {
      remainingGuess--;
      displayRemainingGuess(remainingGuess);
      displayMsg(`Game over...! You Lost, Random number was ${targetNumber}`);
      endGame();
    } else if (remainingGuess > 1) {
      remainingGuess--;
      prevGuesses.push(guessNumber);
      checkGuess(guessNumber);
      displayRemainingGuess(remainingGuess);
      displayPrevGuesses(prevGuesses);
    }
  }
};

const displayRemainingGuess = remainingGuess => {
  document.querySelector(".remainingGuess").innerText = remainingGuess;
};
displayRemainingGuess(remainingGuess);
const displayPrevGuesses = prevGuesses => {
  document.querySelector(".previousGuesses").innerText = prevGuesses.join(", ");
};

const displayMsg = msg => {
  result.innerText = msg;
};

const checkGuess = guessNumber => {
  if (guessNumber === targetNumber) {
    displayMsg("Congratulations...! You won, You guessed it right");
    remainingGuess = 0;
    endGame();
  } else if (guessNumber < targetNumber) {
    displayMsg("Oops...! You guessed low number, Better luck for next time");
  } else {
    displayMsg("Oops...! You guessed high number, Better luck for next time");
  }
};

const endGame = () => {
  isPlayGame = false;
  console.log("inside endGame: ", isPlayGame);
  form.guess.setAttribute("disabled", "");
  const btn = document.createElement("button");
  btn.innerText = "New Game";
  document.querySelector(".resultParas").appendChild(btn);
  btn.addEventListener("click", () => {
    newGame();
    document.querySelector(".resultParas").removeChild(btn);
  });
};

const newGame = () => {
  isPlayGame = true;
  console.log("inside newGame: ", isPlayGame);
  remainingGuess = 10;
  document.querySelector(".remainingGuess").innerText = remainingGuess;
  prevGuesses = [];
  document.querySelector(".previousGuesses").innerText = prevGuesses;
  targetNumber = ~~(Math.random() * 100 + 1);
  form.guess.removeAttribute("disabled");
  result.innerText = "";
};

// my style
/* console.log("outside", prevGuesses, remainingGuess);
form.addEventListener("submit", e => {
  const guessNumber = Number(form.guess.value);

  if (prevGuesses.length < 10) {
    e.preventDefault();
  }
  if (guessNumber !== 0) {
    if (guessNumber === targetNumber) {
      result.innerText = "You guess correctly";
    } else {
      remainingGuess--;
      document.querySelector(".remainingGuess").innerText = remainingGuess;
      prevGuesses.push(guessNumber);
      document.querySelector(".previousGuesses").innerText = prevGuesses;
      result.innerText = "Try again";
    }
    if (remainingGuess === 0) {
      result.innerText = "You lost the game";
    }
    console.log("inside", prevGuesses, remainingGuess);
    form.guess.value = "";
  } else {
    result.innerText = "Enter a valid number from 1 to 100";
  }
}); */
