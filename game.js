//Create secretNumber
var secretNumber = 4;
//as user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess
if(guess === secretNumber) {
	alert("You got it right!")
}
// otherwise check if higher
else if(Number(guess) > secretNumber){
	alert("Too high! Guess again.")
}
// otherwise check if lower
else {
	alert("Too low! Guess Again.")
}