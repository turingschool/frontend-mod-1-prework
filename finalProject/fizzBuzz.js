
/*
fizzbuzz!
For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number.
*/

var start = 0;
var end = 100;

for (var i = start; i <= end; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
