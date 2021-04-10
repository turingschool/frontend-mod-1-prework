// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // Creating a variable with interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // variable with an array
  var demographics = [name, age];
  // variable with concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // object variable
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// returns the key value pair 
  return builtBear
}
// this is passing arguments throught the paramaters to create different instances of the bear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// a function with three paramaters
function fizzBuzz(num1, num2, range) {
  // this is creating the loop
  for (var i = 0; i <= range; i++) {
    //if the remainter of i and num1 equals 0 and the reamainder of i and num2 equal 0 then the console will log fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // if just the remainder of i and num1 equals 0 then the console will log fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if just the remainder of i and num 2 equal 0 then the console will log buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      // if none of those evaluate to true then the console will log i
    } else {
      console.log(i);
    }
  }
}
// this is two instances of passing arguments through the paramaters
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
