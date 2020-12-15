## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

#####

I really feel safe and confident asking a questions if i need so, at the beginning I use to ask immediately, but eventually i came up with better concept for myself. Now before asking a question, i do google and go through some information to make sure i can solve the problem before asking a question, if i do so, then i just move to next step in my project. But if i don't find correct answer in google search, i move to slack threading my question. Now mostly i have success finding answer to my question in a google search. Sometimes i do read over again question and come up with solution in my head and apply it to make sure is it works or not.  
#####

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

####

Honestly, i did not had an issue remembering to run node at the end of each exercise file, I did remembered clearly from section 1 that this is the way to check your work and to see is code written right, also saving your work to atom before to run node is was important part, otherwise you wont be able to see changes. It defeately gave me feeling that i am in a right place and direction if i do remember how to work without directions.

####

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

#####

 Conditional statement based on concept of if/then/else. It can have one condition with couple statements. if their criteria met then code executes one or more statements, if not, then it does something different or just skips the step.

In slack there is an option set yourself inactive and you choose how long to keep it inactive. When time is up it send you a question "do you still want keep yourself inactive?" and two buttons "yes keep inactive" "set as active".So depending to my answer conditional statement run proper command from block of code.

####

#### Example:

var inactiveChoice = true
var choice1 = "yes keep inactive"
var choice2 = "set as active"

console.log("Do you still want keep yourself inactive?");

  if (inactiveChoice == true) {
    choice1 = "yes keep inactive";
  } else {
    choice2 = "set as active"
  }


  var faraCooksBreakfast = true
  var jasonCooksBreakfast = false

  if (faraCooksBreakfast == true || jasonCooksBreakfast == true ) {
    return 'yay';
  } else {
    return 'wtf we hungry bro'
  }

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

*/
By creating multiple variables with it's value we can run it as a multiple conditional statements. Using if/else if/else, each of the variable will be set as a condition to determine it's statement when it meets the criteria.

#######

if condition meets the criteria true it will run a first block of code which is held in curly bracket, if else condition meets the criteria false then it runs second block of code inside of curly bracket. else condition meets criteria false it runs everything else.  
/*

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

####

I can use tool Logical && operator to check if two conditions are met, or I can use OR || operator to check if one of my conditions are met, before running it.

####

1. What questions do you still have about `if` statements and/or functions?
