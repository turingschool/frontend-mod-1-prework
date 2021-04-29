// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//This line is assigning variables to the buildABear function
function buildABear(name, age, fur, clothes, specialPower) {
// This line is declaring a variable 'greeting' to a specific greeting that includes the name variable//
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// This line is declaring a demographics variable that includes both a name and age property
  var demographics = [name, age];
// This line is declaring a power statement variable that uses concatenation to combine a string with the specialPower variable
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// This line is declaring an object builtBear
  var builtBear = {
//this line provides a basicInfo key with a demographics value//
    basicInfo: demographics,
//this line provides a clothes key with a clothes value//
    clothes: clothes,
//this line provides a exterior key with a fur value//
    exterior: fur,
//this line provides a cost key for a 49.99 integer value//
    cost: 49.99,
//this line provides a sayings key with an array value that is also a concatenation!//
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//this line povides a isCuddly key that has a boolean value of true
    isCuddly: true,
  };
//this line is stating that the function will return the builtBear variable
  return builtBear
}
//this line is a new instance of a buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//this line is a new instance of a buildABear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//This line is assigning variables to the fizzBuzz function
function fizzBuzz(num1, num2, range) {
//This line is designating a for loop that will start at 0 and increment until i is equal to range.
  for (var i = 0; i <= range; i++) {
//This line is an if statement (condition) that states the remainder of num1 into i strictly equals 0 and the remainder of num2 into i strictly equals 0
    if (i % num1 === 0 && i % num2 === 0) {
//This line is printing fizzbuzz
      console.log('fizzbuzz');
//This line is stating a else if statement that posese if num1 into i strictly equals 0...
    } else if (i % num1 === 0) {
//The console log will print fizz
      console.log('fizz');
//This line is stating a else if statment that poses if num2 into i strictly equals 0...
    } else if (i % num2 === 0) {
//The console log will print buzz
      console.log('buzz');
//This else statement poses that anything else will meet this condition
    } else {
//Anything else will print console.log(i)
      console.log(i);
    }
  }
}
//this is a new instance of fizzBuzz
fizzBuzz(3, 5, 100);
//this is a new instance of fizzBuzz
fizzbuzz(5, 8, 400);
