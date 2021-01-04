/*
# FizzBuzz

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

function fizzBuzz (number) {               //create function that takes any number as a parameter
  for (var i = 1; i <= number; i++) {      // starting at 1; check each number till i = number; incrementing by 1 each loop
    if (i % 3 === 0 && i % 5 === 0) {      // if i a multiple of 3 AND a mulitple of 5
      console.log('FizzBuzz');             // log 'FizzBuzz'
    } else if (i % 3 === 0) {              // otherwise if i is a mulitple 3
      console.log('Fizz');                 // log 'Fizz'
    } else if (i % 5 === 0) {              // otherwise if i is a mulitple of 5
      console.log('Buzz')                  // log 'Buzz'
    } else {                               // otherwise just log the value of i
      console.log(i);
    }
  }
}

fizzBuzz(100);      // call to our function that can take any number as an argument
