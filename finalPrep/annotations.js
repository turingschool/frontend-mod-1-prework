// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is a function with 5 parameters (name, age, fur, clothers and special Powers)
function buildABear(name, age, fur, clothes, specialPower) {
  //Declares the varible  greeting. It is a string with name interpolated in it.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declares the varible demographics. It is an array with name and age
  var demographics = [name, age];
  // declares the varible powerSaying. It is string with concatenation two strings with the varible specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declares the varible builtBear with 5 key value pairs
  var builtBear = {
//Keyvalue pair basicInfo with demographics varible
    basicInfo: demographics,
//Keyvalue pairs clothes clothes with clothes
    clothes: clothes,
//Keyvalue pairs exterior with fur parameters
    exterior: fur,
//Keyvalue pairs cost the cost parameter
    cost: 49.99,
//Keyvalue pairs sayings with the array greeting, powerSaying, and the string: "Goodnight my Friend"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//Keyvalue pairs the boolean isCuddly with true
    isCuddly: true,
  };
//When function is called, it will return the bultBear values
  return builtBear
}
// invoke the buildBear function with name = 'Fuffy', age = 4, fur = 'brown', clothes = ['pants', 'jorts', 'tanktop'], and
//specialPower = 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// invoke the buildBear function with name = 'Sleepy', age = 2, fur = 'purple', clothes = [pajamas', 'sleeping cap'], and
//specialPower = ''sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//This is a function with three parameters (num1, nub2, and range)
function fizzBuzz(num1, num2, range) {
//starts loops and sets up condition of i starts at 0 and loops until i is greater than range, i goes up in integers of 1
  for (var i = 0; i <= range; i++) {
// says if the condition, if i divided by num1 is the absolute value of zero AND if i divided by num2 is the absolute value of zero
    if (i % num1 === 0 && i % num2 === 0)
//then itll log 'fizzbuzz'. If it is not true it will move to condition 2
      console.log('fizzbuzz');
//if the above condition is not true, if i divided by num1 is the absolute value of zero
    } else if (i % num1 === 0) {
// it will log 'fizz'. If it is not true it will move to condition3
      console.log('fizz');
//if the above condition is not true, if i divided by num2 is the absolute value of zero
    } else if (i % num2 === 0) {
//If the condition is true  will log 'buzz'. If it is not ture it will move to the next condition
      console.log('buzz');
//If the above conditions is not true, it will log the value of i.
    } else {
      console.log(i);
    }
  }
}
//invokes the fizzBuzz function with num1 = 3, num2 = 5, and range = 100. The loop will continue until the
//i is greater than the range = 100
fizzBuzz(3, 5, 100);
//invokes the fizzBuzz function with num1 = 5, num2 = 8, and range = 100. The loop will continue until the
//i is greater than the range = 400. 
fizzbuzz(5, 8, 400);
