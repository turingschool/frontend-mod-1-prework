/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log('Oh, Hello!');
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log('Hello,' + ' ' + name);
}

greetMe('James');
greetMe('Earl');
greetMe('Jones');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function sumFourtyOne(hashtag1, hashtag2) {
  console.log(hashtag1 + hashtag2);
}

sumFourtyOne(1, 2);
sumFourtyOne(3, 2);
sumFourtyOne(5, 3);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function bojack(lastName, firstName) {
  console.log('Esteemed Character Actress' + ' ' + lastName + ' ' +
firstName);
}

bojack('Margo', 'Martindale');


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function 'bojack' because the output 'Esteemed Character Actress Margo Martindale' is a reference to the show 'Bojack Horseman'. Margo Martindale is in reality an esteemed character actress but the phrase itself is recognizable as a reference to Bojack Horseman. 'Bojack' is an uncommon enough name to be recognized by most as the show that I'm referring to. (killer job by that marketing team amirite?) In hindsight, I'm really relying on someone getting the joke to understand why I used that name. Going forward, I probably will not have the luxury of explaining it like this nor will I be able to count on a  reasonable expectation of others' understanding it. So I should probably try to refrain from general meme-ary in naming things and save it for the output. I could probably apply a similar logic to the previous exercise in which I named the function 'sumFourtyOne'. I couldn't think of a decent name, but I knew that I was looking for a sum, and the band Sum41 popped into my head. It may not be wise to do that considering that I broadly know the word 'sum' has some actual functionality to it in at least one code language.

I named the parameters 'firstName' and 'lastName' because those are actually the first and last names of Esteemed Character Actress Margo Martindale
*/
