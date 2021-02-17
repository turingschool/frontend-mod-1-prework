// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //declaring a function named buildAbear with 5 parameters)
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!` //declaring a variable called greeting with a value of a string with interpolation
  var demographics = [name, age] // declaring another variable here that has a value of array.
  var powerSaying = "Did you know that I can " + specialPower + " ?" //declaring a variable with a value of string with concatenation
  var builtBear = { //declaring a variable with a value of an object with key-value pairs
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }

  return builtBear //calling the key-value pairs to log? 
} //function closing

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares') //calling the function name  and giving it arguments 
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in') //calling the function name and giving it new arguments



//FizzBuzz
function fizzBuzz(num1, num2, range) { //the name of the function is fizzBuzz and it has 3 parameters
  for (var i = 0; i <= range; i++) { //this is a for loop; var is called i which starts at 0; the loop will continue as long as i is less than or equal to range; it will incerement by one each time it loops.
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

fizzBuzz(3, 5, 100) //calling the function name and giving it 3 arguments
fizzbuzz(5, 8, 400) //calling the function name and giving it 3 new arguments
