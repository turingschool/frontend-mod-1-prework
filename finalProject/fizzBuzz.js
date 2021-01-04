/*
 For any number that is a multiple of 3, log 'Fizz'
 For any number that is a multiple of 5, log 'Buzz'
 For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
 For all other numbers, log the number.
*/


var runTask = 1; // Initializing variable for loop run.
 var endTask = 100;
  for(var i = 1; i <= 100; i++) // for loop and statement condition to check is given task divisible by 3 and 5? if true then logs " Fizz" and "Buzz"

  console.log(( i % 3 ? '': 'Fizz')+( i % 5 ? '': "Buzz") || i); // it it's false then number.
