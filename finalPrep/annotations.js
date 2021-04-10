// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declaring a function with five paramenters
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable greeting with a sting value and the name parameter interpolated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare a variable demographics to an array with the parameters name and age.
  var demographics = [name, age];
  // Declare a variable powerSaying with a string value concatenated with the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Decalre a variable object with six properties
  var builtBear = {
    // basicInfo key with variable demographics as value
    basicInfo: demographics,
    // clothes key with clothes parameter as value
    clothes: clothes,
    // exterior key with fur parameter as value
    exterior: fur,
    // cost key with static value of 49.99
    cost: 49.99,
    // sayings key with array value including greeting and powerSayings variables and string as value.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // isCuddly key with true value.
    isCuddly: true,
  };
// Return the builtBear information
  return builtBear
}
// Calling the BuildABear function passing five specific arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calling the BuildABear function passing five specific arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declaring function fizzBuzz with three parameters
function fizzBuzz(num1, num2, range) {
  // equal to the range parameter.
  for (var i = 0; i <= range; i++) {
    // If the modulus of i divided by parameter num1 strictly equals 0 and the modulus of i divided
    // by the parameter num2 strictly equals 0
    if (i % num1 === 0 && i % num2 === 0) {
      // If the if statement evaluates to true for both, 'fizzbuzz' will log to the console.
      console.log('fizzbuzz');
      // If the modulus of i divided by paramenter num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      // If the else if statement evaluates to true, 'fizz' will log to the console.
      console.log('fizz');
      // If the modulus of i divided by the paramenter num2 evaluates to strictly 0
    } else if (i % num2 === 0) {
      // If the else if statement evaluates to true, 'buzz' will log to the console.
      console.log('buzz');
      // The else condition of the loop
    } else {
      // If the other conditions do not evaluate to true, i will log to the console.
      console.log(i);
    }
  }
}
// Calls the fizzBuzz function passing three arguments
fizzBuzz(3, 5, 100);
// Calls the fizzBuzz funtion passing three arguments
fizzBuzz(5, 8, 400);
