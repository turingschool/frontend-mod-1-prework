//////////DIRECTIONS: only run one section at a time in chrome dev tools or repl.it
////////// Part 1
var fizzBuzz = [];

for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}

console.log(fizzBuzz);

////////// End Part 1



////////// Challenge
var frogs = 0;
var a = 0;
var z = 0;
var fizzBuzz = [];

function getStartNumber() {
  a = prompt("What number do you want to start at?");
}
function getEndNumber() {
  z = prompt("What number do you want to stop at?");
}

getStartNumber();
getEndNumber();

var startNumber = parseInt(a);
var endNumber = parseInt(z);

for (i = startNumber; i < (endNumber + 1); i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}

console.log(fizzBuzz);

////////// End Challenge
