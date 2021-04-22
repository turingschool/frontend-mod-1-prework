// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable 'greeting' assign it to a string that uses interpolation to include the 'name'
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declare a variable 'demographics' that is an array with the values 'name' and 'age'
  var demographics = [name, age];
//declare a variable 'powerSaying' assigning it to a string that uses concatenation to include the 'specialPower'
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//declare a variable 'builtBear' assigned to an object with the following key/values
  //basicInfo (string)
  //clothes (string)
  //exterior (string)
  //cost (number)
  //sayings (array)
  //isCuddly (boolean)
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//return the builtBear
  return builtBear
}
//performs the function buildABear with 2 different sets of data
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

//creates function fizzBizz that accepts 3 arguments
function fizzBuzz(num1, num2, range) {
//this for loop starts with a index at 0, runs as long as the index is less than
// or equal to the value of range, and index increases by 1 each pass
  for (var i = 0; i <= range; i++) {
//if the remainder of index divided by num1 is exactly equal to 0 AND num2 is
// exactly equal to 0, then logs fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// else if the remainder of index divided by num1 is exactly equal to 0 then logs fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
// else if the remainder of the idex diveded by num2 is exactly 0, then logs buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
//else log the index
    } else {
      console.log(i);
    }
  }
}

// performs the function fizzBuzz with 2 different sets of data
fizzBuzz(3, 5, 100);

fizzBuzz(5, 8, 400);
