// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare buildABear function with name, age, fur, clothes, and specialPower parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  //Assign a greeting variable with a string "Hey partner! My name is ___ will you be my friend?!"
  //and interpolate the name parameter in the blank.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//Assign a demographics variable with an array including the name and age parameters.
  var demographics = [name, age]
//Assign a powerSaying variable with string that says "Did you know that I can ___?"
// and concatenate the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
//Assign a builtBear object
  var builtBear = {
//Add key-value pair to builtBear object with key of basicInfo and value of demographics
    basicInfo: demographics,
//Add key-value pair to builtBear object with key of clothes and value of clothes
    clothes: clothes,
//Add key-value pair to builtBear object with key of exterior and value of fur
    exterior: fur,
//Add key-value pair to builtBear object with key of cost and value of integer 49.99.
    cost: 49.99,
// Add key value pair to builtBear object with key of sayings and value an array that includes greeting, powerSaying,
// and a string "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//Add key value pair to builtBear object with isCuddly as key and value true boolean
    isCuddly: true,
  }
//Return builtBear function
  return builtBear
}
//Create buildABear instance with Fluffy as name value in string, age value is 4, fur value is brown
//in a string, clothes value is an array of strings pants, jorts, and tanktop, and specialPower value is give you nightmares string.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//Create another buildABear instance with Sleepy as the name value in a string, age value
//is 2 as an integer, fur value is purple as a string, clothes value is an array of string, pajamas,
//and sleeping cap. The specialPower value is a string that state sleeping in.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//Create a function called fizzBuzz with 3 parametrs: num1, num2, and range
function fizzBuzz(num1, num2, range) {
//Loop through the items in the entire array from beginning to end.
  for (var i = 0; i <= range; i++) {
//if the modulus of i and num1 is equal to 0 and num2 equals 0 then log the strings
//fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz')
//If the modulus of i and num 1 is equal to 0 then log the string fizz
    } else if (i % num1 === 0) {
      console.log('fizz')
// If the mudlus of i and num2 is equal to 0 then log the string buzz
    } else if (i % num2 === 0) {
      console.log('buzz')
//else log i
    } else {
      console.log(i)
    }
  }
}
//Create two instances. One with the parameters 3,5 and 100 and the other 5,8. 400
fizzBuzz(3, 5, 100)
fizzbuzz(5, 8, 400)
