// FizzBuzz - mod1 prework coding challenges

// goal1 - log number 1-100
// goal2 - for multiples of 3, log "Fizz"
// goal3 - for multiples of 5, log "Buzz"
// goal4 - for multiples of 3 AND 5, log "FizzBuzz"
// goal5 - for all other numbers, log the numbers

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (numbers[i] % 3 === 0) {
//     console.log('Fizz');
//   } else if (numbers[i] % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(numbers[i]);
//   }
// }

// var numbers = [i];

for (var i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// set up originally with a declared variable for numbers, which would have resulted in the need
// to type out the entire array of numbers
//
// found a few solutions on stackOverflow that looked like they might not need a variable declared
// prior to running the `for` loop
//
// took a bit of reformatting the `if/else if` statements to get the loop running, but this works!!
//
// to continue the loop for any length of numbers, the 100 in the `i < 100` statement can be
// changed to any number
