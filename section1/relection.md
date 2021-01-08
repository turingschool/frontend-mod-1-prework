## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

When starting a program like Turing, especially having been out of school for a long time, it is encouraging to see learning presented as a skill that you can improve upon rather than an innate ability determined by your brain type/age. I've definitely heard the stereotype many times that adults just don't learn new things very easily, especially when they involve a lot of recall. This article resonated with me because it implicitly challenged that idea.

My main takeaway for myself is that I already engage in a lot of the habits for consuming new information, but I don't spend enough effort on maximizing my recall and processing the information. To be more specific, I am still and have always been a pretty voracious reader, of both books and online content. However, it is common for me to barely remember what a book I read a year ago was about. This is because I don't take the time to reflect on what I have read or process the new information. To combat this, I plan to jot down key points from content that I read.

The article also mentions that teaching is the best way to cement concepts in your mind. So far during Mod0, I have been informally telling my partner about what I learned that day or class session, and explaining what some of the things mean. Although I think the concepts will become hard for him to follow in such a short debrief, I have found this external synthesis of information helpful for me and am going to try to keep doing it throughout the course.

One thing that I would add to this list: from my school days I remember that I used to repeat information to myself before going to sleep at night, particularly for classes like foreign language and biology where there is a lot of memorization involved. I always thought that this improved my memorization, to study informally outside of a classroom/flashcard study. It seems to "seal" information in my brain before the day's end.

2. What are the data types you learned about in this section? In your own words, define each.

The data types I learned about are *string, boolean, integer/float, and array*.
- **String**: data type that is meant to represent text, and can include letters, numbers, special characters, and spaces. Strings are always contained in "" or ''.
- **Boolean**: True or false data. The boolean data type is meant to answer a yes or no question, such as "Did the user select a date from the drop down?"
- **Integer**: Numerical data type that represents whole numbers. Integers can be positive, negative, or zero but cannot contain decimal points.
- **Float**: Numerical data type that contains decimals. Can be positive or negative.
- **Array**: A data structure that contains a group of values. An array can be thought of as a container for a list of values of the same data type. An example is an array for days of the week that contains string values for each day name.

3. How would you log the string `"Hello World!"` to the console?
console.log("Hello World!")

You could also define a variable:
var greeting = "Hello World!";
console.log(greeting)

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

You would use // for a line of code, and /* */ to comment out a paragraph or text block. The purpose of a code comment is to add context to your code without the computer attempting to interpret it as code that needs to be run. You could use this to notate the goal of a function, comment out lines of code that you don't want the computer to run, or make other comments that it would be useful for developers to know when examining your code.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a named holder of a specific value, where the name of the variable describes the meaning of the value. ELI5: A variable is a way to give a name(description) and meaning to something that can change or has different possibilities.
Let's take halloween candy as an example. If you get 65 pieces of candy while Trick or Treating, you can define a new variable for 'Pieces of candy I have' (piecesOfCandy). The value of your variable starts at 65, but as you eat the candy and have less pieces left, the value of your variable will change until is is eventually 0 once your candy is all gone.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I use the New York Times crossword app a lot. Here are three variables:
- A string variable for the written clue for each position. For example, var across1 = "Longtime soft drink slogan"
- A boolean variable for whether or not the letter input into a square is correct. var a5 = True
- There is a congratulatory notice when you are 50% finished with the puzzle that pops up. This could be a boolean variable
var halfWay = true or maybe an integer variable var squaresLeft = 24.

7. In your own words, explain what concatenation is.

A concatenation is when you combine the values from one or more variables, and also potentially strings, that may be of the same or different data types. The result of a concatentation is a new string.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

Amazon likely uses concatenation on the page that displays your shopping cart. When is says "There are 3 items in your cart", that is likely a concatenation of the string "There are ", the variable for number of items, and the string "in your cart".

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

How does the computer know where to get the value of the variable from, if it is something that changes? I know that when we read variable names, we can often figure out what the variable is describing. However, I don't think that sort of inference is possible for a computer, and I am having a hard time grasping how it determines this.

A clarification about console.log: do we only use this function to display the output of something else? Meaning- even without using a function like console.log, the other functions still are performed the same way, they are just "unseen" by us?
