// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// We are writing a function named buildABear with 5 arguments: name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // Defining the variable greeting: It is a string with the name argument interpolated inside
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  // Defining the variable demographics: It is an array that contains the name and age arguments
  var demographics = [name, age]
  // Defining the variable powerSaying: It is a string that has the specialPower argument concatenated inside
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  // Defining the variable builtBear: It is an object containing 6 key-value pairs of data
  var builtBear = {
    // key = basicInfo, value = demographics array defined above
    basicInfo: demographics,
    // key = clothes, value = clothes argument
    clothes: clothes,
    // key = exterior, value = fur argument
    exterior: fur,
    // key + cost, value = 49.99
    cost: 49.99,
    // key = sayings, value = array containing greeting and powerSaying variables, as well as a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // key = isCuddly, value = true
    isCuddly: true,
    // End of the builtBear variable declaration
  }
// Ends the function and returns the value of the builtBear variable?
  return builtBear
  // End of buildABear function
}
// Calling the function buildABear with unique arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
// Calling the function buildABear with different arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
// Writing a function named fizzBuzz with 3 arguments
function fizzBuzz(num1, num2, range) {
  // Starting a loop, beginning at i = 0, continuing while i <= range argument, and incrementing i by one
  for (var i = 0; i <= range; i++) {
    // If i is evenly divisible by num1 AND evenly divisible by num2...
    if (i % num1 === 0 && i % num2 === 0) {
      // fizzbuzz will be logged to the console at that value of i
      console.log('fizzbuzz')
      // If i is evenly divisible by num1 only...
    } else if (i % num1 === 0) {
      // fizz will be logged to the console at that value of i
      console.log('fizz')
      // If i is evenly divisible by num2 only...
    } else if (i % num2 === 0) {
      // buzz will be logged to the console at that value of i
      console.log('buzz')
      // If i is not evenly divisible by num1 or num2...
    } else {
      // The value of i will be logged to the console
      console.log(i)
      // End of if statement
    }
    // End of "for" loop
  }
  // End of function declaration
}

// Calling function fizzBuzz, which will create a list of numbers starting at 0 and ending at 100
// Numbers evenly divisible by both 3 and 5 will be replaced with fizzbuzz
// Numbers evenly divisible by 3 will be replaced with fizz; evenly divisible by 5 will be replaced with buzz
fizzBuzz(3, 5, 100)
// Capitalization of the function name in this call is not consistent, so there is a Reference error
// Proper call should be fizzBuzz(5, 8, 400)
fizzbuzz(5, 8, 400)
