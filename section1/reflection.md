## Section 1 Reflection

**1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?**

This article was a nice reinforcement of what I already understood about the learning process.  One new item I hadn't heard before was the last item on the list: take short breaks often.  Over the last week, I've added a pomodoro timer to my work and so far I think it's helped maintain my focus better over the day.  It will be interesting to see how it works during the longer hours of Module 1 as well.  

The only think I would add is additional points under the brain care/health section.  In addition to eating right, I would add the importance of exercise and sleep.  What little I know of the research says that these are also critical components of brain health.  

**2. What are the data types you learned about in this section? In your own words, define each.**

This section covered string, boolean, and number data types.  I would define those as follows:
+ Strings are letters and/or other characters within quotation marks.  Numbers can be coerced into being strings, such as in the exercises from this section.
+ Booleans can be either true or false values.  
+ Numbers represent all numbers, including negatives.  These can be float (decimals) or integers (whole numbers).

**3. How would you log the string `"Hello World!"` to the console?**

console.log('"Hello World!"'); //This will include the double quotation marks in the output.

**4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?**

You would use the double slash marks like this:  //This is a comment.  This allows you to give further information to yourself and others reading the code, but that won't execute as part of the code.  Each line you want to comment out has to include the double slash.

Alternatively, you can comment out large portions of text easily by leading the comment with /* and ending with */.  In several editors you can also select a line to comment out by pressing command + / as this will apply the // to the front of the selected line(s).

**5. In your own words, what is a variable? How would you explain it to a 5 year old?**

A variable is where bits of information are stored, to remember it later. It's like a memory.  You remember your first name like it's a variable called myFirstName.

**6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?**

I've been using GitHub frequently. 😉  They might have three variables such as:
+ var isLoggedIn --> which will display different information on the screen depending on whether or not a person is logged in. If true you'd want to show the user information, if false you'd want to ask for login and not show any account information.
+ var branchLastModified --> to list when this was last updated.  This is more likely a function, now that I think about it, which pulls together a number and a unit of measurement (days, hours, minutes).  I have just enough knowledge to be dangerous right now, however, so let's say this variable is a string, to include a a number and unit of measurement.
+ var userName --> a string which shows up in several places, such as under your profile when it lists "signed in as".

**7. In your own words, explain what concatenation is.**

Concatenation is simply joining together two or more strings into one string.  This can include numbers coerced into the string as well.

**8. Think of a site or app you use frequently. Where do you think the developers used concatention?**

There are a number of times I've entered my first name and last name separately but the site will combine them into a full name.  This seems like a basic concatenation of adding first name to last name to create full name.

**9. What questions do you still have about the work we've done so far? (not having a question is not an option)**

Text editing of .md files seems more cumbersome in Atom than in GitHub.  Is there a reason we do the editing in Atom rather than GitHub on text files like this?
I'm curious about the functional uses of modulo in coding.  I've googled some of the uses, such as detecting if a number is odd or even as well as converting between seconds, minutes, and hours...but what are the most common uses you've seen for modulo?
Do you have any other sources you recommend for learning JavaScript basics, other than what we've already discussed (such as MDN)?
