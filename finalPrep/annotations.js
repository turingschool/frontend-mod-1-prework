// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//Declaring a function called buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// Define mutiple variables of function

//Define variable "greeting" with an interpolation of name input
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Define demographic array for input
  var demographics = [name, age];
//Define powerSaying string with an concatenation for a specialPower input
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//Create a builtBear object with 6 key-value pairs
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// Allow function to assemble above variables/values
  return builtBear
}

//Lines 30 and 31 provide arguments to parameters of buildABear function
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Declare fizzBuzz function with three parameters
function fizzBuzz(num1, num2, range) {
//Create a "for loop" for values less than or equal to range in ascending order
  for (var i = 0; i <= range; i++) {
//First conditional statement if the modulus of num1 is strictly 0 AND the modulus of num2
// is strictly 0, the console will log "fizzbuzz."
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
//Second conditional statement that if the modulus of num1 is strictly 0
//the console will log "fizz."
    } else if (i % num1 === 0) {
      console.log('fizz');
//Third conditional statement that if the modulus of num2 is strictly 0,
//the console will log "buzz"
    } else if (i % num2 === 0) {
      console.log('buzz');
//Fourth/final conditional statement, any other result will log i (0)
    } else {
      console.log(i);
    }
  }
}
// Lines 52 and 53 provide arguments to parameters of fizzBuzz function
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
