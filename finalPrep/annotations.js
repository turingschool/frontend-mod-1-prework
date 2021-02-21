// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Stablish a function declaration called "buildABear" with different parameters.
function buildABear(name, age, fur, clothes, specialPower) {
// Create a variable  inside of the function called "greeting". Give the value of a string  with an interpolation values from the parameters of function.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
// Create a variable  inside of the function called "demographics". Give the value of an array with values from the parameters of function.
  var demographics = [name, age]
// Create a variable  inside of the function called "powerSaying". Give the value of a string  with a concatenation values from the parameters of function.
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// Stablishin a Method called "builtBear" inside of the function.
  var builtBear = {
// Create a property called "basicInfo" and assign the data value of the variable "demographics".
    basicInfo: demographics,
// Create a property called "clothes" and assign the data value of the parameter "clothes" from function parameters.
    clothes: clothes,
// Create a property called "exterior and assign the data value of the parameter "fur" from function parameters.
    exterior: fur,
// Create a property called "cost" and assign the data value of a float number.
    cost: 49.99,
// Create a property called "sayings" and assign the data value in an array. Assigning previous variables values and add a new string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// Create a propertie called "isCloudy" and assign the data value of a boolean on it.
    isCuddly: true,
// We close the "builtBear" object instances.
  }
// Stablishing a "return",in order to return the builtBear object out of the function.
  return builtBear
// We close the "buildABear" Function.
}
// Calling the function "buildABear" to assign arguments to the parameters. Is the same action in the next line, but with different arguments to the
// parameters in order have different results.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')


//FizzBuzz
// Stablish a function declaration called "fizzBuzz" with three parameters: num1, num2, range (All of them with Integer data types).
function fizzBuzz(num1, num2, range) {
// Create a "For Loop" inside the "fizzBuzz" Function. We use "var" to declare a variable called "i" (index) set it to 0, after this, we stablish a condition
// if  "i" less or equal to the parameter "range" proceeds to increment the value of "i" adding one to the loop sequence.
  for (var i = 0; i <= range; i++) {
// We stablish a conditional statement saying, if the remainder assigment result from the parameter num1 with i is equal to 0 AND if the remainder assigment
// result from the parameter num2 with i is equal to 0 in our For loop sequence result, then print out 'fizzbuzz'.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz')
// If the result from the For Loop sequence does not apply to our first statement, apply this new condition: if the remainder assigment result from the
// parameter num1 with i is equal to 0, then print out 'fizz'.
    } else if (i % num1 === 0) {
      console.log('fizz')
// If the result from the For Loop sequence does not apply to our first and second statement, apply this new condition: if the remainder assigment result
// from the parameter num2 with i is equal to 0, then print out 'buzz'.
    } else if (i % num2 === 0) {
      console.log('buzz')
// If the result from the For Loop sequence does not apply to our first, second  and third statement, then print the number from the for loop
// sequence that is running.
    } else {
      console.log(i)
// We close the "statements conditions"
    }
// We close the "For Loop"
  }
//We close the "fizzBuzz" Function.
}
// Calling the function "fizzBuzz" to assign arguments to the parameters. Is the same action in the next line, but with different arguments to the
// parameters in order have different For loop sequences.
fizzBuzz(3, 5, 100)
fizzbuzz(5, 8, 400)
