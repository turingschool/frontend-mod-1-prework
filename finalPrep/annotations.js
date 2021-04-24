// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Function with 5 arguements
function buildABear(name, age, fur, clothes, specialPower) {
  // Variable assigned interpolated sting containing name arguement
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Variable assigned an array containing name and age arguement
  var demographics = [name, age];
  // Variable assigned an concatenated string containing specialPower arguement
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Variable assigned an Object Literal containing 6 key: value pairs
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  // Returns variable assigned Object literal
  return builtBear
}

// Invokes function above, passing in arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Function with 3 arguements
function fizzBuzz(num1, num2, range) {
  // Loop with length determined by range arguement
  for (var i = 0; i <= range; i++) {
    // Conditional
    // Runs if i of the loop is both divisable by num1 and num2 arguements are strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    // Runs if i of the loop is only divisable by num1 strictly equal to 0
    } else if (i % num1 === 0) {
      console.log('fizz');
    // Runs if i of the loop is only divisable by num1 strictly equal to 0
    } else if (i % num2 === 0) {
      console.log('buzz');
    //Runs as a default returning i Variable
    } else {
      console.log(i);
    }
  }
}

// Invokes fizzBuzz function above
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
