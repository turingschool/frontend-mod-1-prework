// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// In this line a code, a function named buildABear contains five arguments
function buildABear(name, age, fur, clothes, specialPower) {
// In this line, the variable greeting is being declared with an interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//Variable demographics is being declared with two an array containing two arguments from above
  var demographics = [name, age]
// A variable powerSaying is being declared with a string containing a concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// An object literal named builtBear is being
  var builtBear = {
// this line has a key-value pair named basicInfo with a demographics variable
    basicInfo: demographics,
// This line has a key-value pair named clothes with a clothes variable
    clothes: clothes,
// This ilne has a key-value pair named exterior with a fur variable
    exterior: fur,
// This line has a key-value pair named cost with an integer variable
    cost: 49.99,
// This key-value pair, sayings is set as an array containing strings and other variables
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//A boolean named isCuddly is set as true
    isCuddly: true,
  }
//This line is asking to print/call the builtBear variable
  return builtBear
}
//This line is setting new parameters for the function
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//This line is setting new parameters for the function
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
// A function named fizzBuzz contains three parameters num1, num2, range
function fizzBuzz(num1, num2, range) {
// This code block is a loop, declaring variable i, setting the counter as range, and incrementing.
  for (var i = 0; i <= range; i++) {
//This lineo f code is using the modulo operator and setting a condition in an else if statement
    if (i % num1 === 0 && i % num2 === 0) {
// the function fizzBuzz is being printed
      console.log('fizzbuzz')
//This code shows an else if statement with a condition
    } else if (i % num1 === 0) {
// the string fizz is being printed/logged
      console.log('fizz')
// This is another condition set by an else if statement
    } else if (i % num2 === 0) {
// The string buzz is being printed
      console.log('buzz')
// This code is set to evaluate if the above conditions are false/not met
    } else {
//This code line prints  the variable i
      console.log(i)
    }
  }
}
// These are the arguments for the parameters from above
fizzBuzz(3, 5, 100)
//These are other sets of arguments for the parameters from above
fizzbuzz(5, 8, 400)
