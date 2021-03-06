// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // takes in a name parameter, age, fur color, clothes array, and special power string.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //greeting using string interpolation
  var demographics = [name, age]; //set demographics variable with the name and age arguments passed in.
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //string concatenation used to set variable powerSaying
  var builtBear = { //set builtBear object key value pairs
    basicInfo: demographics, //set to demographics
    clothes: clothes, //set clothes to clothes array
    exterior: fur, //set exterior fur color
    cost: 49.99, //set price
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //set the things the bear can say
    isCuddly: true, //default boolean setting all buildABear values to true.
  };

  return builtBear // after all the arguments are passed in and assigned correctly return the bear object
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); //calling the buildABear function with 5 arguments and creating a new bear named Fluffy.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); //calling the buildABear function with 5 arguments and creating a new bear named Sleepy


//FizzBuzz
function fizzBuzz(num1, num2, range) {  //declaring a funciton called fizzBuzz that takes in three arguments, parameters are called num1, num2, and range
  for (var i = 0; i <= range; i++) { // execute for loop as many times as whats passed in as an argument to range
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz'); // if a number(i) in the range is divisible evenly by both num1 && num2 then print out 'fizzbuzz'.
    } else if (i % num1 === 0) {
      console.log('fizz');    //Otherwise, if (i) is only divisible by num1 then print out 'fizz'.
    } else if (i % num2 === 0) {
      console.log('buzz'); //Otherwise, if (i) is only divisible by num2 then print out 'buzz'.
    } else {
      console.log(i); //In any other situation, just print out the current value of i.
    }
  }
}

fizzBuzz(3, 5, 100); // runs the fizzBuzz function with the argument 3 for num1, 5 for num2, inside the range of 100.
fizzBuzz(5, 8, 400); // runs the fizzBuzz function with the argument 5 for num1, 8 for num2, inside the range of 400.
// Make sure that this is capitalized properly mate.
