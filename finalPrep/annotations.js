// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Groups the properties of the Build a Bear.
function buildABear(name, age, fur, clothes, specialPower) {
  // Greeting string using bear's name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Gives name and age of bear.
  var demographics = [name, age];
  // Logs string about bear's special power.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Object designating parts of building a bear.
  var builtBear = {
    // Info refering to the demographics given.
    basicInfo: demographics,
    // The clothes the bear will have.
    clothes: clothes,
    // Color of the bear's fur.
    exterior: fur,
    // Cost of the bear.
    cost: 49.99,
    // Different voicelines the bear will have.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Is the bear cuddly?
    isCuddly: true,
  };
  // Log the finished bear.
  return builtBear
}
// Bear will be named Fluffy, is 4 years old, has brown fur, is wearing pants, jorts, and a tanktop, and will give you nightmares as his special power.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Bear will be named Sleepy, is 2 years old, has purple fur, is wearing pajamas and a sleeping cap, and sleep in as his special power.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// A function called fizzBuss with parameters of num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // The iteration will start at 0 and if the number of iterations is less than or equal to the range, then it will run again and add 1 to iteration count.
  for (var i = 0; i <= range; i++) {
    // If the iteration divided by num1 is equal to 0 and the iteration divided by num2 is equal to 0 then the result will be logged as a fizzBuzz.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // If only the iteration divided by num1 equals 0, then the result will log at fizz.
    } else if (i % num1 === 0) {
      console.log('fizz');
      // If only the iteration divided by num2 equals 0, then the result will log as buzz.
    } else if (i % num2 === 0) {
      console.log('buzz');
      // If none of the above statements trigger, then the iteration number will be logged.
    } else {
      console.log(i);
    }
  }
}
// First fizzbuzz has num1 as 3, num2 as 5, and the range as 100.
fizzBuzz(3, 5, 100);
// Second fizzbuzz has num1 as 5, num2 as 8, and the range as 400.
fizzbuzz(5, 8, 400);
