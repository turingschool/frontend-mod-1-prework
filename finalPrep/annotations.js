// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//'buildABear' function initialized with dynamic parameters of a String called 'name',
//Number called 'age', String called 'fur', Array called 'clothes', and a String
//called 'specialPower'
function buildABear(name, age, fur, clothes, specialPower) {
  //'greeting' variable initialized with a string interpolation of 'name'
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //'demographics' variable initialized with an array of 'name' and 'age'
  var demographics = [name, age];
  //'powerSaying' variable initialized with a string concatenation of 'specialPower'
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //'builtBear' object initialized
  var builtBear = {
    //Key-pair 'basicInfo' defined as 'demographics'
    basicInfo: demographics,
    //Key-pair 'clothes' defined as 'clothes'
    clothes: clothes,
    //Key-pair 'exterior' defined as 'fur'
    exterior: fur,
    //Key-pair 'cost' defined as 49.99
    cost: 49.99,
    //Key-pair sayings defined as array of 'greeting', 'powerSaying', and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //Key-pair 'isCuddly' boolean defined as true
    isCuddly: true,
  }; //Close the 'builtBear' object

  //'buildABear' function returns 'builtBear' when called
  return builtBear
} //Close the 'buildABear' function

//Call 'buildABear' function with String 'name', Number 'age', String 'fur', Array
//'clothes', and String 'specialPower'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');

//Call 'buildABear' function with String 'name', Number 'age', String 'fur', Array
//'clothes', and String 'specialPower'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');

//'fizzBuzz' function initialized with dynamic parameters of three Number variables
//called 'num1', 'num2', and 'range'
function fizzBuzz(num1, num2, range) {
  //For loop initialized with variable 'i' used to iterate until 'i is equal to 'range'
  for (var i = 0; i <= range; i++) {
    //If statement evalutes if BOTH 'i' divided by 'num1' and 'i' divided by 'num2'
    //have no remainder.
    if (i % num1 === 0 && i % num2 === 0) {
      //Log to console the String 'fizzbuzz'
      console.log('fizzbuzz');
    //Else if statement evaluates if 'i' divided by 'num1' has no remainder
    } else if (i % num1 === 0) {
      //Log to console the String 'fizz'
      console.log('fizz');
    //Else if statement evaluates if 'i' divided by 'num2' has no remainder
    } else if (i % num2 === 0) {
      //Log to console the String 'buzz'
      console.log('buzz');
    //Else statement evaluates when there is any remainder from 'i' divided by 'num1' or
    //'i' divided by 'num2'
    } else {
      //Log to console the current value of i
      console.log(i);
    }
  } //Close the for loop
} //Close the 'fizzBuzz' function

//Call the 'fizzBuzz' function with three Numbers: 'num1', 'num2', and 'range'
fizzBuzz(3, 5, 100);

//Call the 'fizzBuzz' function with three Numbers: 'num1', 'num2', and 'range'
fizzbuzz(5, 8, 400);
