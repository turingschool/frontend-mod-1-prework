// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // Assigns the bear greeting and includes the name that is input in the argument.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Assigns the demographics to the arguments of the name and age into an array. 
  var demographics = [name, age];
  // Assigns the powerSaying to something the bear would say and includes the specialPower that was input from the argument.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Assign an object to builtbear
  var builtBear = {
    // Sets the key basicInfo to the value demographics from line 9
    basicInfo: demographics,
    // Sets the key clothes to the clothes input from the function argument
    clothes: clothes,
    // Sets the key fur to the fur value that is input from the function argument
    exterior: fur,
    // Sets the key cost to a hard coded value
    cost: 49.99,
    // Sets the key sayings to an array compiled of the greeting from line 7 the power saying from line 11 and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Sets the key isCuddly to the value of true hard coded
    isCuddly: true,
  };
// returns the built bear
  return builtBear
}
// this is building a bear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// this is building a bear  
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // This is saying run the code as long as it doesn't increment past what the range is set to in the function argument.
  for (var i = 0; i <= range; i++) {
    // Checks if the remainder of i modulo the value of num1 is equal to 0 and the remainder of i modulo the value of num2 is equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      // If the expression above is true then it will run this code block if not it will go to the next expression to check it.
      //logs the word fizzbuzz to the console.
      console.log('fizzbuzz');
      // If the expression above is not true checks if the remainder of i mod the value of num 1 is equal to 0.
    } else if (i % num1 === 0) {
      // If the expression above is true then it will run this code block if not it will go to the next expression to check it.
      //logs the word fizz to the console.
      console.log('fizz');
      // If the expression above is not true checks if the remainder of i mod the value of num 1 is equal to 0
    } else if (i % num2 === 0) {
      // If the expression above is true then it will run this code block if not it will go to the next expression to check it.
      //logs the word buzz to the console
      console.log('buzz');
      // If none of the other expressions evaluate to true this else statement code block will run
    } else {
      // Logs the value of i to the console
      console.log(i);
    }
  }
}

//sets the argument values to the function and runs the for loop
fizzBuzz(3, 5, 100);
//sets the argument values to the function and runs the for loop
fizzbuzz(5, 8, 400);