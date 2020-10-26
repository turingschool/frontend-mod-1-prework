/* Write a program that logs the numbers from 1 to 100 with
the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.
*/

// function fizzBuzz() below meets the above rules

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
  if (((i % 3) === 0) && ((i % 5) === 0)) {
    console.log("FizzBuzz");
  } else if ((i % 3) === 0) {
    console.log("Fizz");
  } else if ((i % 5) === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}
};
fizzBuzz();



//Challenge
// Function fizzBuzzChallenge() will run for any range of numbers,
// input start number into startNumber parameter and 
// end number into endNumber parameter

function fizzBuzzChallenge(startNumber, endNumber) {
  for (var i = startNumber; i <= endNumber; i++) {
  if (((i % 3) === 0) && ((i % 5) === 0)) {
    console.log("FizzBuzz");
  } else if ((i % 3) === 0) {
    console.log("Fizz");
  } else if ((i % 5) === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}
};
fizzBuzzChallenge(1,15);
