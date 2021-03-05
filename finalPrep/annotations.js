// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear. This code uses a function to Build a Bear with a name, age, type
//of material, clothes and a special power
function buildABear(name, age, fur, clothes, specialPower) {
//the bear can introduce itself and say a phrase
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//the bear has a name and an age
  var demographics = [name, age]
//the bear can tell you about it's unique special power
  var powerSaying = "Did you know that I can " + specialPower + " ?"
//this is your "bear factory", the name, age, clothes, and 2 out of 3 sayings are
//dynamic, cost, cuddly factor, and goodnight saying are fixed
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }
//ends the function and specificies that builtBear will be called when the function executes
  return builtBear
}
//two different instances of the bear are built: Fluffy and Sleepy. Fluffy is 4 years old,
//has brown fur, it wearing pants, jorts and a tanktop. Their special power is giving you nightmares!
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//Sleepy is 2 years old, with purple fur, wearing pajamas and a sleeping cap. Their spcial power is sleeping in.
//The tense of the special power should be changed to "sleep in" so that it matches the powerSaying.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz. Create a function called FizzBuzz with three parameters
function fizzBuzz(num1, num2, range) {
//create a for loop with an initial expression of 0, that runs as long as i is less than or equal
//to the range, and increment it.
  for (var i = 0; i <= range; i++) {
//add a conditional else-if to the function. if the remainder of i divided by
//num1 is exactly equal to 0 AND the remainder of i divided by num2 also is exactly equal to zero
//print 'fizzbuzz' to the console.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz')
//if the remainder of i divided by num1 is exactly zero, print 'fizz' to the console
    } else if (i % num1 === 0) {
      console.log('fizz')
//if the remainder of i divided by 2 is exactly zero, print 'buzz' to the console
    } else if (i % num2 === 0) {
      console.log('buzz')
//if none of these conditions are true, print i to the console.
    } else {
      console.log(i)
    }
  }
}

//one instance of fizzBuzz is defined with num1=3, num2=5 and range=100
//this prints 100 lines to the console that are either integers, "fizz", "buzz" or "fizzbuzz"
//depending on the conditional math above
fizzBuzz(3, 5, 100)
//another instance is created with num1=5, num2=5 and range=400. there is an
//error because buzz is not capitalized
fizzbuzz(5, 8, 400)
