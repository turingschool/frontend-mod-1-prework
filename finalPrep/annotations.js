// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // Building a function with the consitituent parameters.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // This argument uses the name parameter to deliver a bear specific greeting
  var demographics = [name, age];
  //This argument categorizes bears by name and age, for easy record keeping
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //This argument is a string of dialogue customized with thebear's power
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//This final argument is an object, containing the necessary elements of a completed bear
  return builtBear
  //This command allows us to access the data of the object
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
//these are specific bears with values assigned to their constructor arguments




//FizzBuzz
function fizzBuzz(num1, num2, range) {
  //the function fizzbuzz is constructed with two numbers and a range
  for (var i = 0; i <= range; i++) {
  //variable i is a number; it's less than or equal to the range; and it repeats until finished
    if (i % num1 === 0 && i % num2 === 0) {
      //if the modulo of i and BOTH numbers is absolutely zero
      console.log('fizzbuzz');
      //the computer will return fizzbuzz
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if only the first number's modulo is equal to zero the computer will return fizz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //if only rhe second number's modulo with i is 0 it will return buzz
    } else {
      console.log(i);
      //if neither number's modulo is equal to zero the computer will return the number
    }
  }
}

fizzBuzz(3, 5, 100);
// we're asking for every number between 1 & 100 to find which ones evenly divide into 3 or 5
fizzbuzz(5, 8, 400);
// we're asking for every number between 1 and 400 to find which ones evenly divide into 5 or 8
