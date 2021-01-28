## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

After reading the blog posts in Part A, I found myself relating much of the content to my previous profession as a costume designer/seamstress. I have wasted too many hours trying to solve problems on my own, only for the project to grind to a halt with "project blindness" (called "code blindness in the first blog post). I need to practice asking "dumb" questions, as most people have these questions and there is no shame in it. I tend to vascillate between asking questions WAY too quickly (before thinking about the content) or when I'm already elbows deep in self doubt. I intend to strive for the middle of this scale. I so appreciate Turing's system for asking questions, and I intend to write up a question template in slack for when I do have questions in the future, so I may remember to state everything I have already done etc.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

Honestly, it felt great. I love independent research, and find I learn better when I have to create the neural pathways myself. I messed up my node calls a couple of times, but I'm learning to be less afraid of errors etc in the Terminal. I admit I did have some practice with functions before, but I read/watched all of the material suggested, and walked away with a much deeper understanding of syntax, parameters vs arguments, and naming conventions. I still have plenty of questions, and I'm excited to connect even more dots.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is used to ask the computer to perform specific tasks based on a set of circumstances. In Javascript, this can take the form of an if...else statement. This automates decision making for the computer, and the code can recieve input from the user and/or from previous lines of code (functions, etc).  One example of a daily life conditional would be if the tea kettle is whistling, the water is ready for coffee. A conditional used in my astrology app is when I open the app before 12 pm, the app will greet me with "Good morning, @ashleyoh61". 

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple conditions to an `if` statement, add `else if` statements following. This creates multiple conditions for the computer to interpret as truthy/falsy, and run the program following based on those interpretations. The computer will first assess the if statement and subsequent else if statements (in order from top to bottom), run the first condition that evaluates to true/truthy, and ignore the following statements. If it does not interpret any condition as truthy and there is an else statement, the else statement will run. Here is an example:

```

var color = "green";

if (color === "red") {
  console.log("Stop car")
} else if (color === "green") {
  console.log("Drive")
} else {
  console.log("Proceed with caution")
 }
 
 //prints Drive
 
```

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

Logical operators are great tools for checking if multiple conditions are checked or met. If you want to check that multiple conditions are met, you can use the && (and) operator. If you want to check that one of multiple conditions are met, you can use the || (or). These are immensely useful.

1. What questions do you still have about `if` statements and/or functions?

I'm curious about the necessity of an "else" statement. I have run if statements (just if), if statements with a couple of else if statements (no else), and statements with if, else if, and else statements. I find myself adding else statements for "just in case" scenarios for testing efficacy of the code, but it sometimes feels superfluous. 

I also wonder what the conventions are for using multiple && or || operators. I've used both for 3 conditions, but what is best practice? How many conditions can you evaluate?

As previously mentioned, I'm still learning the similarities/differences between a function and a method. I'm sure we'll get into this later, but I'm going to do a little research myself to scratch the itch. I'm also somewhat confused about where to use semi colons in functions - I feel like I've seen it done a few different ways.

I also noticed the Duckett book says "interpreter" instead of "computer" when talking about decision making. Why is this?
