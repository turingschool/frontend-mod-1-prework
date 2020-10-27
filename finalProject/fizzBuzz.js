var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
    console.log("FizzBuzz");
  } else if (numbers[i] % 5 === 0) {
    console.log("Buzz");
  } else if (numbers[i] % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(numbers[i]);
  }
}
