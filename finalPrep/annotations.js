// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

function buildABear(name, age, fur, clothes, specialPower) { //declare a function named `buildABear` that has parameters //
  //'name', 'age', 'fur',
// 'clothes', and 'specialPower'.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; // assign a variable named greeting to a string by interpolation
  var demographics = [name, age]; //assign a variable named demographics to an array with elements for name and age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // assign a variable named powerSaying to create a string with concatenation
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true, //Assign a variable named builtBear to an object with parameters: basicInfo (string), clothes (string), exterior (string), cost (float), sayings (array), isCuddly (boolean).
  };

  return builtBear //Function returns object created by function
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); //calls buildABear function using values as arguments.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); //calls buildABear function using values as arguments.




//FizzBuzz
function fizzBuzz(num1, num2, range) { //declare function with parameters
  for (var i = 0; i <= range; i++) { //loop through items from 0 to range
    if (i % num1 === 0 && i % num2 === 0) { // Conditional statement
      console.log('fizzbuzz');
    } else if (i % num1 === 0) { //conditional statement - if remainder of i and num1 === 0, print fizz
      console.log('fizz');
    } else if (i % num2 === 0) { //conditional statement - if remainder of i and num2 === 0, print buzz
      console.log('buzz');
    } else { //conditional statement - executes if no other conditions above evalute to true.
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100); //calls fizzBuzz function
fizzBuzz(5, 8, 400);//calls fizzBuzz function
