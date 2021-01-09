/*This is a for loop that declares a variable i equal to 1.
The code will run through the loop and start off increasing the value of
i by 1 each time it runs through the loop. It will do this until i
equal 100 and then stop after 100.
*/
for (var i = 1; i <= 100; i++) {

/* Makes the loop work on _any_ numbers you want to fizz or buzz
*/
var anyNumberYouFizz = 3;
var anyNumberYouBuzz = 5;

//* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
    if (i % anyNumberYouFizz == 0 && i % anyNumberYouBuzz == 0) {
    console.log('FizzBuzz');
//* For any number that is a multiple of 3, log 'Fizz'
    }   else if (i % anyNumberYouFizz == 0) {
    console.log('Fizz');
//* For any number that is a multiple of 5, log 'Buzz'
    }   else if (i % anyNumberYouBuzz == 0) {
    console.log('Buzz');
//* For all other numbers, log the number.
    }    else {
    console.log([i]);
    }


}
