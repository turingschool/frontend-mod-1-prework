// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // a dynamic function being setup to describe the buildABear you create//
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;// This is an Interpolation used to create a variable of greeting.//
  var demographics = [name, age]; // an Array of demographics that can be dynamically changed due to the starting function//
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // This is a concatenation used to create a string with a variable that can be implemented. //
  var builtBear = { // Object creation for the single build bear. //
    basicInfo: demographics, //object dynamic array//
    clothes: clothes,//object dynamic arrray//
    exterior: fur,//object array//
    cost: 49.99,//object interger//
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//object dynamic array with string//
    isCuddly: true,//object boolean//
  };

  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); // Instance 1 for the dynamic function//
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // Instance 2 for the dynamic function//
// no log created?!?//


//FizzBuzz
function fizzBuzz(num1, num2, range) { // start of funciton //
  for (var i = 0; i <= range; i++) { // loop creation, the loop is going up by increments of 1. //
    if (i % num1 === 0 && i % num2 === 0) {  // first if value created, stateing i devision returns num1 is equal to 0. Retrun truth statement i devision return num2 is equal to 0 //
      console.log('fizzbuzz'); // console logs the fizzbuzz string when statement reaches true //
    } else if (i % num1 === 0) { // else if start for scenario 2, it states i devision return num1 is equal to 0 //
      console.log('fizz'); // console logs scenario 2 string fizz when num1 equals 0 //
    } else if (i % num2 === 0) { // else if start for scenario 3, it states i devision return num2 is equal to 0 //
      console.log('buzz'); // console logs scenario 3 string buzz when num2 is equal to 0  //
    } else { // finish of your if else statement. This will state the default of your string. //
      console.log(i); // console logs your i variable//
    }
  }
}

fizzBuzz(3, 5, 100); /* function variables */
fizzbuzz(5, 8, 400);
