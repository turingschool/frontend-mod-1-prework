// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;// This is an Interpolation//
  var demographics = [name, age]; // array //
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // This is a concatenation //
  var builtBear = { // Object creation //
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); // Instance 1 //
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // Instance 2 //



//FizzBuzz
function fizzBuzz(num1, num2, range) { // start of funciton //
  for (var i = 0; i <= range; i++) { // loop creation //
    if (i % num1 === 0 && i % num2 === 0) {  // first if value created //
      console.log('fizzbuzz'); // Log scenario 1 //
    } else if (i % num1 === 0) { // else if start for scenario 2 //
      console.log('fizz'); // Log scnario 2 //
    } else if (i % num2 === 0) { // else if start for scenario 3 /
      console.log('buzz'); // log for scenario 3 //
    } else { // finish of your if else statement //
      console.log(i); // log of initial if statement scenario //
    }
  }
}

fizzBuzz(3, 5, 100); /* function variables */
fizzbuzz(5, 8, 400);
