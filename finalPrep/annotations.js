// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declare function buildABear and assign 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // assign greeting to variable with the value of a string that interpolates var name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // assign demographics to variable with the value of an array with parameters name and age
  var demographics = [name, age];
  // assign powerSaying to a variable with the value of a string that concatenates var specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare builtBear object literal
  var builtBear = {
    // create key-value pair
    basicInfo: demographics,
    // create key-value pair
    clothes: clothes,
    // create key-value pair
    exterior: fur,
    // create key-value pair with a static value of a number
    cost: 49.99,
    // create key-value pair with the value of an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // create key-value pair with the value of a Boolean
    isCuddly: true,
  };
  // print the values of builtBear
  return builtBear
}
// Call buildABear function by passing 5 arguments to the parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call buildABear function by passing 5 arguments to the parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//FizzBuzz
// Declare a function called fizzBuzz that has three paramenters
function fizzBuzz(num1, num2, range) {
  // create 'for' loop that initializes at 0, with a condition of 'i' being less than or equal to the parameter 'range', and an incrementer set at 'i = i + 1'
  for (var i = 0; i <= range; i++) {
    // 'if' the remainder of num1 into i equals 0 and the remainder of num2 into i equals 0, then the condition evaluates to true and execute the following code
    if (i % num1 === 0 && i % num2 === 0) {
      // log to console string 'fizzbuzz'
      console.log('fizzbuzz');
      // otherwise, if the remainder of num1 into i equals 0, the condition evaluates to true and execute the following code
    } else if (i % num1 === 0) {
      // log to the console string 'fizz'
      console.log('fizz');
      // otherwise, if the remainder of num2 into i equals 0, the condition evaulates to true, execute following code
    } else if (i % num2 === 0) {
      // log to console string 'buzz'
      console.log('buzz');
      // otherwise,
    } else {
      // log the value of 'i' to the console
      console.log(i);
    }
  }
}
// Call the function fizzBuzz by passing three arguments to the parameters
fizzBuzz(3, 5, 100);
// Call the function fizzBuzz by passing three arguments to the parameters
fizzBuzz(5, 8, 400);
