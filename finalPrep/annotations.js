// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//this is a function with 5 parameters as listed in parentheses
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable of greeting - value is a string with the name parameter interpolated in it
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable of demographics - value is an array with two of the parameters
  var demographics = [name, age];
  //declare a variable of powerSaying - value is a string with the specialPower parameter concatenated within string
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare a variable of builtBear - value is object with various key value pairs listed
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
 //When function is called, it will return the builtBear object values
  return builtBear
}
//call buildABear function with arguments as listed below
//call function which will output the various data types
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//This is a function named fizzBuzz with 3 parameters listed as num1, num2, and range
function fizzBuzz(num1, num2, range) {
  //add for loop with condition having the variable i set to 0 for the initialization, the condition
  //set to less than or equal to the parameter range, telling us the loop should continue to run until that
  //condition is met, and the incrementer added to add one everytime the loop has run the statements
  for (var i = 0; i <= range; i++) {
    //add if statement to check if modulo equals zero on both num1 and num2, if so, print fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //if first condition not met, check to see if modulo equals zero on num1, if so print fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if first two conditions not met, check to see if modulo equals zero on num2, if so print buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //print i or the number if none of these conditions are met
    } else {
      console.log(i);
    }
  }
}
//call function with set arguments to be inputted
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
