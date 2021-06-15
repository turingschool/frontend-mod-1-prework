// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// creates a functrion called buildABear with the parameters name, age, fur, clothes, and specialPower and opens up the executable portion of the function
function buildABear(name, age, fur, clothes, specialPower) {
// creates a variable called greeting with a string as its value
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// creates a variable called demographics with an array of two parameters as its value
  var demographics = [name, age];
// creates a variable called powerSaying with a concatenated string as its value
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// creates an object called builtBear and opens up the definition portion of the object
  var builtBear = {
// creates a key pair called basicInfo with the variable demographics as its value
    basicInfo: demographics,
// creates a key pair called clothes with the variable clothes as its value
    clothes: clothes,
// creates a key pair called exterior with the variable fur as its value
    exterior: fur,
// creates a key pair called cost with 49.99 as its value
    cost: 49.99,
// creates a key pair called sayings with an array as its value (containing two variables and one string)
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// creates a key pair called isCuddly with the boolean expression of true as its value
    isCuddly: true,
// closes out the object definition
  };
// returns builtBear
  return builtBear
// closes out the function's executable code
}

// calls the function buildABear using three strings, one number, and one array (with three elements) as its arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// calls the function buildABear using three strings, one number, and one array (with two elements) as its arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// creates a function called fizzBuzz with the partameters num1, num2, and range and opens up the executable portion of the function
function fizzBuzz(num1, num2, range) {
// creates a loop that iterates from 0 to the parameter range in increments of one and opens executable portion of loop
  for (var i = 0; i <= range; i++) {
// creates first conditional of loop, asking if the current iteration of i's modulo of num1 is strictly equal to zero and if its modulo of num2 is also strictly equal to zero, then opens executable portion of first conditonal
    if (i % num1 === 0 && i % num2 === 0) {
// logs a string to the console
      console.log('fizzbuzz');
// closes executable portion of first conditional and creates second conditional of loop, asking if the current iteration of i's modulo of num1 is strictly equal to zero, then opens executable portion of second conditional
    } else if (i % num1 === 0) {
// logs a string to the console
      console.log('fizz');
// closes executable portion of second conditional and creates third conditional of loop, asking if the current iteration of i's modulo of num2 is strictly equal to zero, then opens executable portion of third conditional
    } else if (i % num2 === 0) {
// logs a string to the console
      console.log('buzz');
// closes executable portion of third conditional and creates final conditional of loop (to be executed if all other conditionals return false), then opens executable portion of second conditional
    } else {
// logs current iteration of i to the console
      console.log(i);
// closes executable portion of final conditional
    }
// closes executable portion of loop
  }
// closes executable portion of function
}

// calls the fuinction fizzBuzz with three numbers as arguments
fizzBuzz(3, 5, 100);
// calls the function fizzBuzz with three numbers as arguments
fizzbuzz(5, 8, 400);
