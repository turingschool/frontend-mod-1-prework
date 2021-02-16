// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//declare a function buildABear, that takes parameters of name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //declares a variable "greeting", a string that concatenates the name parameter into it
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  //declares a demographics array that containes the name & age parameters
  var demographics = [name, age]
  //declares a var powerSaying, a string that concatenates the specialPower parameter into it
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  //declares a variable builtBear, which is an object
  var builtBear = {
    //basicInfo is an array copied from the earlier demographics array
    basicInfo: demographics,
    //clothes is the clothes parameter
    clothes: clothes,
    //exterior is the fur parameter
    exterior: fur,
    //cost is a static value, equal to 49.99
    cost: 49.99,
    //sayings is an array that includes the greeting and powerSaying strings declared above, plus "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //isCuddly is a static value equal to true
    isCuddly: true,
  }

  //returns the builtBear item that was created
  return builtBear
}

//calls the buildABear function with the parameters below. This will create an object builtBear with basicInfo ["Fluffy", 4], clothes of ['pants', 'jorts', 'tanktop'], exterior 'brown', etc.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//same as the above-- calls the buildABear function with below parameters, which will create a builtBear object
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//declares a function fizzBuzz with parameters of num1, num2, and range
function fizzBuzz(num1, num2, range) {
  //start of for loop, as long as i (counter variable) is less than the range parameter, increase i by 1 every loop
  for (var i = 0; i <= range; i++) {
    //if the remainder of i divided by parameter num1 is 0 (if i is divisible by num1) AND the remainder of i divided by parameter num 2 is 0 (if i is divisible by num2)
    if (i % num1 === 0 && i % num2 === 0) {
      //print out 'fizzbuzz'
      console.log('fizzbuzz')
    //else if the remainder of i divided by num1 is 0 (if i is divisible by num1)
    } else if (i % num1 === 0) {
      //print out 'fizz'
      console.log('fizz')
    //else if the remainder of i divided by num2 is 0 (if i is divisible by num2)
    } else if (i % num2 === 0) {
      //print out 'buzz'
      console.log('buzz')
    //otherwise if none of the above are true
    } else {
      //print out the number that the counter i is currently on
      console.log(i)
    }
  }
}

//this will call the fizzBuzz function with parameters of 3, 5, and 100. starting at 0, if the counter is divisible by 3 it'll print "fizz", if it's divisible by 5 it'll print 'buzz', and if it's divisible by both it'll print "fizzbuzz", until it reaches 100
fizzBuzz(3, 5, 100)
//same as above, but with 5, 8, 400. If counter is divisible by 5 it'll print "fizz", if it's by 8 it'll print 'buzz', if both "fizzbuzz", until the counter reaches 400
fizzbuzz(5, 8, 400)
