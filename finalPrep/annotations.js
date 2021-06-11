// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear class with a method (function to buildABear)
//function defined in camelCase to build a bear declared with dynamic properties/start of curly bracket defining js statement
function buildABear(name, age, fur, clothes, specialPower) {
//the variable greeting is declared with a pre-written greeting including an interpolation to print a question including the name from the function.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //the variable demographics is defined with dynamic properties for name and age
  var demographics = [name, age];
  //the variable powerSaying is declared with a concatenation to combine a string with another variable declared
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//the variable builtBear is defining an object with kay value pairs (mostly dynamic values,
//a few static values, and a combination, mixed with a string within an array)
  var builtBear = {
//properties key-value pair (dynamic)
    basicInfo: demographics,
    //propteries key-value pair (dynamic)
    clothes: clothes,
    //properties key-value pair (dynamic)
    exterior: fur,
    //properties key-value pair (static)
    cost: 49.99,
    //properties key-value pair (dynamic with a string in an array)
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //properties key-value pair (static) with a boolean property of true
    isCuddly: true,
//end of curly bracked that declared the function
  };
//the return statement ends this function and states the value to be returned (had to look this up)
  return builtBear
  //start of new curly bracket for calling the function
}
// Two object instances being called of the function above and because of dynamic values (name, age, fur, clothes, specialPower),
//the output will vary by the object instances called (in this case the two bears
//are with unique details to identify them apart)

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz program declared with the function fizzBuzz with the parameters of the function within ()
// and function statements have {around it}
function fizzBuzz(num1, num2, range) {
  //this is a for loop with an if else statment to answer the function being called below
  for (var i = 0; i <= range; i++) {
// first if statement with a specific console output if the condition within is met or the code will continue to run
    if (i % num1 === 0 && i % num2 === 0) {
//output displayed if this conditional statement is met by the conditions above
      console.log('fizzbuzz');
// second statement (this is an else if statement since the first if was not met if the code is running this one)
//with a specific console output if the condition within is met or the code will continue to run
    } else if (i % num1 === 0) {
  //output displayed if this statement is met by the conditions above and says fizz
      console.log('fizz');
// third statement (this is also an else if statement since the first if was not met if the code is running this one)
//with a specific console output if the condition within is met or the code will continue to run
    } else if (i % num2 === 0) {
      //output displayed if this statement is met by the conditions above and says buzz
      console.log('buzz');
//if nothing else meets the conditions set for by the function with the for loop, the code ends here
    } else {
//output displayed if of the other conditions met the function while running the code and says i (the variable defined in the for loop)
      console.log(i);
//close of curly brackets
    }
    //close of curly brackets
  }
  //close of curly brackets
}

//below are two different times the function above was passed which will pass the arguments
//through the for loop and output depending on which if, if else, else statment would be output through console log
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
