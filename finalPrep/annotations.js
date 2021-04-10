// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // declared the function buildABear with 5 parameters
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //declared the variable greeting with a string and used interpolation for the name value
  var demographics = [name, age]; //declared the demographics variable with an array that includes name and age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // declared variable powerSaying and concatenated with a string and the variable specialPower
  var builtBear = { // declared the object builtBear which is stored as a key-value pair (aka method)
    basicInfo: demographics, //(declared basicInfo Object)
    clothes: clothes, //declared the clothes Object
    exterior: fur, // declared th exterior Objects
    cost: 49.99, // declared the cost object which is an integer
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //declared the sayings objecjt which is an array with 2 objects and a string
    isCuddly: true, // declared the isCuddly object with the boolean true
  };

  return builtBear // stops the execution of the function and returns a value from that function
}


//both instances below show passing arguments through the parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
function fizzBuzz(num1, num2, range) { //function with 3 parameters
  for (var i = 0; i <= range; i++) { //creates a loop
    if (i % num1 === 0 && i % num2 === 0) { // if i and num1 equals zero AND i and num2 equals 0
      console.log('fizzbuzz'); // then print fizzBuzz
    } else if (i % num1 === 0) { // if i and num 1 equals 0
      console.log('fizz'); // then print fizz
    } else if (i % num2 === 0) {// if i and num2 equal 0
      console.log('buzz'); // then print buzz
    } else { // if none evaluate to above
      console.log(i);// then print i
    }
  }
}

//both instances below show passing arguments through the parameters
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
