var guessInput = document.querySelector(".input-guess");
var guessButton = document.querySelector(".guess-button");
var clearButton = document.querySelector(".clear-button");
var userGuess = document.querySelector(".guess");
var feedback = document.querySelector(".feedback");
var minRange = 1;
var maxRange = 100;
var answerValue = generateRandomInteger(minRange, maxRange);
var minInput = document.querySelector(".input-min");
var maxInput = document.querySelector(".input-max");
var changeRangeButton = document.querySelector(".change-range-button");
var resetButton = document.querySelector(".reset");
var currentMin = document.querySelector(".current-min");  // display current min
var currentMax = document.querySelector(".current-max"); // display current max


function grabUserGuessValue() {                      // get user input and compare to generated answer
  var guessInputInt = parseInt(guessInput.value);
  userGuess.innerHTML = guessInputInt;
  return compareValues(guessInputInt, answerValue);
}


function clearUserGuessValue() {    // don't remember what this is
  console.log('clear');
  return guessInput.value = '';
}

function clearMinMax () {    // clears text from min and max input fields
   minInput.value = '';
   maxInput.value = '';
}

function generateRandomInteger(min, max) {    // generate answer
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareValues(lastGuess, currentAnswer) {    // checks user input against generated answer and returns feedback
  if (lastGuess > maxRange || lastGuess < minRange) { return feedback.innerHTML = 'Number outside of range. Please enter a number within the specified range.' }
  if (lastGuess === currentAnswer) {
    minRange -= 10;
    maxRange += 10;
    updateCurrentRange();
    return feedback.innerHTML = 'Sweet Action!';
}
  if (lastGuess > currentAnswer) { return feedback.innerHTML = 'That is too high!' }
  if (lastGuess < currentAnswer) { return feedback.innerHTML = 'That is too low!' }
  if (lastGuess = 'NaN') {return feedback.innerHTML = 'One of your inputs is not a number. Please make sure all inputs are numbers.'};
}

function enableResetButton () {
  resetButton.setAttribute("disabled", "false");
}

function updateCurrentRange () {                  // displays current range
  currentMin.innerHTML = minRange;
  currentMax.innerHTML = maxRange;
}

guessButton.addEventListener('click', function(event) {    // makes guessButton work
  event.preventDefault();
  grabUserGuessValue();
});

clearButton.addEventListener('click', function(event) {   // makes clearButton work
  event.preventDefault();
  clearUserGuessValue();
});

resetButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('hello');
  minRange = 1;
  maxRange = 100;
  answerValue = generateRandomInteger(minRange, maxRange);  // generate new answer
  clearMinMax();                          // clear input fields
  updateCurrentRange();
  clearUserGuessValue();
})

changeRangeButton.addEventListener('click', function(event) {
  event.preventDefault();
  minRange = parseInt(minInput.value);
  maxRange = parseInt(maxInput.value);
  updateCurrentRange ();
  // if min range is greater than max range, min range = maxrange.value and vice versa
  // if minrange = maxrange, return error message
  // if they enter non-numbers, return error message
  answerValue = generateRandomInteger(minRange, maxRange);
})

guessInput.addEventListener('keyup', function(event) {
   console.log(event.target.value);
   if (event.target.value != '') {clearButton.disabled = false};
 })
// disabling buttons
