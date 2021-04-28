// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//declare a function with 5 properties
function buildABear(name, age, fur, clothes, specialPower) {
//declare a new variable greeting that interpolates the variable name in a string
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declare a new variable demographics and assign an array
  var demographics = [name, age];
//declare variable powerSaying and assign a string that concatenates variable specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//declare object builtBear and assign it 6 key value pairs
  var builtBear = {
//assign value as string
    basicInfo: demographics,
//assign value as string
    clothes: clothes,
//assign value as string    
    exterior: fur,
//assign value as integer
    cost: 49.99,
//assign value as an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//assign value as boolean
    isCuddly: true,
  };
//return the value of builtBear
  return builtBear
}
//call buildABear function by passing 5 arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//call buildABear function by passing 5 arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//declare the function fizzBuzz with the properties num1, num2, range
function fizzBuzz(num1, num2, range) {
//declare a new conditional statement that is a loop
  for (var i = 0; i <= range; i++) {
//execute the code if the condition evaluates to true
    if (i % num1 === 0 && i % num2 === 0) {
//if the condition is true log "fizzbuzz" to the console
      console.log('fizzbuzz');
//if the previous condition was false evaluate a new condition
    } else if (i % num1 === 0) {
//if the condition is true log "fizz" to the console
      console.log('fizz');
//if the previous condition was false evauluate a new condition
    } else if (i % num2 === 0) {
//if the condition evaluates to true log "buzz" to the console
      console.log('buzz');
//if all of the previous conditions evaluate to false then...
    } else {
//log (i) to the console
      console.log(i);
    }
  }
}
//call fizzBuzz function by passing 3 arguments
fizzBuzz(3, 5, 100);
//call fizzBuzz function by passing 3 arguments
fizzbuzz(5, 8, 400);
