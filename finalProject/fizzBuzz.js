// FizzBuzz

for (var i = 0; i <= 100; i++) {
     fiz = (i % 3 == 0 ? "Fizz" : (i % 5 == 0) ? "Buzz" : (i % 5 == 0 && i % 3 == 0) ? "FizzBuzz" : i);
     console.log(fiz);
   }
