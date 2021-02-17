//Fizz Buzz:

for (var i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz, ");
  } else if (i % 5 === 0) {
    console.log("Buzz, ")
   } else if (i % 3 === 0) {
    console.log("Fizz, ")
  } else {
   console.log(i + ", ");
  }
}


//Fizz Buzz extension:
var startNum = 5;
var endNum = 27;

var fizzBuzzArray = [];

for (var i = startNum; i < endNum; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzzArray.push("FizzBuzz");
  } else if (i % 5 === 0) {
    fizzBuzzArray.push("Buzz")
   } else if (i % 3 === 0) {
    fizzBuzzArray.push("Fizz")
  } else {
   fizzBuzzArray.push(i)
  }
}

console.log(fizzBuzzArray.join(", "));
