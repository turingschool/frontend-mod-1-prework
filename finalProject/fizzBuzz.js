
for (var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0 && i > 0) {
      console.log('FizzBuzz');
    } else if(i % 5 === 0 && i > 0) {
      console.log('Buzz');
    } else if(i % 3 === 0 && i > 0) {
      console.log('Fizz');
    } else {
      console.log(i)
    }
  }
//To write the program so that it will run for any range of numbers you would simply change the condition i <= 100 to whatever max number you want
// and the variable i to start out equal to whatever minimum/starting number you want.
