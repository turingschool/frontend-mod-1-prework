  for (var i = 1; i <= 100; i++) {
   if (i % 3 == 0 && i % 5 == 0){
      console.log(`FizzBuzz`)
    }else if  (i % 3 == 0){
      console.log(`Fizz`);
    }else if (i % 5 == 0){
      console.log(`Buzz`);
    }else  {
      console.log(i);
    }
  }
}

//challange
function logFizzBuzz(min, max) {
  for (var i = min; i <= max; i++) {
   if (i % 3 == 0 && i % 5 == 0){
      console.log(`FizzBuzz`)
    }else if  (i % 3 == 0){
      console.log(`Fizz`);
    }else if (i % 5 == 0){
      console.log(`Buzz`);
    }else  {
      console.log(i);
    }
  }
}

 logFizzBuzz(1, 100)
