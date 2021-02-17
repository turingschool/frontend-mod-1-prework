// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
// Create function buildABear, which takes in arguments for name, age, fur, clothes, and SpecialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
// Declare variable greeting that interpolates the argument name into a greeting starting
  var demographics = [name, age]
// Declare variable demographic that places the name and age arguments into an array
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// Declare variable powerSaying that concatenates the given string with the argument for specialPower
  var builtBear = {
// Declare variable builtBear that is an object with several key-value pairs pertaining to the builtBear
    basicInfo: demographics,
// assigns the variable demographics (which consists of the name and age arguments) to the value of the key basicInfo
    clothes: clothes,
// Assigns the clothes argument to the value of the key clothes
    exterior: fur,
// Assigns the fur argument to the value of the key exterior
    cost: 49.99,
// Assigns key cost to the value 49.99        
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// Assigns key sayings to the value of an array consisting of the variables greeting, powerSaying, and a new string
    isCuddly: true,
// Assigns key isCuddly to the boolean value of true
  }
  return builtBear
// Returns the object builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
// Call function buildABear with arguments for name, age, fur, clothes (which is an array), and specialPower
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
// Call function buildABear with new arguments for name, age, fur, clothes, and specialPower



//FizzBuzz
function fizzBuzz(num1, num2, range) {
// Declare a function fizzBuzz that takes 3 arguments for num1, num2, and range
  for (var i = 0; i <= range; i++) {
// Create for loop:
      // Initialization: var i = 0; Create counter variable i and set to 0. The variable is only created the first time the loop is return
      // Condition: i <= range; Loop should run until the counter variable i is equal to the length of the range
      // Update: i++; Every time the loop runs statements in curly braces, it adds one to the counter
    if (i % num1 === 0 && i % num2 === 0) {
      // Conditional if statement with two conditions:
      // If the modulus of num1 into i strictly equals 0
      // And if the modulus of num2 into i strictly equals 0
      console.log('fizzbuzz')
      // The console will log 'fizzbuzz'
    } else if (i % num1 === 0) {
      // If the first conditional is not met:
        // If just the modulus of num1 into i strictly equals 0
      console.log('fizz')
      // The console will log 'fizz'
    } else if (i % num2 === 0) {
      // If the first conditional is not met:
        // If just the modulus of num2 into i strictly equals 0
      console.log('buzz')
      // The console will log 'buzz'
    } else {
      // Else in all other situations
      console.log(i)
      //The console will log the value of variable i
    }
  }
}

fizzBuzz(3, 5, 100)
// i = 0
// num1 = 3
// num2 = 5
// range = 1000

// 0 % 3 === 0 && 0 % 5 === 0
// Console logs 'fizzbuzz')

//Next iteration:

// i = 1
// num1 = 3
// num2 = 5

// 1 % 3 === 1 && 1 % 5 === 1
// In both instances, they do not strictly equal 0, so the variable i is printed
// Console logs 1

//Next iteration:

// i = 2
// num1 = 3
// num2 = 5

// 2 % 3 === 1 && 2 % 5 === 2
// In both instances, they do not strictly equal 0, so the variable i is printed
// Console logs 2

//Next iteration:

// i = 3
// num1 = 3
// num2 = 5

// 3 % 3 === 0 && 3 % 5 === 3
// Because i % num1 strictly equals 0 but i % num2 does not, the second conditional is met
// Console logs 'fizz'

// The code continues until variable i is equal to the range, in this case 100.

fizzbuzz(5, 8, 400)

// Behaves the same as the previous call of fizzbuzz function, but with different arguments
// The code will iterate until the variable i is equal to the range, in this case 400.
// If in the sequence from 1 to 400 the result of i % num1 AND i % num2 is strictly equal to 0,
// the console will log the string 'fizzbuzz'. If only i % num1 is strictly equal to 0, the console logs
// 'fizz'. If only 1 % num2 is strictly equal to 0, the console logs 'buzz'. In all other instances, the
// console will log the value of variable i in sequence.
