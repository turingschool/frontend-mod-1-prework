// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Create a function named buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// create greeting variable with string value interpolated with name value
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
// create demographic variable with array of name and age value
  var demographics = [name, age]
// create powerSaying variable of string concatenated with specialPower value
  var powerSaying = "Did you know that I can " + specialPower + " ?"
// create variable builtBear of an object with state of 6 key value pairs
  var builtBear = {
// basicInfo key is equal to dynamic value demographics
    basicInfo: demographics,
// clothes key is equal to dynamic value clothes
    clothes: clothes,
// exterior key is equal to dynamic value fur
    exterior: fur,
// cost key is equal to static value
    cost: 49.99,
// sayings key is equal to static and dynamic array value
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// isCuddly key is equal to boolean value
    isCuddly: true,
  }
// return builtBear object
return builtBear
}

//build one bear with buildABear function with 5 arguments including strings, numbers, and array
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')

//build a different bear with buildABear function with 5 arguments including strings, numbers, and array
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
// Construction function fizzBuss with 3 dynamic parameters
function fizzBuzz(num1, num2, range) {
// create for loop beginning at index zero, and iterating until the end of the range is met in increments of 1
  for (var i = 0; i <= range; i++) {
// create conditional where if the remainder of the index divided by num1 is
// exactly equal to 0 AND the remainder of the index divided by num2 is exactly
// equal to 0...
    if (i % num1 === 0 && i % num2 === 0) {
// then print fizzbuzz. If NOT continue to next statement.
      console.log('fizzbuzz')
// if the above statment is not true then calculate if the remainder of the index
// dvided by num1 is exactly equal to 0...
    } else if (i % num1 === 0) {
// THEN print fizz
      console.log('fizz')
// But if neither of the first two are true, then if the remainder of the index divided
// by num2 is exactly equal to 0 then...
    } else if (i % num2 === 0) {
// print buzz
      console.log('buzz')
// And if none of the above conditions are met...
    } else {
// print the index number
      console.log(i)
    }
  }
}
//call fizzBuzz function for the following argument
fizzBuzz(3, 5, 100)
//call fizzBuzz function for the following argument
fizzbuzz(5, 8, 400)
