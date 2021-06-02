// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Creates a function called buildABear with 5 arguments: (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
// Creates a variable called greeting that interpolates the value of name into a string
// THe string says 'Hey Partner! My name is ${name}' - will you be my friend?'
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Creates a variable demographic with the value of an array of two elements: name, age
  var demographics = [name, age];
// Creates a variable powerSaying that holds the value of a string that concates the variable specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Creates an object called builtBear containing 6 key-value pairs
  var builtBear = {
// This key-value pair contains the variable demographics
    basicInfo: demographics,
// This key-value pair contains the variable clothes
    clothes: clothes,
// // This key-value pair contains the variable fur
    exterior: fur,
// this key-value pair contains an integer
    cost: 49.99,
// this key-value pair contains an array of variables and a strings
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// this key-value pair is a Boolean
    isCuddly: true,
// This curly bracket ends the builtBear variable
  };
// This calls the return of the object builtBear
  return builtBear
// This curly bracket ends the function
}
// Two different instances are being called with the inputted information: name, age, fur, clothes, specialPower)
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declares a function called fizzBuzz with 3 arguments (num1, num2, range)
function fizzBuzz(num1, num2, range) {
// creates a loop beginning at index 0, stopping when the value is < = range, and incrementing by 1
  for (var i = 0; i <= range; i++) {
    // sets parameters for the loop.
    // First parameter is if the remainder of i and num1 are equal to 0 and if the remainder of i and num3 are equal to 0
    // then log 'fizzbuzz'
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    // if the above parameter is not met then else if executes the next parameter
    // if the remainder of i and num1 is equal to 0 log "fizz"
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if the above parameters are not met, else if will exectute the following evaluation:
      // if the remainder of i and num2 is equal to 0
      // log "buzz"
    } else if (i % num2 === 0) {
      console.log('buzz');
      // if none of the parameters above are met else executes the final evaluation logging i
    } else {
      console.log(i);
    }
  }
}
// Two different instances are called using the arguments for num1, num2, range
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
