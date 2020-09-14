
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && ((i % 5 === 0) === false)) {
    console.log("Fizz");
  } else if (i % 5 === 0 && ((i % 3 === 0) === false)) {
    console.log("Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//Challenge
var startingNumber = 30
// var startingNumber = 4
// var startingNumber = 1857
// etc.
var endingNumber = 850
// var endingNumber = 86
// var endingNumber = 788888
// etc.

for (var i = startingNumber; i <= endingNumber; i++) {
  if (i % 3 === 0 && ((i % 5 === 0) === false)) {
    console.log("Fizz");
  } else if (i % 5 === 0 && ((i % 3 === 0) === false)) {
    console.log("Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
