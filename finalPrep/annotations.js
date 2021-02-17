// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// function declared with parameters established
function buildABear(name, age, fur, clothes, specialPower) {
  //variable 'greeting' holds string data type with interpolation of name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  //variable 'demographics' holds array data of the name and age parameter
  var demographics = [name, age]
  //variable 'powerSaying' holds string data type with concatenation of special power parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  //variable 'builtBear' assigned to an object with key/values
  var builtBear = {
    //'basicInfo' key with a dynamic value of 'demographics'
    basicInfo: demographics,
    //'clothes' key with a dynamic value of 'clothes'
    clothes: clothes,
    //'exterior' key with a dynamic value of 'fur'
    exterior: fur,
    //'cost' key with a static value of '49.99'
    cost: 49.99,
    //'sayings' key with an array value of dynamic values and a static string value
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //'isCuddly' key with a boolean value of 'true'
    isCuddly: true,
  }
  //'return' statement ends function execution and specifies value to be returned
  return builtBear
}
//two different object instances with information for function parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//function declared 'fizzBuzz' with parameters
function fizzBuzz(num1, num2, range) {
  //'for loop' statement to start loop starting at the 0 index that will loop until it goes through 'range' by increments of 1
  for (var i = 0; i <= range; i++) {
    //if statement used to specify a block of code to be executed, if a statement condition is true. In this case, this is comparing two expressions with a logical operator (&&).
    if (i % num1 === 0 && i % num2 === 0) {
      //if both conditions return true, the console will log 'fizzbuzz'
      console.log('fizzbuzz')
      //if the first statement returns false, this 'else if' statment will run
    } else if (i % num1 === 0) {
      //if the 'else if' statment is true, the console will log 'fizz'
      console.log('fizz')
      //another 'else if' statement if the statement above returns false
    } else if (i % num2 === 0) {
      //if the 'else if' statment is true, the console will log 'buzz'
      console.log('buzz')
      //if no other statement before this 'else' statment returns true, it will console log the value of i
    } else {
      console.log(i)
    }
  }
}
//two different object instances with information for the function parameters
fizzBuzz(3, 5, 100)
fizzbuzz(5, 8, 400)
