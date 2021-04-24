// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  //declares buildABear as an method with parameters and opeinging curly braces
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declares variable assigns greeting keyword to value string that includes "name" as interpolater
  var demographics = [name, age];
  //declares variable assigns demographics keyword to value array
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declares variable assign keyword powerSaying to a string that include concatenation
  var builtBear = {
    // declares builtBear variable as Object literal
    basicInfo: demographics,
    // key-value pair string
    clothes: clothes,
    //key-value pair string
    exterior: fur,
    //key-value pair string
    cost: 49.99,
    //key-value pair integer
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //key-value pair array
    isCuddly: true,
    //key-value pair boolean
  };
  //closing braces

  return builtBear
  //method
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//test case
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
//test case


//FizzBuzz
function fizzBuzz(num1, num2, range) {
  //declares function fizzBuzz with parameters
  for (var i = 0; i <= range; i++) {
    //creates a loop where i =0 and i is less than "range". loop ends when comes back false
    if (i % num1 === 0 && i % num2 === 0) {
      //conditional statement that includes logic operator 
      console.log('fizzbuzz');
      //what prints if conditional statement is true
    } else if (i % num1 === 0) {
      //if 1st coditional statement is fasle then this code runs
      console.log('fizz');
      //if 2nd conditional statement is true, console prints this
    } else if (i % num2 === 0) {
      //if 2nd coditional statement is fasle then it goes to this code
      console.log('buzz');
      //if 3rd condition is true then this is what prints "buzz"
    } else {
      //if all conditions false then this is true
      console.log(i);
//what prints for everything not covered in first 3 conditonal statments
    }
    //closing braces
  }
  //closing braces
}
//closing braces for entire function

fizzBuzz(3, 5, 100);
//test case should print (98, "fizz", "buzz")
fizzbuzz(5, 8, 400);
// test case should print (398, 399, "fizzbuzz")
