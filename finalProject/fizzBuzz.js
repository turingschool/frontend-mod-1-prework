# FizzBuzz

Create a file named `fizzBuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.


for (var i = 1; i <= 100; i++) {
  var message = "";
  if (i%3 === 0) message = "fizz";
  if (i%5 === 0) message = "buzz";
  if (i%3 === 0 && i%5 === 0) message = "fizzBuzz";
  console.log(message || i);
}

/* Full disclosure: I have read, I have Googled, I have consulted with my peers and used the resources available to me, which is why I elected to leave all of my workWordVomit below. However, the answer above mostly came from the internet. I've talked with 1.5 of my small group mates. Can we unpack how to get my actual if/elseif statements to work below? I feel like all of the components are there, but there is something I'm doing with them that I wouldn't be?! I would like to learn more so I can make revisions and make the code below work as well. */



var fizzBuzz = new Array (100)

for (var i = 0; i < 100; i++) {
  if (condition1) {
    //block of code executes if condition1 evaluates to true
} else if (condition2) {
    //block of code executes if condition1 evaluates to false and condition2 evaluates to true.
} else if (condition3) {
    //block of code executes if condition1 and condition2 evaluate to false
    //and condition3 evaluates to true.
} else {
    //block of code executes if none of the conditions above evaluate to true.
};
}


for (var i = 0; i <= 100; i++)
console.log(number[i])

//var number = new Array ();

while (number <= 100) {
if (number % 3 === 0) {
console.log("Fizz");
} else if (number % 5 === 0) {
console.log("Buzz");
} else if (number % 5 === 0 && number % 3 === 0) {
console.log("FizzBuzz");
} else {
console.log(number[i]);
};
number++
}

// Working with Amy



function countFB (min, max){
var number = min
while (number <= max) {
if (number % 5 === 0 && number % 3 === 0) {
console.log("FizzBuzz");
} else if (number % 5 === 0) {
console.log("Buzz");
} else if (number % 3 === 0) {
console.log("Fizz");
} else {
console.log(number);
};
number++
}
}

countFB(22, 84)














/*
var buzz = 5;
while (buzz <= 100) {
if (buzz % 5 === 0) {
console.log("Buzz");
}
buzz++;
}

var fizzBuzz = 15;
while (fizzBuzz <= 100) {
if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0) {
console.log("FizzBuzz");
}
fizzBuzz++;
}
*/

The output of you program will look something like this:
```
=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
```

## Challenge

Can you write the program so that it will run for _any_ range of numbers?

/*
var fizz = 3;
while (fizz <= 100) {
if (fizz % 3 === 0) {
console.log("Fizz");
}
fizz++;
}

var buzz = 5;
while (buzz <= 100) {
if (buzz % 5 === 0) {
console.log("Buzz");
}
buzz++;
}

var fizzBuzz = 15;
while (fizzBuzz <= 100) {
if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0) {
console.log("FizzBuzz");
}
fizzBuzz++;
}
*/


for (var i = 1; i <= 100; i++) {
  var message = "";
  if (i%3 === 0) message = "fizz";
  if (i%5 === 0) message = "buzz";
  if (i%3 === 0 && i%5 === 0) message = "fizzBuzz";
  console.log(message || i);
}
