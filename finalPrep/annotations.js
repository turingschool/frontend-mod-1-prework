// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare a function buildABear, it takes 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  //variable called greeting assigned to a string interpolated with name param
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  //variable called demographics assigned to an array with 2 items
  var demographics = [name, age]
  //variable called powerSaying assigned to string interpolated with
  //specialPower param
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  //variable called builtBear assigned to object literal with 6 key-value pairs
  var builtBear = {
    //property called basicInfo given value of demographics variable
    basicInfo: demographics,
    //propery called clothes given value of clothes param
    clothes: clothes,
    //property exterior given value of fur param
    exterior: fur,
    //property called cost given value of integer
    cost: 49.99,
    //property called sayings given value of array containing 3 items, including
    //2 variables (greeting and powerSaying) and 1 string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //property called isCuddly given boolean value of true
    isCuddly: true,
  }
  //return builtBear when this function is run
  return builtBear
}
//invoking the function buildABear with arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//invoking the function buildABear with arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//declare a function fizzBuzz, it takes 3 parameters
function fizzBuzz(num1, num2, range) {
  //create for loop with initail value of zero for i, condition for iteration,
  //and increment by 1
  for (var i = 0; i <= range; i++) {
    //create conditional if statement with two conditions and logical AND
    //operator
    if (i % num1 === 0 && i % num2 === 0) {
      //print string when BOTH if conditions evaluate to true
      console.log('fizzbuzz')
      //else if part of condition statement with condition to evaluate
    } else if (i % num1 === 0) {
      //print string when condition evaluates to true
      console.log('fizz')
      //second else if part of condition statement with condition to evaluate
    } else if (i % num2 === 0) {
      //print string when condition evaluates to true
      console.log('buzz')
      //script executes this last code of condition statement when all other
      //conditions evaluate to false
    } else {
      //print value of i when script executes code block for else
      console.log(i)
    }
  }
}

//invoking the function fizzBuzz with arguments
fizzBuzz(3, 5, 100)
//invoking the function fizzBuzz with arguments
fizzbuzz(5, 8, 400)
