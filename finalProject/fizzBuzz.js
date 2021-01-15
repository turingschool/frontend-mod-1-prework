//Part 1:
for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Challenge: Using the variables startNum and endNum, you can set any range of values (startNum-endNum) to be evaluated.
//In this example I set the range to be 3-24.
var startNum = 3;
var endNum = 24;
for (var i = startNum; i < endNum + 1; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
