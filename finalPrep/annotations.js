// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Creates a function buildABear and takes in the parameters name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) { 
  // Creates variable greeting assigned to a string with {name}
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Create variable demographics. Assigned to array with [name,age]
  var demographics = [name, age];
  // create variable powerSaying with string and {specialPower}
  var powerSaying = "Did you know that I can " + specialPower + " ?";
 // Creates a new variable object builtBear
   var builtBear = {
 // key basicInfo is assigned to demoghraphics 
    basicInfo: demographics,
 //key clothes assigned to clothes
    clothes: clothes,
 //key exterior assigned to fur
    exterior: fur,
 //key cost assigned to a number
    cost: 49.99,
 //key sayings assigned to array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
 //key isCuddly assigned to boolean
    isCuddly: true,
  };
// prints the variable builtBear with all key values
  return builtBear
}
// passes arguments into the function buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//creates a function fizzBuzz with parameters num1, num2, range
function fizzBuzz(num1, num2, range) {
// Create a loop. i starts at 0. i is less than or equal to {range}. incriment i by 1
  for (var i = 0; i <= range; i++) {
// if statement. if modulo of i and {num1} is equal to 0 and the modulo of i and {num2} is equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
//logs to console 'fizzbuzz'
      console.log('fizzbuzz');
//else if the modulo of i and {num1} is equal to 0
    } else if (i % num1 === 0) {
//logs to console 'fizz'
      console.log('fizz');
//else if the modulo of 1 and {num2} is equal to 0
    } else if (i % num2 === 0) {
//logs to console 'buzz'
      console.log('buzz');
//else if the above condtions not met
    } else {
//log to console {i}
      console.log(i);
    }
  }
}
// pass in arguements to the function fizzBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
