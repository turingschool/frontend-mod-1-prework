## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?


After reading the three blog posts in Part A, I feel better about asking questions. I have a better understanding of
when to ask questions, and how to ask them. I know understand that asking questions not only can benefit you, by
saving lots of time, but can help to create a good culture in team settings. I usually fall into the
category of waiting too long to ask a question. I usually spend hours looking for a solution or staring at my
work before I allow myself to ask a question. From the readings, I will start to set a timer for 30 minutes
from the time I get stuck and stop making progress to allow for trying to find a solution. If no solution
presents itself then I will reach out and ask for help once my time limit expires. Furthermore, I will
start to try and think about the question I want to ask before I ask it.


2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?


At first I thought something was missing from some of the files, so I was a little confused. However, I realized
the formula that was set up in Section 1 pre work and mod 0 laid a great foundation for the tools I can use
and resources to find the information I need. In section 1 I took pretty detailed notes and continued to do so
in this section, so when I reached a point where I was confused or stuck, looking back at notes was super helpful.
It's a little uncomfortable to read blogs and websites that try and explain the concepts we are learning and to
know if you should trust those resources. I found it helpful to use the book `JavaScript and JQuery` and then try
and relate what I found in the book to online blogs and websites. These practices helped me realize that I can still
learn and understand concepts without having all the information in front on me, and I have developed skills and
tools to find the answers that I am looking for.


3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.


A conditional statement is based on the concept that if a condition is met then do this thing, if it is not met
then do something else. Usually conditional statements are set up as `if...then` statements that evaluate to true
or false return values. Conditional statements are rules that you set to determine possible outcomes. In daily
life an example would be, if I am ready for bed (`true`), then I must brush my teeth. If I am not ready for bed (`false`), then I do not need to brush my teeth. In a web application, use Facebook as an example; when a user tries to log
into their account a conditional statement is most likely coded to set the condition that if the username and
password are correct (`true`), bring the user to their homepage. If the username and password are incorrect (`false`),
take the user to this other page to try inputing their username and password again.


4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple conditions to an `if` statement you use `else` statements and `else if` statements, however they
must be chained to an original `if` statement. An `else` statement will run a block of code if the previous
condition(s) (stated in the `if` condition) is not met (evaluates to `false`). The `else if` statements will
run a block of code if the previous condition(s) (stated in the `if` condition) is not met
(evaluates to `false`), and the new `else if` condition is met (evaluates to `true`). If the new condition set
by the `else if` condition evaluates to `true` then it excutes a new code block to run. This process can
continue by adding more `else if` conditions, therefore creating an original `if` statement with multiple
conditions that follow. Adding an `else` statement at the bottom will run a block of code if the previous
conditions above it have not been met.


5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?


A tool that you can use as a developer to check that two conditions are met is the logical `AND`(`&&`) operator. The
logical `&&` operator can be used to check if both expressions/conditions on either side (of the `&&`) are met, and
evaluate to `true`. An example would be:
```JavaScript
(true && true); //true
(false && false); //false
```
A tool that you can use as a developer to check that 1 of 2 conditions are met is the logical `OR`(`||`) operator.
The logical `||` operator can be used to check if at least one expressions/conditions on either side (of the `||`) are met, and evaluate to `true`. An example would be:
```JavaScript
(true || false); // true
(false || true); // true
```


6. What questions do you still have about `if` statements and/or functions?

I still have a question about the syntax of `if` statements and functions, what is the correct syntax
after the closing {} bracket, is there a ; (semicolon) after the closing bracket `};` or is it just `}` ?
The if-statements exercise didn't use semicolons after the closing bracket but the functions exercises
was using semicolons after the closing bracket. Wasn't sure if both are correct, but I'd love to 
know what the standard is.
