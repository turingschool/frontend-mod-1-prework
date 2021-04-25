// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is a function with 5 parameters (name,age,fur,clothes,specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable of greeting - value is a string with the name parameter interpolated in.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare a variable of demographics - value is an array with 2 parameters [name ,age ].
  var demographics = [name, age];
  //declare a variable of powerSaying - value is a string with a concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare a variable of builtBear that stores an object Literal that holds informations about builtBear
  var builtBear = {
    //declare a key-Value pair : key basicInfo with the value as demographics specific to builtBear
    basicInfo: demographics,
    //declare a key-Value pair : key clothes with the value as clothes specific to builtBear
    clothes: clothes,
    //declare a key-Value pair : key exterior with the value as fur specific to builtBear
    exterior: fur,
    //declare a key-Value pair : key cost with the value as a float number 49.99 specific to builtBear
    cost: 49.99,
    //declare a key-Value pair : key sayings with the value as an Array that contains a collections
    //of sayings with 2 variables and a string specific to builtBear
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //declare a key-Value pair : key isCuddly with the value as a Boolean true specific to builtBear
    isCuddly: true,
// curly Baces that closes the Object Linear
  };
// call the builtBear object 
  return builtBear
}
//call the function builtBear passing it the informations for the parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//call the function builtBear passing it the informations for the parameters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//this is a function with 3 parameters num1,num,2 and range.
function fizzBuzz(num1, num2, range) {
  //this is a loop that starts wit 0 count and goes until the loop count be less or equal to the range parameter.
  for (var i = 0; i <= range; i++) {
    //this is an If condition  with 2 conditions with a  Logical operator AND &&
    //(i is a module of num1 equals 0 AND  i module num2 equals zero) both conditions
    //need to be true for the code to run.
    if (i % num1 === 0 && i % num2 === 0) {
      //if both conditions are true the console will log "fizzbuzz"
      console.log('fizzbuzz');
      //if the condition is not met the computer will go to else if to check the condition :
      // i module num1 striclty equals 0
    } else if (i % num1 === 0) {
     // if this condition is true the computer will run the log and print fizz to the console
      console.log('fizz');
      // if the condition is not met the computer will go to this next condition :
      //i module num2 is striclty equal to 0
    } else if (i % num2 === 0) {
      //if the condition is true the computer will print buzz to the terminal.
      console.log('buzz');
      //if non of the conditions above are met the computer will run the else
    } else {
      // the computer will print to the log the value of i.
      console.log(i);
      //curly braces to indicate the closure of the if conditions
    }
    //curly braces to indicate the closure of the looping
  }
  //curly braces to indicate the closure of the function.
}
//call the function fizzBuzz passing in the information for  3 parameters
fizzBuzz(3, 5, 100);
//call the function fizzBuzz passing in the information for  3 parameters
fizzbuzz(5, 8, 400);
