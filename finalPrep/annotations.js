// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare function with dynamic inputs for name, age, fur, clothes, and specialPower.
function buildABear(name, age, fur, clothes, specialPower) {

  // Create string for greeting from the buildABear
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;

  // create string variable for name/age
  var demographics = [name, age];

  // create a powerSaying variable for the bear
  var powerSaying = "Did you know that I can " + specialPower + " ?";

  // create an object to express what a built buildABear has involved in it.
  var builtBear = {

    // make basicInfo = demographics variable as stated above
    basicInfo: demographics,

    //set clothes=clothes
    clothes: clothes,

    // set exterior=fur color
    exterior: fur,

    // set a price
    cost: 49.99,

    // set an array of phrases the bear will say
    sayings: [greeting, powerSaying, "Goodnight my friend!"],

    // set a boolean saying the bear is cuddly.
    isCuddly: true,
  };

  //returns builtBear to work along the next call to the function for use with chaining 
  return builtBear
}

//Define bear 1
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//define bear 2
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz =-= Had to lookup the i and what it means for this one.
// This declares a function with 3 inputs for integer datatypes. Includes num1 and num2 and range.
function fizzBuzz(num1, num2, range) {

// this will set a counter as i and start it at 0, make sure than i doesn't surpass the range set and, add one to i each iteration
  for (var i = 0; i <= range; i++) {

    //this declares an if statement checking if i is divisible by num1 and num2 with a remainder 0 log fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      //logs string fizzbuzz
      console.log('fizzbuzz');

    //this does the same as above but only checks for divisibility by num1 and if 0 remainder - log fizz
    } else if (i % num1 === 0) {
      //logs string fizz
      console.log('fizz');

      //this checks if i is divisible by num2 with remainder of 0 log buzz to console.
    } else if (i % num2 === 0) {
      //logs string buzz
      console.log('buzz');

  //This else statement logs i to the console after each loop as long as none of the other conditions above are met
    } else {
      console.log(i);
    }
  }
}

//these run the fizzbuzz function with arguments of the functions in the ()
fizzBuzz(3, 5, 20);
fizzBuzz(5, 8, 40);