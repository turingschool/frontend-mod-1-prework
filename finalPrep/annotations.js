// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear keywords to the unique statments
function buildABear(name, age, fur, clothes, specialPower) {
 //Interpolating the name of the bear to the user
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //An array of the bear's name and age into the category of demographics
  var demographics = [name, age];
  //Concatentation statment of the bears superpower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //An object of the bears info
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//returns the function and the various statments
  return builtBear
}
//assigns the buildABear variables
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//reassigns the buildABear variables
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//states the conditions of the function keys
function fizzBuzz(num1, num2, range) {
 //declares a for loop
 //loops through increasing by one starting at 0 of the range
  for (var i = 0; i <= range; i++) {
   //requires that the condition must meet both num1 and num2
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //option that the module num1 must equal zero results in fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //option the module of num2 must equal zero results in buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //default is simply zero
    } else {
      console.log(i);
    }
  }
}
//assigns the conditions variables for the function keys
fizzBuzz(3, 5, 100);
//reassigns the conditions variables for functions keys
fizzbuzz(5, 8, 400);
