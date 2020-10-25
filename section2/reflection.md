## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

As a former teacher and someone who retains a deep interest in teaching and learning, I think questions are awesome! I don't mind asking them at all and am quite willing to look stupid if it comes to that. And I love when others ask questions and like to help create an environment where everyone feels safe asking questions. That said, I still do sometimes wait too long to ask for help! Sometimes I get stuck in a rut of really wanting to figure something out for myself and stick with it beyond the point where the effort is worth it. I intend to use my time at Turing to get better at self-monitoring so I can learn to recognize when I've been banging my head against a wall for too long.


1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

Loved it! I am enjoying the mix of straightforward instruction and adventuring to find things. I also like that the outside resources point me toward sites I may want to refer to in the future.


1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a thing that may or may not be true. Example: if I can hear my baby crying, it's time to get her up from her nap. Likely example from a web app: in my email, if I'm logged in, then show the contents of my inbox.


1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You give the first case as an "if" statement, subsequent cases as "else if" statements, and then "else" as the bucket at the end that catches everything that didn't fall into one of the earlier cases. The program looks at the "if" condition, and if it's true, it executes the code underneath it and then hops out of the "if" statement. If it's not true, then the program moves on to the "else if" that appears next (if there is one) and evaluates it. If true (and assuming the initial "if" condition failed), the code underneath executes and then the program exits the "if" statement. If false, the program moves on to the next line in the "if" statement. That process repeats for any remaining "else if" conditions. If the initial "if" condition and all subsequent "else if" conditions have failed, then the "else" condition is met and the code underneath that runs.


1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

Logical operators! To check that two conditions are met, use the "and" logical operator: &&. To check that at least one condition is met, use the "or" logical operator: ||


1. What questions do you still have about `if` statements and/or functions?

I'm wondering if it causes a lot of problems that JavaScript doesn't require you to say what data type a function's parameters will be. For example, if I have a function that's designed to add two numbers, but then I pass it two strings, the + in my function definition will just concatenate the strings. Is this a problem that actually comes up in practice, or is it not really an issue?
