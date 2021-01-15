// multiples of num1 generate "Fizz", multiples of num2 generate "Buzz", multiples of num1 * num2 generate "FizzBuzz"
var num1 = 3;
var num2 = 5;

for (var i = 1; i <= 100; i++) {
  if (i % (num1 * num2) === 0) {
    console.log("FizzBuzz")
  } else if (i % num1 === 0) {
    console.log("Fizz")
  } else if (i % num2 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
