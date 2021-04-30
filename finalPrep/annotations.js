// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// The function is declared with the function keyword: "function". Next the name of the function is given in camelCase. The parameters are declared which will represent the data we pass into the function via the arguments.
function buildABear(name, age, fur, clothes, specialPower) {
// The string data is assigned the variable name of 'greeting'. The first argument listed when we call the function will undergo interpolation and complete the phrase.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // This data is an array and is passed in when we call the function.
  var demographics = [name, age];
// The parameter specialPower represents the data that is being passed in and in this case undergoes concatenation to form a complete string.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//An object is created within the function that allows data to be stored in key-value pairs.
  var builtBear = {
//This stores a variable declared above in a key to be referenced.
    basicInfo: demographics,
//Clothes is a parameter and thus can have data passsed in via an argument when the function is called. It is dynamic.
    clothes: clothes,
//fur is a parameter and thus can have data passsed in via an argument when the function is called.
    exterior: fur,
//This is a static value and thus does not change unlike the dynamic values above.
    cost: 49.99,
//An array is stored in a key value pair in which two of the values are dynamic and one is static
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//This key value pair is a simple static boolean
    isCuddly: true,
  };
//When the function is called, it will return the builtBear object values
  return builtBear
}
// We invoke the name of the function and then list the arguments that are passed into the function.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//We passed different arguments into the function then  on the previous invoking of the function.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//FizzBuzz
//More concise.

//this is a function with 3 parameters (num1, num2, and range)
function fizzBuzz(num1, num2, range) {
//Declares a loop. Within the paranthesis is the counter. i is declared as 0. i is less than or equal to the range. i++ is the incrementor.
  for (var i = 0; i <= range; i++) {
//If i results in an integer and the statement results in true then the following code will execute.
    if (i % num1 === 0 && i % num2 === 0) {
//code prints fizzbuzz to console
      console.log('fizzbuzz');
//this is an else if statement giving another option for a true if the above was false.
    } else if (i % num1 === 0) {
//if this is true then fizz is logged to the console
      console.log('fizz');
//an additional else if statement gives another chance if the above was false
    } else if (i % num2 === 0) {
//if this is true then buzz is logged to the console
      console.log('buzz');
//if all above were false then the else statement automatically runs
    } else {
//the variable i value is printed to the console
      console.log(i);
    }
  }
}
//calls the function with the three arguements
fizzBuzz(3, 5, 100);
//calls the function with the three different arguements
fizzbuzz(5, 8, 400);
