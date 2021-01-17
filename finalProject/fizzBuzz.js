var fizzBuzzNumbers = new Array (101);

for (var i = 1; i < fizzBuzzNumbers.length; i++){
  if (i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz");
  } else if (i%5 === 0) {
    console.log("Buzz");
  } else if (i%3 === 0){
    console.log("Fizz");
  }  else{
    console.log(i);
  }
}

//To work with any numbers, we can just change the range or the total number in the array.

//Must list the && first because the loop won't reach it since at least one will return true before
