// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Creates a function named "buildABear" that accepts five parameters (name, age, etc)
function buildABear(name, age, fur, clothes, specialPower) {
  //creates "greeting" variable as a string interpolating the "name" info
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //creates "demographics" variable, an array of name and age
  var demographics = [name, age];
  //creates "powerSaying" variable, with string concatinated with the "specialPower" info
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //creates "builtBear" variable, which is an object with six key-value pairs
  var builtBear = {
    //basicInfo key is defined with demographics value
    basicInfo: demographics,
    //clothes key is defined with clothes value
    clothes: clothes,
    //exterior key is defined with fur value
    exterior: fur,
    //cost key is defined with value of 49.99
    cost: 49.99,
    //sayings key is defined with array containing greeting info, powerSaying info, and a new string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //isCuddly key is defined as "true"
    isCuddly: true,
  };
//when function is called, returns the builtBear variable and associated info contained within its properties
  return builtBear
}

//invokes the buildABear function, passing in five arguments (name, age, etc).  Warning: its specialPower is giving nightmares.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//invokes the buildABear function, passing in five arguments to the function (name, age, etc).  This is a good sleepy-time bear.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Creates a function named "fizzBuzz" that accepts three parameters (num1, num2, range)
function fizzBuzz(num1, num2, range) {
  //creates a for loop that iterates through the 'range' parameter passed into the function, starting at value 0 incrementing by one each time and going until less than or equal to 'range' value
  for (var i = 0; i <= range; i++) {
    //if statement...if i modulo of num1 is strictly equal to zero _and_ if i modulo of num2 is strictly equal to zero it will run the next line
    if (i % num1 === 0 && i % num2 === 0) {
      //console logs "fizzbuzz" if the prior line conditions are both met
      console.log('fizzbuzz');
      //else if line check when prior if statement conditions aren't met.  This will check if i modulo num1 is strictly equal to zero and if so will run the following line of code
    } else if (i % num1 === 0) {
      //when condition of prior else if statement is met, will log "fizz" to the console.
      console.log('fizz');
      //else if line if prior if/else if line conditions not met.  Will check if i modulo of num2 is strictly equal to zero and if so will run next line of code
    } else if (i % num2 === 0) {
      //will log "buzz" to the console if prior else if condition met
      console.log('buzz');
      //final else statement will run next line of code if none of the prior if/else if statement conditions were met
    } else {
      //will log the value of [i] to the console
      console.log(i);
    }
  }
}
//Invokes the fizzBuzz function, passing in three arguments: 3 for num1, 5 for num2, and 100 for range.  This will iterate through each whole number between zero and 100
//checking whether the modulo is strictly equall to zero against num1 and num2 means that it will log "fizz" if the number is divisible by three, "buzz" if the
//number is divisible by five, and "fizzbuzz" if the number is divisible by both three and five.  If the number is not divisible by any, it will instead log the
//number (again, going from zero to 100).
fizzBuzz(3, 5, 100);
//The following line will attempt to invoke the fizzBuzz function, but since it refers to "fizzbuzz" with a lower case "b" it will fail.  Function names are
//case sensitive so the line will throw an error and not execute the function.
fizzbuzz(5, 8, 400);
