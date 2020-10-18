## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I would consider myself to be somewhere in between.  At my current job, for the first year I asked a lot of questions. It was a new industry for me, I knew some things but a lot of the work was overwhelming. For things I felt comfortable exploring on my own I would experiment, but when I knew that I could cause a kink in the system or even hurt myself, coworkers, company product, or equipment I felt like I needed to ask a lot of questions.  

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
I liked having the resources you laid out for us. I knew they would be vetted and dependable.  I have done a lot of outside research since starting at Turing and think I will continue to do so. Hearing different explanations helps me thoroughly understand different topics.  That being said, when I find my own outside resources additional time must be spent evaluating whether or not it is reliable, so when links are provided it's a huge help.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
* A conditional statement is a if/else if/else question.  A real life example would be driving up to a street light. If it is red stop - else continue driving.
* Every webpage that has a login screen probably uses an if/else statement. If the password matches username login. Else "incorrect username, password"

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
add `else if` statements below the `if` statement and above the `else` statement.  The program will read the `if` statement, if the value is false the program goes down to the first `else if` statement, if that value is false the program proceeds to the next `else if` statement. This continues until it finds a true value, if it doesn't find a true value the javaScript defaults to the code written for the `else` condition.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
* Logical and `&&` will check that *two* conditions are met. `&&` will return a false value unless both conditions are met.
* Logical or `||` will check to see if at least one condition is met. `||` will *only* return a false value if *both* values are false.
1. What questions do you still have about `if` statements and/or functions?
If an `if` statement is read top to bottom and executes only one code block, is there a way that you can ask the computer to look for two true statements and execute two codes? Is there a different approach to accomplishing something like that?
