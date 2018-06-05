// I need the user to make a choice
// Computer to make a choice
// Capture these choices
// Compare these choice to determine a win or loss
// Display number of guesses left 
// Display the guesses so far to the user

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// Randomly chooses an choice from the Computer choices array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Add the user's guess to guessesSoFar array 
    // Only if the it wasn't already guessed by the user
    if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;

        console.log("userGuess = " + userGuess);
        console.log("guessesSoFar = " + guessesSoFar);
        console.log("computerGuess = " + computerGuess);
        console.log("guessesLeft = " + guessesLeft);

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = [];
        }
        else if (userGuess !== computerGuess) {
            guessesLeft--;
        }

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 10;
            guessesSoFar = [];
        }
    }


    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<h1>Guess what letter I'm thinking of</h1>" +
        "<h2>Wins: " + wins + "</h2>" +
        "<h2>Losses: " + losses + "</h2>" +
        "<h2>Guesses left: " + guessesLeft + "</h2>" +
        "<h2>Your guesses so far: " + guessesSoFar + "</h2>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}
