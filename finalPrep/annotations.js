// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare a function called buildABear which consists of 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // Within the function, the variable greeting is assigned a string value with the parameter name injected into the string using interpolation.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  // The variable demographic is declared and assigned an array containing the variables name and age
  var demographics = [name, age]
  // The variable powerSaying is declared and is assigned a string value concatenated with the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  //the variable builtBear is declared and assigned to an object with 6 keys.
  var builtBear = {
    //The basicInfo key is paired with the demographics variable
    basicInfo: demographics,
    //The clothes key is paired with the clothes variable
    clothes: clothes,
    //the exterior key is paired with the fur variable
    exterior: fur,
    //the cost key is paired with a float value
    cost: 49.99,
    //the sayings key is paired with an array which consists of string and two other variables
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //the isCuddly key is paired with the boolean value of true
    isCuddly: true,
  }
//The function returns the value of the variable builtBear
  return builtBear
}
//The buildABear function is called twice and the required arguments are passed into the function.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//The function fizzBuzz is declared and is given 3 parameters
function fizzBuzz(num1, num2, range) {
  //Within the function, a for loop is initiated which will loop one more time greater than the argument passed to the parameter called range. If range equals 6 then the loop will run 7 times.
  for (var i = 0; i <= range; i++) {
    //Within the for loop is an if statement which is evaluating if the remainder of the variable i divided by num1 is strictly equal to 0 and if the remainder of the variable i divided by num2 is strictly equal to 0. If both conditions evaluate to true, then the code block below will run.
    if (i % num1 === 0 && i % num2 === 0) {
      //the string "fizzbuzz" will be logged to the console if the if statement above is true
      console.log('fizzbuzz')
      //If the if statement is false, this else if statement will evaluate if the remainder of i divided by num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      //If the previous statement is true, the the string "fizz" will be logged to the console.
      console.log('fizz')
      //If the previous else if statement is false, then this else if statement will run. It evaluates if the remainder of i divided by num2 is strictly equal to 0.
    } else if (i % num2 === 0) {
      //If the previous statement is true then the string "buzz" will be logged to the console
      console.log('buzz')
      //If all of the previous statements are false, then the else statement will run.
    } else {
      //This will log to the console the value of i
      console.log(i)
      //The loop will then run again by incrementing the value of i by 1 and running the sequence of if statements again.
    }
  }
}
//the function fizzBuzz is called and passed a set of arguments
fizzBuzz(3, 5, 100);
//A function is called which has not been defined. It is likely that this function was supposed to be fizzBuzz
fizzbuzz(5, 8, 400);
