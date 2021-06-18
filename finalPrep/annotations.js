// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//This function buildABear declares the string statements with the parameters()
function buildABear(name, age, fur, clothes, specialPower) {
  //Interpolates the parameter 'name' into the string statement. Variable declared within function
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Variable demographic stores an arrayed ordered list of data. Array will hold name and age.  Message displayed to user
  var demographics = [name, age];
  //Variable powerSaying concantenates the parameter specialPower into the string statement.  Message displayed to user
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Variable object builtBear, declares 6 key-value pairs which include values of string, booleans, floating point number.
  var builtBear = {
  //All properties below are object literals syntax
    //key: basicInfo, value: demographics
    basicInfo: demographics,
    //key:clothes, value: clothes
    clothes: clothes,
    //key: exterior, value: fur.
    exterior: fur,
    //key: cost, value: 49.99.  Amount in dollars
    cost: 49.99,
    //key: sayings, value: array with 3 list of values
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //key: isCuddly, value: boolean data type
    isCuddly: true,
  //end of code block for object builtBear.
  };
  //statement ends function and will return to the buildBear call
  return builtBear
//end of function buildABear
}
//Will call buildABear with parameters as arguments.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//function
function fizzBuzz(num1, num2, range) {
  //Condition will count to the range. If variable "i" is less than or equals to the range, add one.
  for (var i = 0; i <= range; i++) {
    //asking if i modulus num1 matches 0 and i modulus num2 matches 0.
    if (i % num1 === 0 && i % num2 === 0) {
      //print fizzBuzz
      console.log('fizzbuzz');
      //otherwise ask if i modulus num1 matches 0
    } else if (i % num1 === 0) {
      //print fizz
      console.log('fizz');
      //otherwise ask if i modulus num2 matches 0
    } else if (i % num2 === 0) {
      //print buzz
      console.log('buzz');
      //if all the above are false
    } else {
      //print 0.
      console.log(i);
    //end of else code block
    }
  //end of for loop of parameters of fizzBuzz function.
  }
//end of function
}
//call the arguments of the parameters inside fizzBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
