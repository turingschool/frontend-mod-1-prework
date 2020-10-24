/*
Create a file named `fizzBuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.

The output of you program will look something like this:
```
=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
```
## Challenge
Can you write the program so that it will run for _any_ range of numbers?
*/

// Note: Considered building a loop over an array but took what seemed like the most straightforward solution
// Note2: For future self do some research on building dymanic arrays as it should reduce the code
/* Note: Used this reference to figure out how to build the array at each part of the if statement; the += sign
// is a cool function that adds one additional value to the end of the string
Reference Noted Above: https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line/33089779
*/
// Reference to remove the final comma and space in the string https://flaviocopes.com/how-to-remove-last-char-string-js/

var stringBuild = "";
var startNum = 1;
var endNum = 100;

console.log("Start Number = " + startNum);
console.log("End Number   = " + endNum);
console.log(" ");
console.log("Rule #1: If number is divisable by 3 & 5, log FizzBuzz.");
console.log("Rule #2: If number is divisable by 3 only, log Fizz.");
console.log("Rule #3: If number is divisable by 5 only, log Buzz.");
console.log("Rule #4: If number is NOT divisable by 3 or 5, log number.");
console.log(" ");

for (var i = startNum; i <= endNum; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    //console.log(i + " FizzBuzz");
    stringBuild += "FizzBuzz, ";
  } else if (i % 3 === 0) {
    //console.log(i + " Fizz");
    stringBuild += "Fizz, ";
  } else if (i % 5 === 0) {
    //console.log(i + " Buzz");
    stringBuild += "Buzz, ";
  } else {
    //console.log(i)
    stringBuild += i + ", ";
  }
}
//console.log(stringBuild); //use to quality control the final result
//console.log("");
var finalString = stringBuild.slice(0, -2); //removes the final ", " comma & space from the string
console.log(finalString);
