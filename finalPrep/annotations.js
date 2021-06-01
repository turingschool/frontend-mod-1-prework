// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// this is a function for buildABear that takes the following arguments: name,
// age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // both dynamic and sttatic values are used for the agruments. greeting states
  // introduces the name with strings using interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // dynamic values set for demographics
  var demographics = [name, age];
  // powerSaying uses concatenation to join strings and specialPower to ask a question
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// builtbear is stored in an object with the following arguments: basicInfo, clothes,
// exterior, cost(integer), sayings (array), isCuddly (boolean)
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// logs info in builtBear
  return builtBear
}
// adds values to dynamic arguments for buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// changes values to arguments for buildABear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// this is a function for fizzBuzz with 3 arguments
function fizzBuzz(num1, num2, range) {
// this is a loop for the range argument
  for (var i = 0; i <= range; i++) {
    // this is an if statement logging 'fizzbuzz' if i divided by num1 is exactly equal to 0
    // AND i divided by num2 is exactly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // this is an if statement logging 'fizz' if i divided by num1 is exactly
      // equal to 0
    } else if (i % num1 === 0) {
      console.log('fizz');
      // this is an iff statement logging 'buzz' if i divided by num2 is exactly
      // equal to 0
    } else if (i % num2 === 0) {
      console.log('buzz');
      // this is an if statement logging i if any other result is given
    } else {
      console.log(i);
    }
  }
}
// these are values for the arguments in fizzBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
