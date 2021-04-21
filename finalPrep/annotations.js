// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//declare a function called buildABear that takes in five parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // declare a variable, greeting, and assigns a value which interpolates a string greeting with parameter name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable, demographics, which is assigned a array value that holds parameters name and age
  var demographics = [name, age];
  //declare variable powerSaying and assigns in a string value that concatinates a string with parameter specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare a variable builtBear and assigns in it a value of an object
  var builtBear = {
    //assign key basicInfo to value of parameter demographics
    basicInfo: demographics,
    //assign key clothes to value of paramter clothes
    clothes: clothes,
    //assign key exterior to value of parameter fur
    exterior: fur,
    //assign key cost the value of 49.99
    cost: 49.99,
    //assign key sayings the value of an array which holds the parameters greeting, powerSaying, and a string "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //assign key isCuddly a boolean value of true
    isCuddly: true,
  };
  //returns the object builtBear
  return builtBear
}

//calls the funtion buildABear with the arguments 'Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//calls the function buildABear with the arguments 'Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//declare function fizzBuzz which takes three parameters: num1, num2, range
function fizzBuzz(num1, num2, range) {
  //define a loop which iterates from 0 to the value of parameter range, and for each number(i)
  for (var i = 0; i <= range; i++) {
    //check condition: if the remainder of i divided by num1 equals 0 and if the remainder of 1 divided by num2 equals zero
    if (i % num1 === 0 && i % num2 === 0) {
      //log 'fizzbuzz' to the console
      console.log('fizzbuzz');
    //check next condition: if the remainder of i divided by num1 equals 0
    } else if (i % num1 === 0) {
      //log 'fizz' to the console
      console.log('fizz');
    //check next condition: if the remiander of i divided by num2 equals 0
    } else if (i % num2 === 0) {
      //log 'buzz' to the console
      console.log('buzz');
    //otherwise (if none of the above conditions are met)
    } else {
      //log the value of i
      console.log(i);
    }
  }
}

//call the function fizzBuzz with the arguments 3, 5, 100
fizzBuzz(3, 5, 100);
//call the function fizzBuzz with the arguments 5, 8, 400
fizzbuzz(5, 8, 400);
