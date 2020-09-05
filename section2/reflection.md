## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I feel like I have conquered asking questions, honestly. I've always been inquisitive about the world period and a long time ago, I realized that asking questions was a good way to find thing out. I don't think I ask them too early; I'm incredibly independent and want to learn things on my own, but I feel like I have some kind of internal timer that knows when to ask. Or, there's a particular level of frustration that alerts me to the fact that it's time to get help. I want to work things out, but I also don't want to waste copious amounts of time while I do it.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
I'm totally okay with the fact that some of the training wheels came off, that is an expected part of the process. What I really appreciate though is that I feel like both Amy and my small group have my back, which is definitely the Turing experience I had in my head. It's not Turing's responsibility to tell me every step of everything and hold my hand though every bit; I am responsible for my  learning. I think just like when you're 16 and you get a car, there's a different ownership between "I bought my first car" and "I was given my first car". I'm definitely in the weeds and willing to work for my knowledge.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
A conditional statement is an exercise that happens only if certain other things happen first. One place I just though of is Amazon; I'm sure it's littered with conditional statements such as "If hasInventory is true, display "buy now" button; if hasInventory is false, display "out of stock" phrase."

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
If you want to check for multiple conditions, the first statement is "if". After "if", everything else becomes "else if", because it's only going to check for the other things on the basis that the first one didn't take place or wasn't true. The program moves through the statemnts in logical order from first to last or from first to "true" and once it's found something to be true, it acts accordingly.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
Logical AND Operators in the form of "&&" are available to me as are Logical OR Operators in the form of "||". Logical And Operators only return true if both statements are true; logical or operators only return false if both statements are false.

1. In your own words, what is the purpose of a function?
The purpose of a function is to make something happen, generally based on a set of other things happening.

1. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.
A parameter is a piece of information that is given to a function. An argument is either a value or variable that appears in parenthesis after the function's name. You use an argument to give the function the necessary information it needs in order to be able to complete it's task.

function displayCoffeeOunces() {
  console.log(amountOfCreamer + amountOfCoffee + "ounces.")
}

var amountOfCreamer = 3
var amountOfCoffee = 12

displayCoffeeOunces()

The parameters are amountOfCreamer and amountOfCoffee. The argument is (amountOfCreamer + amountOfCoffee + "ounces.")

1. What questions do you still have about `if` statements and/or functions?
I really want to get into how to optimally write them and hear Amy's thoughts about the conversation that's raging on Slack.
