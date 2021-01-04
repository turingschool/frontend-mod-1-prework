## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

Somewhere in between, probably.  I think in the past I've been guilty of both asking too soon without thoroughly exhausting my own internal resources, and also of digging my heels in and spending too much time trying to do everything on my own.  I'm feeling good about using the strategies listed in these articles - I think it will be effective to mind this 20-30 min "frustration period" so that I know when the time's right to go ahead and ask my dumb questions.   

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I felt good about it!  I didn't feel uncomfortable at all - it was helpful to start familiarizing myself with some of the websites / outside resources that will no doubt be useful down the road.  It usually supported my learning by providing me with a second/third definition or explanation of a term or concept in our lesson - basically calcifying or punctuating what I was already getting to know from our **README** text or the *Duckett* book.  

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is based on a concept of *`if/then/else`*; first an expression is evaluated - returning a Boolean value - and then a statement indicates how to proceed based on whether that condition is 'true' or 'false'.  Often multiple branching statements will be daisy-chained together, executing different blocks of code depending upon whether these conditions are met.

On the home pages for most liquor brands/distributors, you're immediately prompted with a window requiring you to enter your date of birth to "prove" that you're 21 or older before proceeding.  I'm sure the script behind each of these uses a function with a conditional statement that essentially asks "has the user submitted a DOB <= the date exactly 21 years before today?", and then either redirects the user to some sort of "underage" page (with a value of `false`) or allows them to access the main directory (if `true`).

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

To add multiple conditions you simply start with an initial `if` statement, succeeded by as many `else if` statements as you'd like in order to cover additional scenarios, and perhaps finally an `else` statement, if you want a "catch all" for any situations not explicitly proposed by all the previous conditionals.  

The program sees `if` and asks, "is this condition `true` or `false`?"  If answered `true`, execute the code within.  If answered `false`, move on to the next conditional.  Then it might see `else if`, and again ask "is this condition `true` or `false`?"  If answered `true`, execute the code within.  If answered `false`, once again on to the next conditional.  Eventually and finally this might lead to an `else` statement, at which point it is basically told "the condition here is automatically `true`, so execute the subsequent code by default."

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

In both of these situations you'd want to use a *logical operator*.  To check that two conditions are met you'd use `&&`, and to check that just 1 of 2 conditions is met, the `||` operator would make more sense.  

1. What questions do you still have about `if` statements and/or functions?

The `if` statements were pretty straight-forward, I'm mostly just wondering about functions at this point, i.e. best practices regarding function structure.  Like, in what context does it make more sense to use arguments as values, and when would it be more effective or *clean* to use arguments as variables.  I'm sure we'll get into all that soon, but that's just what I've been curious about after finishing this section.  
