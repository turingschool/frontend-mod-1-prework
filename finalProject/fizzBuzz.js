// create loop counter for 1 - numbers less than 101,
// increment using i++
for (var i = 1; i < (101); i++) {
  // create conditions for the index number 'i'
 // first condition, if i/3 remainder (%) is 0 AND
 // if i/5 remainder (%) is 0 log 'FizzBuzz'
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  // else if i/5 % is 0 log 'Buzz'
  } else if (i % 5 === 0) {
    console.log('Buzz');
// else if i/3 % is 0 log 'Fizz'
  } else if (i % 3 === 0) {
    console.log('Fizz');
  // else just log the number (i)
  } else{
    console.log(i);
  }
}
