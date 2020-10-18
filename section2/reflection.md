## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I am afraid to look stupid because I so easily do.  That said, I often find the answer I'm looking for easily by searching.  However, I have been stuck on a few things and figure that I will understand them soon enough but am still hesitant to ask because I feel that it is bothersome for others.  I write this as an exercise in change because I would like to let my personal walls down and be vulnerable about the thinkgs I do not yet understand.  They are the things that I am left to wonder about for this section and at this point do not affect my work.  In my notes there are questions that are highlighted for later asking on the chat.  I have not asked them yet but they are starting to pile up slowly.  I would not want that to get out of control so maybe I should ask in my small group first.  I will take a step toward vulnerability and begin to ask them. My questions will be something like this:

Comparison of different types: Boolean rules
If 0 == "0" Can anyone enlighten me on why Boolean("0") returns true?

Why in the javaScript book on page 93 is it said that the difference between parameters and arguments has to do with the type of data stored (real numbers) when every other reading says the argument for a function is listed on the calling and the parameter is listed in the definition of the function?  EDIT: Re-read the book and makes more sense now.

I have used both ways successfuly but when logging a string inside a function when would it be beneficial to write
```console.log(`${stringName}'); ```
as opposed to just the parameter name?
```console.log(stringName);
```

Does Concatenation loosely refer to any string variables being called upon in a command? I had thought that thet needed to be joined into one string output.

I will be doing a bit more research on these questions and asking if I do not find an answer.  Though I feel that I may be waiting too long on the Boolean rules since I read up a bit and still don't get it.


1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

It felt great and was hardly noticable.  Using node has become quite comfortable.  It was also nice to learn from several resources so that nothing was missed. On a last note, I felt that asking us to google something became beneficial as well. I'm a bit afraid to go off-topic as I feel it could make things more confusing but the opposite happened and I appreciated the nudge and even could be viewed as permission to move out of the comfort zone of being spoon-fed.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A condition statement is a process where operations are called upon for parameters or arguments that meet a series of boolean criteria.

Example 1:
If the dishes are washed and the table is clean then dessert is served, otherwise the cleaning begins now.

Example 2:
If the tuner dial is greater than the note pitch or the tuner dial is lower than the note pitch, show red light.  Otherwise, show green light and display "You are in tune with " notePitch.




1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You can add multiple conditions by using logical operators like && and || or by listing out different relational operators in subsets.
The program reads these in order, completing the first task that the criteria allows for.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code? 

If statements using logical operators, where the criteria for allowing an operation to be completed includes the double ampersand, &&, between conditions.  This requires that both conditions be met in order to follow commands within curly braces. To check for 1 of two conditions, you would instead use the OR logical operator, ||


1. What questions do you still have about `if` statements and/or functions?

Only this:
I have used both ways successfuly but when logging a string inside a function when would it be beneficial to write
```console.log(`${stringName}'); ```
as opposed to just the parameter name?
```console.log(stringName);
```

