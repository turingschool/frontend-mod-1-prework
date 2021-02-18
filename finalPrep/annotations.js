// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {              // This is a function with 5 parameters.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`  //declare variable 'greeting'- the value is a string with 'name' interpolated
  var demographics = [name, age]                                             // declare variable 'demographics' - the value is an array with 2 elements
  var powerSaying = "Did you know that I can " + specialPower + " ?"        // declare variable 'powerSaying' - the value is a string with 'specialPower' concatenated
  var builtBear = {                                                        //declare variable 'builtBear' - the value is an Object with 6 data sets
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }

  return builtBear                                             //function is called and returns 'builtBear' object
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')  //define parameters in 'buildABear' function
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')          // define new parameters in the 'buildABear' function



//FizzBuzz
function fizzBuzz(num1, num2, range) {             //function with 3 parameters
  for (var i = 0; i <= range; i++) {              //for statement where the variable index starts at 0, the index is less than or equal to the 3rd parameter in the function, and i increases incrementally by 1 
    if (i % num1 === 0 && i % num2 === 0) {       // if statement - if i divided by num1 AND i divided by num2 both have a remainder of 0 is true then, 
      console.log('fizzbuzz')                     // print 'fizzbuzz' to console
    } else if (i % num1 === 0) {                 // if the original if statement is false but i divided by num1 has a remainder of 0 is true then, move to next step 
      console.log('fizz')                        // print 'fizz' to console
    } else if (i % num2 === 0) {                 // if the original if statement is false but i divided by num2 has a remainder of 0 is true then, move to next step
      console.log('buzz')                       // print 'buzz' to console
    } else {                                    // if all previous statments are false move to the next step
      console.log(i)                            //print loop number that was completed
    }
  }
}

fizzBuzz(3, 5, 100)                            //run function with these values for the parameters
fizzBuzz(5, 8, 400)                           //run function with these values for the parameters
