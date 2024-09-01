// Write code to add all the numbers in `arr` and return the total

// var sumArray = function(arr) {
//     var result = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var currentNumber = arr(i);
//         result += currentNumber;
//     }

//     return result;
// };

// sumArray(1,0,);



var sumArray = function(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i]; // Use square brackets instead of parentheses
        result += currentNumber;
    }

    return result;
};

// Now, let's call the function with an array as an argument
var numbers = [1, 0];
console.log(sumArray(numbers)); // This will output: 1
