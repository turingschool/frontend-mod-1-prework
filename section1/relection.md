## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

* The biggest point that resonated with me is that "Super learners view learning as a process."  When I finish up a Turing, my learning process will not be over.  There are infinite amounts of new things to learn when it comes to coding.  Instead of setting the goal to finish Turning, I will set out to be the best coder I can be knowing that it will require constant research and practice.  

* I already read a lot.  I enjoy learning new information and researching things that I don't know the answer to.  Before I started Mod 0 I didn't have a focus so my reading has been all over the place.  For now, I would like to focus my research to things that are code related.  I would also like to teach others what I know in order to retain information.  I have set up a study group, and I am going to be ready to teach the definitions that seem important as well as show others how to do the "You Do" exercises.  

* I think that sleep could be added to the list.  It is very important to make sure that your body and mind are rested so that you are better able to retain and access information in your brain.  

2. What are the data types you learned about in this section? In your own words, define each.
* __String__- a sequence of characters stored in quotations.  A string is a data type used to represent text rather than numbers.  
You must enclose strings in "" for the data to recognize as a string and not a number or variable name.  

* __Number__ - Data type that handles all numbers including negative numbers, decimals (floats), and large numbers.  Large
numbers are written without commas.  

* __Boolean__ - Data type that evaluates to either *true* or *false*.  Boolean values are used in Boolean logic, which is a
subset of algebra used for creating true/false statements.  

3. How would you log the string `"Hello World!"` to the console?

* console.log("Hello World!");

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

* To indicate comments in a JavaScript file, I would use //.  Any text between // and the end of the line will not be
executed.  Code comments are used to explain what you are doing in your code.  They summarize code or document the programmers
intent.  They allow us to add information for the other developers in our project, also deactivate parts of our code that we
want to temporarily keep from running.  

5. In your own words, what is a variable? How would you explain it to a 5 year old?

* A variable is something that we use to store a value and re-use that value in multiple places.  If we have complex information that we want to use more than once in our codebase, we store it in a variable so we can easily use it more than once.  When you
declare a variable, you first use the variable keyword var, then name the variable, last you assign a value to the variable.  

* To a 5 year old I would say, "If you were going to write a letter to someone and you know you are going to use your first and last name a lot, you can make a variable called name and assign the variable your first and last name.  Instead of writing your first and last name over and over again, you can just write name and the computer will input your first and last name for you."

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

* I use the fierce45 app a lot to schedule my workouts.  The homepage alone probably uses the three variables:
var name = "First Name"  *Your first name would be stored in a string.*  
var classes = # of classes completed  *Uses the data type number.*  
var reservations = # of future reservations   *Uses the data type number.*

7. In your own words, explain what concatenation is.

* Concatenation is the operation of joining two strings together using the "+" operator.  

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

* The developers may have concatenation where the app says "Welcome back Raquel!"
console.log("Welcome back " + name + "!")


9. What questions do you still have about the work we've done so far? (not having a question is not an option)

* I am still not sure how to reassign a variable.  I know that it can be done, but when I practice writing in JS if I assign a new variable I get the error message:
```
var name = "Harry Potter"
undefined
`I love ${name}`
"I love Harry Potter"
name = Raquel
VM465:1 Uncaught ReferenceError: Raquel is not defined
    at <anonymous>:1:1
```
How do I properly reassign a variable?

 //Note:  Once I went back to edit my work, I answered my own question.  Raquel
 needs to be "Raquel" for the variable to reassign.//  
