// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//Declare function buildABear with 5 parameters - name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //Declare a variable greeting - value is a string with the name variable interpolated
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Declare a variable demographics - value is an array with 2 elements, name and age
  var demographics = [name, age];
  //Declare variable powerSaying - value is a string with variable specialPower concatenated within
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Declare variable builtBear and assign to an Object
  var builtBear = {
    //Create property named basicInfo and assign value to parameter demographics
    basicInfo: demographics,
    //Create property named clothes and assign value to parameter clothes
    clothes: clothes,
    //Create property named exterior and assign value to parameter fur
    exterior: fur,
    //Create property named cost and assign value to integer 49.99
    cost: 49.99,
    //Create property named sayings and assign value to an array with 3 elements - the variable greeting, the variable powerSaying, and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //Create property named isCuddly and assign value to boolean true
    isCuddly: true,
  };
  //When function buildABear is called, the object variable builtBear created just above this line will be returned
  return builtBear
}

//Invoke the buildABear function with name = 'Fluffy', age = 4, fur = 'brown', clothes = ['pants', 'jorts', 'tanktop'], specialPower = 'give you nightmares'
/* Function call will output the builtBear object as {
basicInfo: ['Fluffy', 4],
clothes: ['pants', 'jorts', 'tanktop'],
exterior: brown,
cost: 49.99,
sayings: ["Hey partner! My name is Fluffy - will you be my friend?!", "Did you know that I can give you nightmares ?", "Goodnight my friend!"],
isCuddly: true
} */
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');

//Invoke the buildABear function with name = 'Sleepy', age = 2, fur = 'purple', clothes = ['pajamas', 'sleeping cap'], specialPower = 'sleeping in'
/* Function call will output the builtBear object as {
basicInfo: ['Sleepy', 2],
clothes: ['pajamas', 'sleepingCap'],
exterior: [purple],
cost: 49.99,
sayings: ["Hey partner! My name is Sleepy - will you be my friend?!", "Did you know that I can sleeping in ?", "Goodnight my friend!"],
isCuddly: true
} */
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

//Declare function fizzBuzz with 3 parameters - num1, num2, range
function fizzBuzz(num1, num2, range) {
  //Create loop which runs until the counter reaches the value of the range parameter
  for (var i = 0; i <= range; i++) {
    //Condition - both i/num1 and i/num2 both return remainder 0
    if (i % num1 === 0 && i % num2 === 0) {
      //Print string 'fizzbuzz' to the console
      console.log('fizzbuzz');
    //Condition - i/num1 returns remainder 0
    } else if (i % num1 === 0) {
      //Print string 'fizz' to the console
      console.log('fizz');
    //Condition i/num2 returns remainder 0
    } else if (i % num2 === 0) {
    //Print string 'buzz' to the console
      console.log('buzz');
    //None of the previous 3 conditions are fulfilled
    } else {
    //Print the value of i
      console.log(i);
    }
  }
}

//Invoke the fizzBuzz function with num1 = 3, num2 = 5, range = 100
/*Function call will return string 'fizz' at i values which are multiples of 3, string 'buzz' at multiples of 5, string 'fizzbuzz' at multiples of 3 and 5, current integer value of i at all other i values less than or equal to 400*/
fizzBuzz(3, 5, 100);

//Fix typo - 'fizzbuzz' >> 'fizzBuzz'
//Invoke the fizzBuzz function with num1 = 5, num2 = 8, range = 400
/*Function call will return string 'fizz' at i values which are multiples of 5, stirng 'buzz' at multiples of 8, string 'fizzbuzz' at multiples of 5 and 8, current integer value of i at all other i values less than or equal to 400*/
fizzBuzz(5, 8, 400);
