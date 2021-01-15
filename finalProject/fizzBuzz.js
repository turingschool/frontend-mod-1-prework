for (i=1; i < 101; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log((i));
  }

}

// to add your range of numbers just change i < 101 to your number. Same with i % for your multiples.
