// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {//Define a function called buildABear which use the following arguments (name, age, fur, clothes, specialPower) to define an object. Like a fabric of customized bears.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;//Declare a variable that holds a string with the interpolation of the argument name.
  var demographics = [name, age];//Declare a variable that holds an array with the the properties name and age as index 0 and 1 respectivelly.
  var powerSaying = "Did you know that I can " + specialPower + " ?";//Declare a variable containing a string concatenated with the specialPower argument.
  var builtBear = { //Declare a variable that contains an object modeling a Bear, a stuffy one.
    basicInfo: demographics,//key-value pair, where the value is the variable recently defined demographics.
    clothes: clothes,//key-value pair, where the value is the argument clothes.
    exterior: fur,//key-value pair where the value is represented by the argument fur.
    cost: 49.99,//key-value pair where the value is static, and integer, representing the price of the bear.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//key-value pair where the value contains a list of the sayings of the bear in an array.
    isCuddly: true,//Key-value pair where the value is a boolean true.
  };

  return builtBear//The return statement ends function execution and specifies a value to be returned to the function caller.
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');//Here we are calling the function buildABear with the specified parameters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');//Here we are calling the function buildABear with the specified parameters.



//FizzBuzz
function fizzBuzz(num1, num2, range) {//Here we are creating a function passing the parameters num1, num2 and range.
  for (var i = 0; i <= range; i++) {//Here we are creating a counter which is going to run the code bellow if the variable i is equal or less than the parameter range.
    if (i % num1 === 0 && i % num2 === 0) {//Here we are creating a condition for our conditional statement if, if evaluates to true on both sides of our logical operator &&.
      console.log('fizzbuzz');//then it will log the string 'fizzbuzz' and thats the end of our loop, the codo won't run anything else.
    } else if (i % num1 === 0) {//If our previus condition evaluates to false then the interpreter will go ahead and check this condition, if this one evaluates to true
      console.log('fizz');// it will log to the console the string 'fizz', and that will be the end of the loop.
    } else if (i % num2 === 0) {//If our previus condition evaluates to false then the interpreter will go ahead and check this condition, if this one evaluates to true
      console.log('buzz');// it will log to the console the string 'buzz', and that will be the end of the loop.
    } else {//If non of the previus conditions evaluates to true the interpreter will run
      console.log(i);//this line of code
    }
  }
}

fizzBuzz(3, 5, 100);//Here we are calling our function giving it the arguments (3, 5, 100)
fizzbuzz(5, 8, 400);//Here we are calling our function giving it the arguments (5, 8, 400)
