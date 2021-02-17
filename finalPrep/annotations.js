// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare a function buildABear with five parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable, greeting, and assign it a string that interpolates the name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
 // Declare a variable, demographics, and assign it an array that includes the name and age parameters
  var demographics = [name, age]
 // Declare a variable, powerSaying, and assign it a string that concatenates specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
 // Declare a variable, builtBear, and assign it an object with 6 key-value pairs.
  var builtBear = {
    // Declare a key-value pair for the object builtBear and assign it the value of the variable demographics
    basicInfo: demographics,
    // Declare a key-value pair for object buildBear and assign it a value of the clothes variable
    clothes: clothes,
    //Declare a key-value pair and assign it the value of the variable fur.
    exterior: fur,
    // Declare a key-value pair and assign it the integer 49.99
    cost: 49.99,
    // declare a key-value pair and and assign it an array that include a string, and the greeting and powersaying variables.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Declare a key-value pain and assign it to a boolean, true.
    isCuddly: true,
  }
  // Print the object, builtBear and all of it's key-value pairs.
  return builtBear
}

//Create an instance of the Class and assign arguments for the parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
// Create an instance of the Claa BuildABear and assign arguments for the parameters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
// Declare a function, fizzBuzz and assigh it three parameters (num1,num2, range)
function fizzBuzz(num1, num2, range) {
  // Declare a loop to check three conditions
  for (var i = 0; i <= range; i++) {
    //Condition1 - if it evaluates to true, then we run the codeblock and log 'fizzbuzz'
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz')
    // if consition 1 evaluates to false, then condition 2 is checked and if true the codeblock runs.
    } else if (i % num1 === 0) {
      console.log('fizz')
    // If conditions 1 and 2 are false, condition 3 is checked and if true the codeblock runs.
    } else if (i % num2 === 0) {
      console.log('buzz')
    // If none of the previous conditions are true, then this codeblock runs.
    } else {
      console.log(i)
    }
  }
}

// Print the function with values of 3,5,100 for the parameters
fizzBuzz(3, 5, 100)
// Print the function with values of 5,8,400 for the parameters.
fizzbuzz(5, 8, 400)
