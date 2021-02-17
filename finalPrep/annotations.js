// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  var demographics = [name, age]
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }

  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
function fizzBuzz(num1, num2, range) { //the name of the function is fizzBuzz and it has 3 parameters
  for (var i = 0; i <= range; i++) { //this is a for loop; variable is called i which starts at 0; the loop will continue as long as i is less than or equal to range; it will incerement by one each time it loops.
    if (i % num1 === 0 && i % num2 === 0) { //if i has a remainder for num1 that is equal to 0 and if i has remainder of for num2 that is equal to 0
      console.log('fizzbuzz') //log the value in strings
    } else if (i % num1 === 0) { // else do this instead
      console.log('fizz')
    } else if (i % num2 === 0) { //else do this instead
      console.log('buzz')
    } else { // else do this as the last resort
      console.log(i) //log the variable i 
    }
  }
} //function closing

fizzBuzz(3, 5, 100) //calling the function name and giving it 3 arguments
fizzbuzz(5, 8, 400) //calling the function name and giving it 3 new arguments
