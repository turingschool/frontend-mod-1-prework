function fizzBuzz(number) {
	if ((number % 3 === 0) && (number % 5 === 0)) {
		console.log("FizzBuzz");
	} else if (number % 3 === 0) {
		console.log("Fizz");
	} else if (number % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(number);
	}
}

fizzBuzz(15);
fizzBuzz(33);
fizzBuzz(55);
fizzBuzz(103);
