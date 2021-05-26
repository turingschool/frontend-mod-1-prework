// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declares a function buildABear and it's 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// declares greeting variable and assigns it to a string with the name parameter interpolated.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// declares demographics variable assigned to the name and age parameters
  var demographics = [name, age];
// declares powerSaying variable assigned to a string with the specialPower parameter interpolated.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declares builtBear object variable, with six key-value pairs.
  var builtBear = {
// the basicInfo key is assigned to the value of the parameter demographics.
    basicInfo: demographics,
//  the clothes key is assigned to the value of the parameter clothes.
    clothes: clothes,
// the exterior key is assigned to the value of the parameter fur.
    exterior: fur,
// the cost key is assigned to the value of 49.99
    cost: 49.99,
// the sayings key is assigned to an array with the parameters greeting and powerSaying, and a string "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// the isCuddly key is assigned to the boolean value of true.
    isCuddly: true,
  };
// ends function and returns the builtBear object
  return builtBear
}

// calls the buildABear function with the assgined arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// calls the buildABear function with the assgined arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declares a function fizzBuzz and it's 3 parameters
function fizzBuzz(num1, num2, range) {
// declares a loop that will run until i is less or equal to the range
  for (var i = 0; i <= range; i++) {
// starts if statement with the condition: if the modulo of num1 and i is equal to 0 AND the modulo of num2 and i equals 0,
// logs the string 'fizzbuzz'
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// else if the modulo of num1 and i is equal to 0,
// logs the string 'fizz'
    } else if (i % num1 === 0) {
      console.log('fizz');
// else if the modulo of num2 and i is equal to 0,
// logs the string 'buzz'
    } else if (i % num2 === 0) {
      console.log('buzz');
// else log i
    } else {
      console.log(i);
    }
  }
}
// calls the fizzBuzz function with the assigned arguments for the three parameters
fizzBuzz(3, 5, 100);
// calls the fizzBuzz function with the assigned arguments for the three parameters
fizzBuzz(5, 8, 400);
