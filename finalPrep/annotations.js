// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Declare a function called buildABear that takes in five arguments: name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //Declare four variables - greeting, demographics, powerSaying, and builtBear
  //greeting should be assigned to a string that uses concatenation that includes the argument for the bear's name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //domographics should be assigned to an array that includes the argument for the bear's name AND age.
  var demographics = [name, age];
  //powerSaying should be assigned to a string that uses concatenation that includes the argument for the bear's specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //builtBear should be assigned to an object with the following key/values:
    //basicInfo/ the demographics argument
    //clothes/ the clothes argument
    //exterior/ the fur argument
    //cost/ an integer of your choosing
    //saying/ an array that includes the greeting argument, powerSaying argument, and the string "Goodnight my friend!"
    //isCuddly/ a boolean of your choosing
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  //return to the console builtBear the variable
  return builtBear
}
//create two test cases for the buildABear function that include five paramaters that correspond to the arguments shown above
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//Create a function called fizzBuzz that takes three arguments: num1, num2, AND range
function fizzBuzz(num1, num2, range) {
  //create a for loop that will iterage over a range of numbers, incrementing by 1, beginning at zero and ending when the value reaches a number less than or equal to the range
  for (var i = 0; i <= range; i++) {
    //check to see if the current number is divisible by num1 AND divisible by num2
    if (i % num1 === 0 && i % num2 === 0) {
      //if the current number is divisible by num1 & num2, log to the console "fizzbuzz"
      console.log('fizzbuzz');
    //check to see if the current number is divisible by num1 only
    } else if (i % num1 === 0) {
      //if the current number is divisible by num1 only, log to the console "fizz"
      console.log('fizz');
    //check to see if the current number is divisible by num2 only
    } else if (i % num2 === 0) {
      //if the current number is divisible by num2 only, log to the console "buzz"
      console.log('buzz');
      //if the current number is not diviisble by num1 or num2 return to the console the current number
    } else {
      console.log(i);
    }
  }
}
//create two test cases for the fizzBuzz function
//the first test case should pass in 3 as num1 and 5 an num2, the range should be 100
fizzBuzz(3, 5, 100);
//the second test case should pass in 5 as num1 and 8 as num2, the range should be 400
fizzbuzz(5, 8, 400);
