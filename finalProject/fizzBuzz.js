/* fizzBuzz will output the any range of numbers with the following rules:
For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number.
*/

var startNum = 1; //initialize variables used in for loop. Changing these variables allow the program to run for any range of numbers.
var endNum = 100;

for (var i = startNum; i <= endNum; i++) { //for loop
    if (i % 3 === 0) {              //check if i is divisible by 3
      console.log('Fizz');
    }
    else if (i % 5 === 0) {          //check if i is divisible by 5
      console.log('Buzz')
    }
    else {
      console.log(i);
    }
}
