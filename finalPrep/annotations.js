// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare a function named "buildABear" and set a list of properties to it inside the parentheses
function buildABear(name, age, fur, clothes, specialPower) {
// Decare a new variable named 'greeting' and set the value equal to a String that will include input from the 'name' property of the buildABear function. This will allow for dynamic data output based on the input.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// declare a new variable named 'demographics' and set equal to an array where the 0 index is a value of the 'name' property and the 1 index is the value of the 'age' property of the buildABear function.
  var demographics = [name, age];
// Declare new variable named 'powerSaying' and set equal to a string that will concatenate with data from the input value of the 'specialPower' property of the buildABear function.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declare a new object named 'builtBear'
  var builtBear = {
// declare key value pair. Key/name is 'basicInfo' and the value is the value of the variable 'demographics'
    basicInfo: demographics,
// declare key value pair. Key/name is 'clothes' and the value is the inputed value of the property 'clothes' from the buildABear function
    clothes: clothes,
// declare key value pair. Key/name is 'exterior' and the value is the inputed value of the property 'fur' from the buildABear function
    exterior: fur,
// declare key value pair. Key/name is 'fur' and the value is the number 49.99
    cost: 49.99,
// declare key value pair. Key/name is 'sayings' and the value is an array with the 3 index positions. 0 index value is the value of the variable "greeting", 1 index is the value of the variable 'powerSaying', and the 2 index position is a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// declare a key value pair. Key/name is 'isCuddly' and the value is a Boolean of TRUE
    isCuddly: true,
  };
// End function execution and return the value of builtBear.
  return builtBear
}
// call buildABear function and pass in the listed arguements through the function properties
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// call buildABear function and pass in the listed arguements through the function properties
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declare a function named 'fizzBuzz' and set a list of properties (num1, num2, range) to it inside the parentheses.
function fizzBuzz(num1, num2, range) {
// declare new conditional statement. In statement: declare new variable, "i", and assign value to 0. Check if the value of 'i', is less than or equal to the range value. Increment value of 'i' by 1.
  for (var i = 0; i <= range; i++) {
// Check if the remainder of 'i' divided by 'num1' is strictly equal to 0 AND the value of 'i' divided by 'num2' is strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
// If above condition is met, log 'fizzBuzz' to the console.
      console.log('fizzbuzz');
// If first condition not met, check if the value of 'i' divided by 'num1' is strictly equal to 0;
    } else if (i % num1 === 0) {
// If above condition is met, log 'fizz' to the console.
      console.log('fizz');
// If first and second conditions are not met, then check if the value of "i" is divided by 'num2' is strictly equal to 0.
    } else if (i % num2 === 0) {
// If above condition is met, log 'buzz' to the console.
      console.log('buzz');
// If none of the previous conditions were not met, log to the console the value of 'i'.
    } else {
      console.log(i);
    }
  }
}
//call fizzBuzz function and pass in the listed arguements of 3 (num1), 5 (num2), and 100 (range) through the function properties.
fizzBuzz(3, 5, 100);
//call fizzBuzz function and pass in the listed arguements of 5 (num1), 8 (num2), and 400 (range) through the function properties
fizzBuzz(5, 8, 400);
