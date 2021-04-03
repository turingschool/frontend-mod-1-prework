## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

The suggestion on adopting a growth mindset stood out to me in this article as something I already do. Reading the book on this by Carol Dweck helped inspire me to pursue becoming a Developer. Adopting this growth mindset has allowed me to see that I am able to accomplish learning anything through hard work and grit. I am excited to see where this takes me now that I am on a journey to learn something completely new that I never saw myself doing!

As I begin this journey, something that stands out as important to me is taking short breaks, early and often. We have discussed the pomodoro method in Mod 0, and I have seen success with the short breaks here. I am interested to see how this learning/working style translates to more complex subjects. It is interesting here that they mention that this method helps our neural networks process new information. I have been under the assumption that this method was more about our ability to focus, but it seems there may be multiple reasons that it is a helpful approach.

2. What are the data types you learned about in this section? In your own words, define each.

String - A string is a data type used to represent text. Strings can also include numbers and symbols. Strings are always enclosed in quotation marks or apostrophes.
Number - Numbers are their own data type. This can be positive, negative or 0 and can be a whole integer or a float (number with floating point decimal).
Boolean - A boolean is a data type with two possible values - either true or false.

3. How would you log the string `"Hello World!"` to the console?

console.log ("Hello World!")
OR
var greeting = "Hello World!"
console.log(greeting)

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
To indicate a comment (and make sure Javascript does not read a line), use //. Code comments can be used to clarify a particularly complex line of code for future readers (or your future self!). Comments allow plain language to be incorporated into code. Code comments can also be useful in hiding lines of code from Javascript until they are fully ready to incorporate.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable allows information to be stored so that they can be accessed when needed. Variables are flexible and allow different types of data to be stored for access when needed.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I use Netflix frequently.
The show I most recently watched would be stored as a string:
var recentlyViewed = "The Great British Bake Off"
The season of the show would be stored as an integer:
var currentSeason = 2
My Netflix plan is stored as a string:
var planDetails = "Standard"

7. In your own words, explain what concatenation is.

Concatenation could be simply described by using the phrased "joining together". Concatenation joins together strings, numbers, and variables to form a new string that joins the different elements. Concatenation uses the + symbol to add together these different elements.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

Website greetings are a good example fo concatenation. Facebook uses a greeting to ask what's on your mind when logging in. The prompt to make a post is "What's on your mind, Mae?". To personalize this message, a developer could set a name to a variable for the account, and then concatenate the variable with the phrase "What's on your mind, "

EX:
var firstName = "Mae"
console.log("What's on your mind, " + firstName + "?")

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
 - Why would you use concatenation versus interpolation? What are the advantages/disadvantages of both? What are some scenarios where one would be better than the other?
 
