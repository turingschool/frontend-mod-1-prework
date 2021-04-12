// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// call function buildABear with arguments of name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
// define variable greeting with string interpolated with name variable
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// define variable demographics as an array of other variables name & age
  var demographics = [name, age];
// define variable powerSaying as string concatenated with specialPower variable
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// define vairable builtBear as an object
  var builtBear = {
// define key value pair with basicInfo as the key and the value as the variable demographics
    basicInfo: demographics,
// define key value pair with clothes as the key and the value as the variable clothes
    clothes: clothes,
// define key value pair with basicInfo as the key and the value as the variable fur
    exterior: fur,
// define key value pair with cost as the key and a value of the float number 49.99
    cost: 49.99,
// define key value pair with sayings as the key and the value as an array of the variable greeting, variable powerSaying and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// define key value pair with isCuddly as the key and the value of the boolean as true
    isCuddly: true,
  };
// instructs function to return builtBear object when called
  return builtBear
}

// call function buildABear on a bear with the given variable statements
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// call function buildABear on a bear with the given variable statements
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// call function fizzBuzz with arguments num1, num2, and range
function fizzBuzz(num1, num2, range) {
// run a for loop with the condition of intializing at index 0, running if it is less than the range variable, and increasing by 1 on the counter
  for (var i = 0; i <= range; i++) {
// evaluate the condition if index divided by num1 has a remainder exactly equal to 0 AND index divided by variable num2 has a remainder exactly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
// if the condition evaluates to true, log string to console
      console.log('fizzbuzz');
// evaluate the condition if index divided by variable num1 has a remainder exactly equal to 0
    } else if (i % num1 === 0) {
// if the condition evaluates to true, log string to console
      console.log('fizz');
// evaluate the condition if index divided by variable num2 has a remainder exactly equal to 0
    } else if (i % num2 === 0) {
// if the condition evaluates to true, log string to console
      console.log('buzz');
// if no previous conditions log to true
    } else {
// log the index number to console
      console.log(i);
    }
  }
}
// call the function fizzBuzz with the given numbers as arguments
fizzBuzz(3, 5, 100);
// call the function fizzBuzz with the given numbers as arguments
fizzbuzz(5, 8, 400);
