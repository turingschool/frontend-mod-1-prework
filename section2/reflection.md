## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?


I think in the past, I have asked questions at a good time (after I have thought about the challenge I was having and spent some time on it), and it's hard to say how that will change with learning a brand new skill/career.

I think it is really helpful to have dialogue about new material and ask classmates' questions, even if it might seem "dumb", because the more I am learning, the more I see there is to learn! You could really go down rabbit holes, and I think this is why the author was expressing that asking questions can really save you time. And if I am saving time, I am able to use that saved time to learn and build more.


However, I do think that asking questions *without* having *first* tried a few things, googling, and then knowing "what" exactly you are asking is not very helpful.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?


I think it worked well. I think the pages we read in the book are very descriptive and have great diagrams. I also think I really like learning through reading, so the PDF has been very helpful. To pair that with other resources like a video for the auditory and visual piece and to see someone walk through functions was very helpful.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.


A conditional statement controls behavior in javascript and decides when one or more statements will run. We use if statements to do this. If a certain condition evaluates to true, the browser will make one decision and when the condition is not met/or it is false, the browser makes a different decision. For example you might have certain tasks you want the browser to run when a user is logged in to a webpage and only when the user is logged in. For example, you might only want a user to have access to confidential data after they have entered their unique username and password and are now logged in to their personal account. Otherwise when the user is not logged in, then the browser might prompt a message for a user to sign in with their credentials. A web application may use conditional statements for these circumstances.

```
isLoggedIn = true

if (isLoggedIn === true) {
  displayWelcomeMessage()
} else {
  displayUserLoginPrompt()
}

```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
There are a couple of ways we learned in this section for programs to use multiple conditions in 'if' statements. That is the if ... else and the if ... else if...


The way these work is that the code runs from top to bottom and from left to right, and in an if statement like an else if, you might have multiple conditions. In this case, the first condition will be evaluated and only if that statement evaluates to false will the next condition run. If the first condition evaluates to false, then sequentially the script will continue to run evaluating each condition until a condition evaluates to true therefore, running the block of code within that code block and exiting the if statement.  Similarly, the block of code would *ONLY* run if a certain condition/(s) in your program were to be met/true. So you may have an if statement that never runs on the browser for a given user.


1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?


If we want to check that TWO conditions are met, we are able to use the logical operator && and place the two conditions on either side of that logical operator. If we wanted to check if one or the other condition was met, we would use the logical operator || and place the two conditions on either side of the logical operator.

1. What questions do you still have about `if` statements and/or functions?


NA. Thank you!
