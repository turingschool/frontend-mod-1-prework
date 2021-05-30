// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is a function with 5 parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  // declare a variable of greeting assigned to a value of a string with an interpolation of name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable of demographics assigned to an array containing two elements.
  var demographics = [name, age];
  // declare a variable of powerSaying assigned to a string with concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare an object with 6 properties utilizing both dynamic and static key-value pairs.
  var builtBear = {
    // a property with dynamic instance connected to the demographics variable
    basicInfo: demographics,
    // a property with a dynamic instance connected to the clothes variable
    clothes: clothes,
    // a property with a dynamic instance connected to the fur parameter.
    exterior: fur,
    // a property with a static instance with the value of an integer
    cost: 49.99,
    // a property with a dynamic instance connected to a variable and a string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // a property with a value of a Boolean.
    isCuddly: true,
  };
//A method used to define  what the object will do.
  return builtBear
}
// the information that is seen as output when the code is run
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// a function with  a loop and if/else if statements to determine to output based on the conditional statements.
function fizzBuzz(num1, num2, range) {
  // The loop that is run.
  for (var i = 0; i <= range; i++) {
    // if condition to be verified
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // the next condition to verify if the fist was not confirmed
    } else if (i % num1 === 0) {
      console.log('fizz');
      // the next condition to verify if the first two were not confirmed
    } else if (i % num2 === 0) {
      console.log('buzz');
      // what is logged if none of the above conditions match.
    } else {
      console.log(i);
    }
  }
}
// the information that is seen as output when the code is run
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
