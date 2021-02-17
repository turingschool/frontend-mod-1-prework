// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // set up the function
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!` // choose the greeting the bear will usew ith its name (from below)
  var demographics = [name, age] // bear's age and name
  var powerSaying = "Did you know that I can " + specialPower + " ?" // something "special" the bear can do
  var builtBear = { // what will be returned
    basicInfo: demographics, // name and age
    clothes: clothes, // what bear is wearing
    exterior: fur, // fabric on bear
    cost: 49.99, // price of bear
    sayings: [greeting, powerSaying, "Goodnight my friend!"], // extra saying
    isCuddly: true, // whether the bear is cuddly
  }

  return builtBear // returns what's in "var buildBear"
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares') // example of a specific bear names Fluffy
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in') // example of a specific bear names Sleep

//FizzBuzz
function fizzBuzz(num1, num2, range) { // set up function
  for (var i = 0; i <= range; i++) { // set up loop parameters
    if (i % num1 === 0 && i % num2 === 0) { // set up a conditional if/elseif/else path
      console.log('fizzbuzz') // return what's set as fizzbuzz
    } else if (i % num1 === 0) { // i modulo of num1 is exactly equal to 0?
      console.log('fizz') // return what's set as fizz
    } else if (i % num2 === 0) // i modulo of num2 is exactly equal to 0?
      console.log('buzz') // return what's set as buzz
    } else { // computer this last if nothing else has been true so far
      console.log(i) // return i
    }
  }
}

fizzBuzz(3, 5, 100) // example of a specific instance of fizzBuzz
fizzbuzz(5, 8, 400) // example of a specific instance of fizzBuzz
