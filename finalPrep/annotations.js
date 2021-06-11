// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear. Annotations appear below line of codes.

function buildABear(name, age, fur, clothes, specialPower) {
  //create a function named buildABear that takes in 5 paramenters
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare a string variable that takes in the name parameter
  var demographics = [name, age];
  // declare an array variable that takes in name and age as elements
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare  a string variable that takes in the specialPower parameter
  var builtBear = {
  // create an object named builtBear
    basicInfo: demographics,
  //assign demographics variable to key basicInfo
    clothes: clothes,
  // assign clothes parameter to key clothes
    exterior: fur,
  // assign fur parameter to key exterior
    cost: 49.99,
  // assign a number to key cost
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
  // assign an array to key sayings,array takes in variable greeting, powerSaying
    isCuddly: true,
  // assign a boolean value true to key isCuddly
  };
// end of object  builtBear
  return builtBear
  // output the object builtBear
}
// end of function

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// call function buildABear with 5 parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
// call function buildABear with a new set of paramenters



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // create a function fizzBuzz that takes in 3 parameters
  for (var i = 0; i <= range; i++) {
  // start a loop, with repeated times equal to the range parameter
    if (i % num1 === 0 && i % num2 === 0) {
  //if i is a multiple of both parameter num1 and num2
      console.log('fizzbuzz');
  // log a string to console
    } else if (i % num1 === 0) {
  // if i is not a multiple for both but only for num1
      console.log('fizz');
  // log a string to console
    } else if (i % num2 === 0) {
  // if i is not a multiple of num1 but a multiple for num2
      console.log('buzz');
  // log a string to console
    } else {
  // if i is not a multiple for either num1 or num2
      console.log(i);
  // log value of i to console
    }
  }
}

fizzBuzz(3, 5, 100);
// call function with 3 parameters
fizzbuzz(5, 8, 400);
// call function with a new set of paramenters
