var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // TODO: Add a comment describing the functionality of the setInterval() method:
  var timeInterval = setInterval(function () {
    // TODO: Add comments describing the functionality of the `if` statement:
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else if` statement:
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else` statement:
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();







// // Selecting the HTML elements
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// // The message to be displayed
// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// // Splitting the message into an array of words
// var words = message.split(' ');

// // Function to run a countdown
// function countdown() {
//   var timeLeft = 5;

//   // Using setInterval to repeatedly run a function every 1000 milliseconds (1 second)
//   var timeInterval = setInterval(function () {
//     // If there's still time left
//     if (timeLeft > 1) {
//       // Update the timer element with the remaining time
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       timeLeft--; // Decrement the time left
//     }
//     // If there's only 1 second left
//     else if (timeLeft === 1) {
//       // Update the timer element with singular phrasing
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--; // Decrement the time left
//     }
//     // When the countdown reaches 0
//     else {
//       // Clear the timer display
//       timerEl.textContent = '';
//       // Stop the countdown by clearing the interval
//       clearInterval(timeInterval);
//       // Call the function to display the message
//       displayMessage();
//     }
//   }, 1000); // Interval set to 1000 milliseconds (1 second)
// }

// // Function to display the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Using setInterval to repeatedly run a function every 1000 milliseconds (1 second)
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message array
//     if (words[wordCount] === undefined) {
//       // Use clearInterval to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display the current word in the message
//       mainEl.textContent = words[wordCount];
//       // Move to the next word
//       wordCount++;
//     }
//   }, 1000); // Interval set to 1000 milliseconds (1 second)
// }

// // Start the countdown when the page loads
// countdown();

