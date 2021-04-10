// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare function buildABear and list some parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare variable greeting and assign it to a string with variable name interpolated into it.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare variable demographics and assign it to an array of variables.
  var demographics = [name, age];
  // Declare variable powerSaying and assign it to a string that uses concatenation and the
  // variable specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare variable builtBear and assign it to an object, with properties.
  var builtBear = {
    // These first three properties are dynamic.
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    // This property is assigned to an integer.
    cost: 49.99,
    // This property is assigned to an array of variables and a string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // This property is assigned to a boolean value.
    isCuddly: true,
  };
  // Return the builtBear object to the caller.
  return builtBear
}
// Call function to build a bear with the following properties in the parentheses.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call function to build a bear with the following properties in the parentheses.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declare function fizzBuzz and give it some parameters.
function fizzBuzz(num1, num2, range) {
  // Declare a loop, with the counter starting at 0 and going up by one until i is greater
  // than the value for range.
  for (var i = 0; i <= range; i++) {
    // Declare an if statement, if modulo of i into num1 AND the modulo of i into num2 is
    // both 0, then...
    if (i % num1 === 0 && i % num2 === 0) {
      // Log the string 'fizzbuzz' to the console.
      console.log('fizzbuzz');
      // If the above is not satisfied, and the modulo of i into num1 is equal to 0, then...
    } else if (i % num1 === 0) {
      // Log the string 'fizz' to the console.
      console.log('fizz');
      // If the above condition is not satisfied, and the modulo of i into num2 is equal to
      // 0, then...
    } else if (i % num2 === 0) {
      // Log the string 'buzz' to the console.
      console.log('buzz');
      // If all of the above conditions are not satisfied, then...
    } else {
      // Log the value of i to the console.
      console.log(i);
    }
  }
}
// Call the function fizzBuzz with num1 = 3, num2 = 5, and range = 100.
fizzBuzz(3, 5, 100);
// Call the function fizzBuzz with num1 = 5, num2 = 8, and range = 400.
fizzBuzz(5, 8, 400);
