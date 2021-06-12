// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

// Build a Bear
// Declare a function `buildBear` with parameters `name`, `age`, `fur`, `clothes`, `specialPower`
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable `greeting` and assign it a greeting template literal interpolating `name` argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare a variable `demographics` and assign it an array comprising the arguments `name` and `age`
  var demographics = [name, age];
  // Declare a variable `powerSaying` and assign it a question string interpolating `specialPower`
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare an object `builtBear`
  var builtBear = {
    // Declare a key `basicInfo` paired with the value `demographics`
    basicInfo: demographics,
    // Declare a key `clothes` paired with the value `clothes`
    clothes: clothes,
    // Declare a key `exterior` paired with the value `demographics`
    exterior: fur,
    // Declare a key `cost` paired with the value `49.99`
    cost: 49.99,
    // Declare a key `sayings` paired with the value of an array comprising `greeting`, `powerSaying`, and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Declare a key `isCuddly` paired with the value `true`
    isCuddly: true,
  };
  // Return the value stored in `builtBear`
  return builtBear
}

// Call the function `buildABear` and pass in five arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call the function `buildABear` and pass in five different arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declare a function `fizzBuzz` that takes parameters `num1`, `num2`, and `range`
function fizzBuzz(num1, num2, range) {
  // Iterate from `0` to `range` in increments of 1 with the variable `i` representing the current value
  for (var i = 0; i <= range; i++) {
    // If both the remainder of `i` divided by `num1` strictly equals `0` and the remainder of `i` divided by `num2` strictly equals `0`
    if (i % num1 === 0 && i % num2 === 0) {
      // Log `'fizzbuzz'` to the console
      console.log('fizzbuzz');
    // Otherwise, if the remainder of `i` divided by `num1` strictly equals `0`
    } else if (i % num1 === 0) {
      // Log `'fizz'` to the console
      console.log('fizz');
    // Otherwise, if the remainder of `i` divided by `num2` strictly equals 0
    } else if (i % num2 === 0) {
      // Log `'buzz'` to the console
      console.log('buzz');
    // Otherwise
    } else {
      // Log `i` to the console
      console.log(i);
    }
  }
}

// Call `fizzBuzz` and pass in the arguments `3`, `5`,  and `100`
fizzBuzz(3, 5, 100);
// Call `fizzBuzz` and pass in the arguments `5`, `8`,  and `400`
fizzbuzz(5, 8, 400);
