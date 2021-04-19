// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // Created a function with parameters
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;// created a variable with a string plus conjunction that has a greet.
  var demographics = [name, age];// created a variable with a value of array
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // created a variable with a string and conjunction with another variable
  var builtBear = { // created a object builtBear and has key and values assigned
    basicInfo: demographics, // declared a key basicInfo and has a value of demographics which is a variable
    clothes: clothes,// declared a key clothes and has a value of variable clothes
    exterior: fur,//declared a key of exterior and has a value of fur variable
    cost: 49.99,//declared a key of cost and has a value of interger
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//declared a key of saying and has a value of arrays that includes strings inside
    isCuddly: true,//declared a key isCuddly and has a value of a booelan expression
  };

  return builtBear // prints the object with all of its key-values
}

//Create an instance of the Class and assign arguments for the parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
//Create an instance of the Class and assign arguments for the parameters.


//FizzBuzz
function fizzBuzz(num1, num2, range) {//Declare a function fizzBuzz and assign three parameters (num1,num2, range)
  for (var i = 0; i <= range; i++) {// Declare a loop to check three conditions
    if (i % num1 === 0 && i % num2 === 0) {//Condition 1 : if it evaluates to true then it runw the codeblock and logs 'fizzbuzz'
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {// if condition 1 evaluates to false then condition 2 is checked and if true the codeblock runs.
      console.log('fizz');
    } else if (i % num2 === 0) {// If conditions 1 and 2 are false condition 3 is checked and if true the codeblock runs.
      console.log('buzz');
    } else { // If none of the conditions are true then this codeblock runs since neither of the other conditions were true or false.
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);// prints the function with values for the parameters to run
fizzbuzz(5, 8, 400);// prints the function with values for the parameters to run 
