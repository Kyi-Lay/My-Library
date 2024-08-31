var count = 0;

// Add a comment describing the functionality of the following document.querySelector() methods:
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// Add a comment describing the functionality of the following code:
function setCounterText() {
  countEl.textContent = count;
}
// Add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// Add a comment describing the functionality of the following event listener:
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});








// var count = 0;

// // Add a comment describing the functionality of the following document.querySelector() methods:
// // These lines select elements from the HTML document by their ID attributes.
// var incrementEl = document.querySelector('#increment'); // Selects the element with the ID 'increment'.
// var decrementEl = document.querySelector('#decrement'); // Selects the element with the ID 'decrement'.
// var countEl = document.querySelector('#count'); // Selects the element with the ID 'count'.

// // Add a comment describing the functionality of the following code:
// // This function updates the text content of the element with the ID 'count' to display the current value of the count variable.
// function setCounterText() {
//   countEl.textContent = count;
// }

// // Add a comment describing the functionality of the following event listener:
// // This event listener listens for a 'click' event on the element selected by incrementEl.
// // When clicked, it increments the count variable by 1 and updates the text content of the count element accordingly.
// incrementEl.addEventListener('click', function() {
//   count++;
//   setCounterText();
// });

// // Add a comment describing the functionality of the following event listener:
// // This event listener listens for a 'click' event on the element selected by decrementEl.
// // When clicked, it decrements the count variable by 1 if the count is greater than 0,
// // and updates the text content of the count element accordingly.
// decrementEl.addEventListener('click', function() {
//   // Action will fire if count is greater than 0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });
