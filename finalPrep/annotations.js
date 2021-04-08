// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declaring a function with five paramenters
function buildABear(name, age, fur, clothes, specialPower) {
  // declare a variable greeting with a sting value and the name parameter interpolated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare a variable demographics to an array with the parameters name and age.
  var demographics = [name, age];
  // declare a variable powerSaing with a string value concatenated with the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // decalre a variable object with six properties
  var builtBear = {
    // basicInfo key with variable demographics as value
    basicInfo: demographics,
    // clothes key with clothes parameter as value
    clothes: clothes,
    // exterior key with fur parameter as value
    exterior: fur,
    // cost key with static value of 49.99
    cost: 49.99,
    // sayings key with greeting and powerSayings variables and string as value.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // isCuddly key with true value.
    isCuddly: true,
  };
// Return the builtBear information
  return builtBear
}
// Calling the BuildABear function passing six specific arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calling the BuildABear function passing six specific arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declaring function fizzBuzz with three parameters
function fizzBuzz(num1, num2, range) {
  // declaring a for loop initialized at zero, updating the count by one, and ending when the count is less than or
  // equal to the range parameter.
  for (var i = 0; i <= range; i++) {
    // if the modulus of i divided by parameter num1 exactly equals 0 and the modulus of i divided
    // by the parameter num2 exactly equals 0
    if (i % num1 === 0 && i % num2 === 0) {
      // if the if statement evaluates to true for both, 'fizzbuzz' will log to the console.
      console.log('fizzbuzz');
      // if the modulus of i divided by paramenter num1 is exactly equal to 0
    } else if (i % num1 === 0) {
      // if the else if statement evaluates to true, 'fizz' will log to the console.
      console.log('fizz');
      // if the modulus of i divided by the paramenter num2 evaluates to exactly 0
    } else if (i % num2 === 0) {
      // if the else if statement evaluates to true, 'buzz' will log to the console.
      console.log('buzz');
      // the else condition of the loop
    } else {
      // if the other conditions do not evaluate to true, i will log to the console.
      console.log(i);
    }
  }
}
// calling the fizzBuzz function with three arguments
fizzBuzz(3, 5, 100);
// calling the fizzBuzz funtion with three arguments
fizzBuzz(5, 8, 400);
