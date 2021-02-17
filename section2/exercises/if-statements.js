/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


// EXAMPLE:Manipulate the variable 'weather' to see if you can print something other
  // than 'coat'.

// var weather = 'snowy';
 var weather = 'icy';
// var weather = 'rainy';
// var weather = 'sunny';
// While working through this example, I would toggle which variable declaration is
  // commented in/out and run the program in node several times to observe the output.

if (weather == 'sunny') {
  console.log('sunscreen');
} else if (weather == 'rainy') {
  console.log('umbrella');
} else if (weather == 'snowy') {
  console.log('coat');
} else if (weather == 'icy') {
  console.log('yak traks');
} else{
  console.log('good to go!');
}

/*
YOU DO:
Using the dogAge variable defined below,
determine if a dog is a puppy (2 or younger),
an adult, or elderly (10 or older).

Log to the console the appropriate age range
(puppy, adult, elderly).
*/

var dogAge = 2;
// Write your conditional here

if (dogAge <= 2) {
  console.log("Your dog is a puppy! Cute! This means that they are 2 years old or younger.")
} else if (dogAge >= 10) {
  console.log("Your dog is either 10 years old or older, which means your dog is elderly. Let them rest and give them treats.")
} else {
  console.log("Your dog is an adult. They are between the ages of 2 and 10 years old. They should be responsible and mature but still fun.")
}


/*
YOU DO:
Using the numQuarters variable defined below, determine
if you have enough money to buy a gumball. A gumball costs
two quarters. Right now, the program will log
out both "I have enough money for a gumball" and
"I don't have enough money for a gumball". Write
a conditional statement that ONLY logs one or the
other.

You should be able to change num_quarters and achieve these outputs:
When numQuarters = 0, program should log "I don't have enough money for a gumball"
When numQuarters = 1, program should log "I don't have enough money for a gumball"
When numQuarters = 2, program should log "I have enough money for a gumball"
When numQuarters = 3, program should log "I have enough money for a gumball"
*/

var numQuarters = 1;

// Write your conditional here

if (numQuarters <= 1) {
  console.log("I don't have enough money for a gumball");
} else if (numQuarters === 2 || numQuarters === 3) {
  console.log("I have enough money for a gumball");
} else {
  console.log("I have enough money for at least 2 gumballs!")
}

/*
YOU DO:
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.

You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/

var cupsOfFlour = 5;
var hasSauce = true;

// Write your conditional here

if (cupsOfFlour <= 1 || hasSauce === false) {
  console.log("I cannot make pizza");
} else if (cupsOfFlour >= 2 && hasSauce === true) {
  console.log("I can make pizza")
} 

/*
For the last two exercises, an ideal solution probably uses a logical operator.
Did yours? Do you know what a logical operator in JavaScript is? Google it to answer
for yourself!

I used an || logical operator in the penultimate exercise, as it reduced the number of else
if statements I would have to write. The || operator means "or" in Javascript, and if either
of the conditions are met on either side of the ||, the statement will run. It first evaluates
the condition to the left of the operator, and if that evaluates to false, it does not check
the right side. I googled this and did the reading ahead of time.

In the final exercise, I used the && logical operator as well as the || operator. The && logical
operator means "and" in Javascript, and for the statement to execute, both conditions on either
side of the && must evaluate to true. Using both the || and && in this if statement drastically
reduced the amount of code I would have to type.

*/
