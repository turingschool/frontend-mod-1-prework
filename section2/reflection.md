## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

After reading the blog posts, I feel more encouraged to ask questions. They raised good points about time efficiency, and the fact that search engines can't provide the
nuance, experience, or context nearly as well as someone who might actually know a solution to a given problem. Having been raised to prioritize self-sufficiency
over reaching out to others, I tend to wait too long to ask questions. But the breakout rooms and group activities from the Mod 0 sessions are starting to break my shell, and I look forward to when I get stumped enough that I feel the need to ask aloud.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

It felt fairly familiar at this point, and was helpful in pointing out errors that I made along the way. As soon as I ran a file in node and I'd made a mistake, it would let me know immediately.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a way of describing different actions to take for different circumstances.

If out of coffee, then get coffee.
Else make a cup.

If logged in, direct to homepage (if loggedIn = true, load.homePage)
Else prompt signup page. (else load.signUp)

In programming, the steps involved in a conditional statement evaluate to true or false. Conditional operators are used to compare the parameters for such statements, i.e. 4 < 5 evaluates to true.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

Multiple conditions can be added to an if statement by way of `else if`. For each instance of a different condition, else if can be used to describe this condition.
A program iterates, or goes through in sequence the conditions starting with the first if, then checking whether it evaluates to true. If that instance doesn't evaluate,
then the program continues to the next conditional and checks that. It continues this process until the evaluation for true arises, at which point the action for that
condition is executed. 

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

To check if two conditions are met, the `&&` AND operator can be utilized, which will only return true when both operands are true. To check whether 1 or 2 conditions are met, the `||` OR operator can be utilized, which only returns false if both operands are false.

1. What questions do you still have about `if` statements and/or functions?

Are there any limits to what can be described with if statements? It seems like with enough parameters, anything could be described to a computer.
What can I do to make if statements as concise as possible? Is it a matter of being good at understanding logical problems, understanding coding, or both?
