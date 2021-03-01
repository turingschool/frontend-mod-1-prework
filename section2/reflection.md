## Section 2 Reflection

**1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?**

I would normally encourage asking lots of questions, but I understand the purpose in the Turing method of trying to first direct students to seriously attempt to find the answer themselves.  About a year ago, I embarked on a similar change at work with the staff I oversaw.  I realized that I had become too enabling of providing answers and the staff had devolved into coming to me first at their initial uncertainty, rather than trying to find an answer themselves.  It does no good to me, my staff, or the organization to foster that kind of situation, so I worked hard to correct that and better enable my staff to be the independent people I knew they could be.  

Personally, I think I'm somewhere in the middle in terms of my timing for asking questions.  I used to wait too long, but learned in graduate school to ask them early.  Now I've adjust back again to try to ask the questions *of myself early*, but also first attempt to answer them *before asking the question of others*.  I'm still working toward a better balance, but as the README says, it will "take some time to find that balance".

**2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?**

It can be a little uncomfortable, and for me at least, that really comes from the worry that I might be approaching learning in an inefficient way.  I know I can figure most things out eventually, but I don't want to spend too much time on any item, pursue too many dead-ends, or rely on poor info sources. Ultimately, I feel this style supports my learning in a couple of ways.  First, it makes me more self reliant for finding answers and learning.  This will pay off in the future and in my career, as I'll be better able to act independently, even in areas with lots of unknowns.  Secondly, I suspect this helps with integrating learned material better.  There's a deeper understanding that comes from having to find and learn information yourself, particularly in regards to how to do a specific technique or answer a specific question.

**3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.**

A conditional statement represents decision-making behavior of JavaScript and determines whether a piece of code should run.  We learned about three such types: if, else, else if.  An example from daily life, if my phone rings, I look at the screen to see who it is.  Online, when I'm on news.google.com and I mouse over a hyperlink it gives that link an underline.  That might be happening through a conditional (if there's a mouse cursor on the link, underline it).  

**4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.**

To add multiple conditions to an "if" statement, I would use "else if" to list several possibilities, and end with "else" as a catch-all.  The program starts at the top with the "if" statement and if the condition is met runs that code and moves on to the next block of code (outside the if/else if).  If the first condition isn't met, though, it goes to the first "else if" and checks that.  It goes through those until it either finds a true condition and can run its code, or it reaches the end of the block and runs the "else" statement.

You can also add logical operators (such as && and ||) to add multiple conditions to a single "if" statement.  In that case, the program will read to determine if both are true (&&) or if one of them is (||).

**5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?**

You could connect together multiple conditional statements to cycle through and check each individually.  You could also use logical operator to check if two conditions are met (using &&) or if one of two conditions are met (||).

**6. What questions do you still have about `if` statements and/or functions?**

How do you determine the best way to structure a long list of "if" statements you want to check?  At some point is it better to have a lot of short "if/else" type statements that you can collect into variable, or is it best to have one long list of "else if"s?
