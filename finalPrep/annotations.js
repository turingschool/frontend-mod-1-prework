// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declaring a function called buildABear with 5 seperate parameters
function buildABear(name, age, fur, clothes, specialPower) {
// declaring a variable called greeting with a string using interpolation inside
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// declaring a variable called demographics with an array
  var demographics = [name, age];
// declaring a variable called powerSaying with a string that uses concatenation combining the string and specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declaring an object called builtBear
  var builtBear = {
// declaring basicInfo equals demographics
    basicInfo: demographics,
// declaring clothes equals clothes
    clothes: clothes,
// declaring exterior equals fur
    exterior: fur,
// declaring cost equals 49.99
    cost: 49.99,
// declaring sayings equals; greeting, powerSaying, and "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//declaring isCuddly equals true
    isCuddly: true,
// ending the object
  };
// returning the contents of builtBear
  return builtBear
//ending the function
}
// Creating a buildABear with the given parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Creating a buildABear with the given parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declaring a function called fizzBuzz with 3 parameters
function fizzBuzz(num1, num2, range) {
// creating a loop where it starts at 0 and goes up by 1 incremently until it is
// less than or equal to range
  for (var i = 0; i <= range; i++) {
// creating an if statement that the remainder of i divided by num1 is
// strictly equal to 0 AND the remainder of i divided by num2 is strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
// logging 'fizzbuzz' if the parameters of previous line are fulfilled
      console.log('fizzbuzz');
// Also if the remainder of i divided by num1 is strictly equal to 0 then...
    } else if (i % num1 === 0) {
// logging 'fizz' if the parameters of previous line are fulfilled
      console.log('fizz');
// Also if the remainder of i divided by num2 is strictly equal to 0 then...
    } else if (i % num2 === 0) {
// logging 'buzz' if the parameters of previous line are fulfilled
      console.log('buzz');
// if none of those parameters are fulfilled then...
    } else {
// logging i if the parameters of previous line are fulfilled
      console.log(i);
// completing the else statement
    }
// completing the loop
  }
//completing the function
}
// creating fizzBuzz with the given parameters
fizzBuzz(3, 5, 100);
// creating fizzbuzz with the given parameters
fizzbuzz(5, 8, 400);
