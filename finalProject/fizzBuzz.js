//FIZZ BUZZ

let makeItFizz = (start, end) => {
  for (var i = start; i <= end; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

makeItFizz(5, 20);
