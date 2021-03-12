// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//this is a function with 5 parameters (name, age, fur, clothes, and specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable of greeting- value is a string with the name parameter interpolated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable of demographics - value is an array with two elements which are the parameters name and age
  var demographics = [name, age];
  //declare a variable of powerSaying - value is a string with the specialPower parameter interpolated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //this is an object with the name builtBear that holds the attributes basicInfo, clothes, exterior, cost, sayings and isCuddly
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  //when the function is called, it will return the object
  return builtBear
}
//invoke the buildABear function with name = 'Fluffy', age = 4, fur = 'brown', clothes = ['pants', 'jorts', 'tanktop'], and specialPower = 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//invoke the buildABear function with name - 'Sleepy', age = 2, color = 'purple', clothes = ['pajamas', 'sleeping cap'], and specialPower = 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

//this is a function with 3 parameters (num1, num2, and range)
function fizzBuzz(num1, num2, range) {
  // inside the function is a loop with variable i as a counter set to a value of 0. When i is less than or equal to the value of the parameter range,
  // increment by 1 each time through the loop
  for (var i = 0; i <= range; i++) {
    // this is an if statement with the condition, if the remainder of i divided by the value of num 1 is strictly equal to zero and the remainder of i divided by
    // the value of num 2 is strictly equal to zero 
    if (i % num1 === 0 && i % num2 === 0) {
      //log the string 'fizzbuz' to the console
      console.log('fizzbuzz');
      //if the remainder of i divided by num1 is strictly equal to 0 
    } else if (i % num1 === 0) {
      //log the string 'fizz' to the console
      console.log('fizz');
      //if the remainder of the value of i divided by the value of num2 is strictly equal to zero
    } else if (i % num2 === 0) {
      //log the string 'buzz' to the console
      console.log('buzz');
    } else {
      //if the above conditions are not met, log the value of i to the console
      console.log(i);
    }
  }
}

//invoke the fizzBuzz function with num1 = 3, num2 = 5, and range = 100
fizzBuzz(3, 5, 100);
//invoke the fizzBuzz function with num1 = 5, num2 = 8, and range = 400
fizzbuzz(5, 8, 400);
