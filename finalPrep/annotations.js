// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is a function with five parameters; name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable named greeting - value is a string with the name parameter interpolated in it
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare a variable named demographics - value is an array with the name and age parameters inside of it
  var demographics = [name, age];
  // Declare a variable named powerSaying - value is a string with the parameter specialPower concatenated into it
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare an object named builtBear and open curly brackets
  var builtBear = {
    // Add key/value pair with the key of basicInfo and the value as the demogrphics variable
    basicInfo: demographics,
    // Add key/value pair with the key of clothes and the value as the clothes parameter
    clothes: clothes,
    // Add key/value pair with the key of exterior and the value of the fur parameter
    exterior: fur,
    // Add key/value pair with the key cost and the value as the floating point number 49.99
    cost: 49.99,
    // Add key/value pair with the key sayings and the value as an array that includes the greeting variable,
    //the powersaying variable, and a string of "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Add key/value pair with the key isCuddly and the value as a boolean of true
    isCuddly: true,
  // Close the object's curly brackets
  };
  // When the function is called it will return the object builtBear value
  return builtBear
 // Close the function's curly brackets
}
// Invoke the function buildABear with name="Fluffy", age=4, fur="brown", clothes=["pants","jorts","tanktop"],
// and specialPower="give you nightmares"
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Invoke the function buildABear with name="Sleepy", age=2, fur="purple", clothes=["pajamas","sleeping cap"],
// and specialPower="sleeping in"
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');




//FizzBuzz

// This is a function with three parameters: num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // Create a for loop with initialization at 0, condition of less than or equal to the range parameter,
  // and an increment++ operator
  for (var i = 0; i <= range; i++) {
    // Create if statemt with a logical && operator that if the remander of i % num1 is strictly equal
    // to 0 AND the remander of i % num2 is strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      // If statement is true log the string 'fizzbuzz'
      console.log('fizzbuzz');
    // Create else if statement that the remainder of var i % num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      // If statement is true log the string 'fizz'
      console.log('fizz');
    // Create else if statement that the remainder of var i % num2 is strictly equal to 0
    } else if (i % num2 === 0) {
      // If statement is true log the string 'buzz'
      console.log('buzz');
    // Create else statement for all other outcomes
    } else {
      // For all other outcomes log the variable i
      console.log(i);
    // Close else curly brackets
    }
  // Close for loop curly brackets
  }
// Close function curly brackets
}
// Invoke the function fizzBuzz with the parameters: num1=3, num2=5, range=100
fizzBuzz(3, 5, 100);
// Invoke the function fizzBuzz with the parameters: num1=5, num2=8, range=400
fizzbuzz(5, 8, 400);
