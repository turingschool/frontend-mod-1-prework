// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Stablish a function called buildABear with a set of parameters.
function buildABear(name, age, fur, clothes, specialPower) {
// Create a variable called greeting and added value with an a concatenation.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
// Create a variable called demographics and added array.
  var demographics = [name, age]
// Create a variable called powerSaying and add value with a concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// Stablishin a Method
  var builtBear = {
// cCeate a new variable conected with a previous value.
    basicInfo: demographics,
// Create a new variable inside the object.
    clothes: clothes,
// Create a new variable inside the object.
    exterior: fur,
// Create a new variable inside the object.
    cost: 49.99,
// Create a new variable inside the object.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// Create a new variable inside the object.
    isCuddly: true,
  }
// Using a method to call a builtBear
  return builtBear
}
// Assign arguments to our parameters to the functions. (They change from one to other).
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  for (var i = 0; i <= range; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz')
    } else if (i % num1 === 0) {
      console.log('fizz')
    } else if (i % num2 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(3, 5, 100)
fizzbuzz(5, 8, 400)
