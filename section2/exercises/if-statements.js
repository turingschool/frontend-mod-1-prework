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

var dogAge = 5;
if (dogAge <= 2){
console.log("It's a puppy! Aww! Smoosh that face.");
} else if (dogAge >=10){
  console.log("What a sweet elderly pooch. Give that cutie a head pat.");
} else{
  console.log("It's an adult doggo! Boop that snoot.")
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

//solution 1
var numQuarters = 2;
if (numQuarters < 2) {
  console.log("I don't have enough money for a gumball")
} if (numQuarters >= 2) {
console.log("I have enough money for a gumball");
}

//solution 2, better
var numQuarters = 4;
if (numQuarters >=2 && 2){
  console.log("I have enough money for a gumball");
  } else {
    console.log("I don't have enough money for a gumball")
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

var cupsOfFlour = 1;
var hasSauce = true;
if (cupsOfFlour >=2 && hasSauce === true){
  console.log("I can make pizza")
} else {
console.log("I cannot make pizza")
}

/*
For the last two exercises, an ideal solution probably uses a logical operator.
Did yours? Do you know what a logical operator in JavaScript is? Google it to answer
for yourself!

My initial solution for the gumball exercise did not include a logical operator.
I came up with a second solution but I'm not sure why it is better. The code is the
same length in both solutions. Is it because I can more easily change the price of
a gumball (in line 81) of the solution with the logical operator?
*/
