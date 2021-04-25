## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?
I thought the article was very succinct. The suggestions for improving your learning skills are very approachable.  As a child and pre-teen I was a voracious reader, but had very limited tastes in books.  Over the years, the number of genres I enjoy has increased, but I spend very little time reading beyond articles online.  I'd like to pick up more books and be okay with not reading the whole thing.  My stepdad is the definition of a super learner and he is reading 3 or 4 different books at all times, and absolutely _loves_ to tell us all about what he's reading over dinner.  I hope to discuss what I am learning at Turing over dinner, and possibly share what I'm learning with my son as it's possible that one of his classes next year will have an element of coding.

2. What are the data types you learned about in this section? In your own words, define each.
Strings are a data type comprised of symbols such as letters, numbers, and characters such as $, &, -, etc.
Number data types can be integers, numbers with decimal places, and can even be simple equations.
Boolean data types are used to compare statements with a result of either true or false.

3. How would you log the string `"Hello World!"` to the console?
```
console.log("Hello World!");
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
Two forward slashes // can be used to comment each line individually or one slash and a star /* */ around a block of text will comment the entire thing.
Comments are used to give context to chunks of code.  Well written comments should clearly state the intention the code that follows in simple, yet technical language.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
A variable is a like a container you can use to store things.  You should use different containers to store different kinds of things.  A bottle to store juice, a plastic baggy for a sandwich, thermos for soup, tupperware for salad, and it is easy to reuse them when you have something new to store!

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
These days, most sites allow (require?) you to create an account, so they will have variables for user names and passwords that will allow a user to store strings.
```
var userName;
var password;
```
I like browsing old.reddit.com and that version of the site requires a user to click "next" to go to a new page.  The newer version of the site uses a continuous scroll, same as the Chrome browser extension RES.  It is likely that they used a number variable to track which page the user was on, so it was easy to go backwards or forwards.
```
var pageNum = 0;
```

7. In your own words, explain what concatenation is.
Concatenation is a way to break up a sentence into multiple strings so that a variable can be inserted.  It requires the use of the '+' character to join the fragments together.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
The front page of Facebook inserts your name into a text box that prompts:
```
"What's on your mind, " + firstName + "?";
```

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
From my programming experiences of the past, variables would include the data type in the definition, something like:
```
var String userName = "Elise Beall";
```
Are the variables not assigned a type until they are defined?  For example, this variable has no type on line 45:
```
var userName;
var password;
var birthday;

userName = prompt("What is your name?");
console.log(`${userName} has been logged in.`);
```
Is there a default variable type?  String?  
