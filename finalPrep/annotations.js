// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// A function called buildABear that takes four arguments - name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
// A declared variable key called greeting has a string value which uses interpolation to include a name variable.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//A declared variable key called demographics that has a value of name and age.
  var demographics = [name, age]
//A declared variable key called powerSaving that has a string which uses concatenation to include a specialPower variable.
  var powerSaying = "Did you know that I can " + specialPower + " ?"
//A declared variable of builtBear, assigned to an object with the following key/values - basicInfo, clothes, exterior, cost, sayings, isCuddly.
  var builtBear = {
    basicInfo: demographics, //object variable key has a value of demographics.
    clothes: clothes, //object variable key clothes has a value of clothes.
    exterior: fur, //object variable key exterior has a value of fur.
    cost: 49.99, //object variable key cost has a value of 49.99.
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //object variable sayings has an array value of the variables greeting, powerSaying, and string "Goodnight my friend!"
    isCuddly: true, //object variable key has a boolean value of true.
  }
//return or print variable builtBear object details
  return builtBear
}
//A class instance of the buildABear class includes the above object variables
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//A second class instance of buildABear class includes the above object variables
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
//A function called fizzBuzz takes three agruments - num1, num2, and range
function fizzBuzz(num1, num2, range) {
  //Loop through the items in the array of three statements - an initializer at index 0, where the condition that index
  //is less than or equal to the range argument, and the increment operator goes up by one.
  for (var i = 0; i <= range; i++) {
  // if statement determines if the modulus of the index value and num1 strictly equals 0
  // AND the modulus of the index value and num2 strictly equals 0
    if (i % num1 === 0 && i % num2 === 0) {
      //then it returns "fizzbuzz". If not, it moves on to the next if statement.
      console.log('fizzbuzz')
    //if statement determines if the modulus of the index value and num1 strictly equals 0
    } else if (i % num1 === 0) {
      //then it returns "fizz". If not, it moves onto the next if statement.
      console.log('fizz')
    //if statement determines if the modulus of the index value and num2 strictly equals 0
    } else if (i % num2 === 0) {
      //then it returns "buzz". If not, it moves on to the next if statement.
      console.log('buzz')
      //if statement determines if none of the above if statements were true
    } else {
      //then it returns the index value
      console.log(i)
    }
  }
}
//these two methods declare what the num1, num2, and num3 values are
fizzBuzz(3, 5, 100)
fizzbuzz(5, 8, 400)
