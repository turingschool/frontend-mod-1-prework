// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment


//comment
//Build a Bear
// declares function buildABear that takes 5 arguments: name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
// declares a string variable named greeting that uses interpolation with the name argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// declares an array variable named demographics that includes the name and age arguments
  var demographics = [name, age];
// declares a string variable named powerSaying that uses concatenation with the specialPower argument and a type before ?
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declares a new variable builtBear assigned to an object with key-value pairs
  var builtBear = {
// assigns the variable demographics to basicInfo
    basicInfo: demographics,
// assigns the variable clothes to clothes
    clothes: clothes,
// assigns the variable fur to exterior
    exterior: fur,
// assigns the value 49.99 to the float/int cost
    cost: 49.99,
// assigns the variables greeting, powerSaying, and the string "Goodnight my friend!" to an array named sayings
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// assigns the value true to the boolean isCuddly
    isCuddly: true,
// closes variable
  };
// specifies to return (i.e. print) the variable builtBear
  return builtBear
}
// calls the function buildABear passing in the following information name(string): Fluffy, age(int): 4, fur(string): brown,
// clothes(array): ['pants', 'jorts', 'tanktop'], specialPower(string): 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// calls the function buildABear passing in the following information name(string): Sleepy, age(int): 2, fur(string): purple,
// clothes(array): ['pajamas', 'sleeping cap'], specialPower(string): 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//comment
//FizzBuzz
// declares function fizzBuzz that takes 3 arguments: num1, num2, and range
function fizzBuzz(num1, num2, range) {
// declares a for loop starting at i=0, evaluates if i is less than or equal to the argument range, if the previous statement is
// true it increments the value of i by 1 but if it is false it terminates the loop
  for (var i = 0; i <= range; i++) {
//establishes if/else statment that states if the remainder of i over num1 is strictly equal to 0 AND the remainder of i over num2 is strictly equal to 0 then...
    if (i % num1 === 0 && i % num2 === 0) {
// log the string fizzbuzz
      console.log('fizzbuzz');
// otherwise, if it's true that the remainder of i over num1 is strictly equal to 0 then...
    } else if (i % num1 === 0) {
// log the string fizz
      console.log('fizz');
// otherwise, if it's true that the remainder of i over num2 is strictly equal to 0 then...
    } else if (i % num2 === 0) {
// log the string buzz
      console.log('buzz');
// otherwise
    } else {
// log the value of i
      console.log(i);
// terminates the if/else statement
    }
// terminates the for loop
  }
// terminates the function
}

// calls the function fizzBuzz passing in the following information num1(int): 3, num2(int): 5, range(int): 100
fizzBuzz(3, 5, 100);
// calls the function fizzBuzz passing in the following information num1(int): 5, num2(int): 8, range(int): 400
fizzbuzz(5, 8, 400);
