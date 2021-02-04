const secretNum = Math.floor(Math.random()*100) 
let lowerNum = 1;
let upperNum = 100;
let numGuesses = 0;
let prevGuesses = [];

const inputNum = document.getElementById("inputnum")
const numGuessesContainer = document.getElementById("previousattempts")
const prevGuessesContainer = document.getElementById("previousguesses")
const guessFeedbackContainer = document.getElementById("guessfeedback")
const lowerNumContainer = document.getElementById("lowernum")
const upperNumContainer = document.getElementById("uppernum")

const submitNumber = e => {
  if (e.key === "Enter") {
    const yourGuess = Number(e.target.value)
    numGuesses++;
    prevGuesses.push(yourGuess)
    updateUi(yourGuess)

    if (yourGuess === secretNum){
      alert("You Win!")
      window.location.reload()
    }

    inputNum.value = ""
  }
}

inputNum.addEventListener("keydown", submitNumber)

const updateUi = (guessValue) => {
  numGuessesContainer.textContent = numGuesses
  prevGuessesContainer.textContent = prevGuesses.join(", ")

  if (guessValue < secretNum){
    guessFeedbackContainer.textContent = "Your guess was too low."
    lowerNum = Math.max(guessValue, lowerNum)
    lowerNumContainer.textContent = lowerNum
  } else if(guessValue > secretNum){
    guessFeedbackContainer.textContent = "Your guess was too high."
    upperNum = Math.min(guessValue, upperNum)
    upperNumContainer.textContent = upperNum
  }
}