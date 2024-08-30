// Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
var shout = "shout"
function justShout() {
  console.log(shout + ', ' + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}

justShout();
shoutItAllOut();

// Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  console.log('and ' + animal + ' and ');
  return;
}

// The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
// var bears = 'pandas';
var bears = 'Bears';
function sayBears() {
  var bears = 'Pandas';
  console.log(bears + '! OH MY!');
  return;
}

sayLions();
sayTigers();
sayBears();

// The variable 'sing' should be declared once in the local scope.
// var sin = 'sing';
var sing = 'Sing';
function singAlong() {
  console.log(sing + ',');
  var singASong = function() {
    console.log(sing + ' a Song.');
  };
  singASong();
}

singAlong();
