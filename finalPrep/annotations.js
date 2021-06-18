// Add your annotations, line by line, to the code below using code comments.

// Use the double // to create a new comment

// Build a Bear

// Declare function `buildBear` with parameters `name`, `age`, `fur`, `clothes`, and `specialPower`
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare variable `greeting` and assign it a greeting template literal interpolating `name`
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare variable `demographics` and assign it array comprising `name` and `age`
  var demographics = [name, age];
  // Declare variable `powerSaying` and assign it question string interpolating `specialPower`
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare object `builtBear`
  var builtBear = {
    // Declare key `basicInfo` paired with value `demographics`
    basicInfo: demographics,
    // Declare key `clothes` paired with value `clothes`
    clothes: clothes,
    // Declare key `exterior` paired with value `demographics`
    exterior: fur,
    // Declare key `cost` paired with value `49.99`
    cost: 49.99,
    // Declare key `sayings` paired with value of array comprising `greeting`, `powerSaying`, and string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Declare key `isCuddly` paired with value `true`
    isCuddly: true,
  };
  // Return `builtBear`
  return builtBear
}

// Call function `buildABear` and pass in five arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call function `buildABear` and pass in five different arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');

//FizzBuzz

// Declare function `fizzBuzz` with parameters `num1`, `num2`, and `range`
function fizzBuzz(num1, num2, range) {
  // Assign current value to `i` and iterate from `0` to `range` in increments of 1, stopping when `i` exceeds `range`
  for (var i = 0; i <= range; i++) {
    // If both `i` modulo `num1` strictly equals `0` and `i` modulo `num2` strictly equals `0`
    if (i % num1 === 0 && i % num2 === 0) {
      // Log `'fizzbuzz'`
      console.log('fizzbuzz');
    // Otherwise, if `i` modulo `num1` strictly equals `0`
    } else if (i % num1 === 0) {
      // Log `'fizz'`
      console.log('fizz');
    // Otherwise, if `i` modulo `num2` strictly equals `0`
    } else if (i % num2 === 0) {
      // Log `'buzz'`
      console.log('buzz');
    // Otherwise
    } else {
      // Log `i`
      console.log(i);
    }
  }
}

// Call `fizzBuzz` passing in arguments `3`, `5`,  and `100`
fizzBuzz(3, 5, 100);
// Call `fizzBuzz` passing in arguments `5`, `8`,  and `400`
fizzBuzz(5, 8, 400);
