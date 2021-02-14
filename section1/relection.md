## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?
 - This article resonated with me because I feel as though I already do some of these things. I have always been able to retain information and learn information with relative ease, but I did not realize that some of my day to day habits were responsible for helping me do that.
    - I already read a lot (though not as much as I did as a child), and I frequently take breaks when I am working. Starting in college I found that it was easier for me to be productive if I worked hard for 45 min to an hour then gave myself a 5-10 minute break.
    - In terms of teaching others, in college my classmates and I would get together and review material and talk through it together, both reviewing and teaching one another. This is definitely a habit that helps me retain information and I hope to do more of it with my fellow cohort members as we delve deeper into this program.

2. What are the data types you learned about in this section? In your own words, define each.
  - String: letters, numbers, and/or special characters that can be wrapped in quotes to create one variable. Quotes could be 'single' or "double". Strings can include a single word, a sentence, an address, etc.
     - `var school = "Turing School of Software and Design"`
     - `var aboutMe = "My name is Ashton and I am 28."`
  - Number: includes all integers. Positive numbers, negative numbers, decimals, fractions, etc.
     - `var age = 28`
     - `var amountOwed = 5.25`
  - Boolean: gives a variable one of two values (true or false). In coding this value can help determine which script to run.
     - `var isTired = true`
     - `var canRun = false`


3. How would you log the string `"Hello World!"` to the console?
  - `console.log("Hello World!");`

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
   `// Two backslashes is used for a single line
   // Single line code is used to explain what a specific
   // command does.
    /*
    Wrapping text in these characters allows you to
    write comments on more than one line.
    Multi-line comments are usually used to explain how
    a script works.
    */`

5. In your own words, what is a variable? How would you explain it to a 5 year old?
  - A variable is something we use to store information that can be used at a later date and can be used multiple times. The information stored in a variable can be changed based on our needs.  

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
   - Instagram is an app I use regularly. Three variables that are probably used include:

   `var userName = ""` This variable is stored as a string and can be reassigned whenever you want to change it. The `userName` can be made up of letters, numbers, and special characters

   `var numberOfFollowers = 100` This variable would be a number or integer. This variable would update as you gain and lose followers.

   `var isPrivate = true` A boolean is likely used for whether people are private or not. Having this as a boolean would determine if a prompt is needed to accept followers or if a request is not needed.

7. In your own words, explain what concatenation is.
  - Concatenation essentially a way to join variables together into a string, even if they are differing data types.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?
  - Going back to Instagram: an instance where concatenation is likely used or something similar is in the notifications. Notifications spit out a string that includes several variables.
    - The notification may read "ash.hux mentioned you in a comment: looks good!"
    - The concatenation would be utilized to insert the user name and the comment.
    - `var notification = " " + userName + " mentioned you in a comment: " + comment; `

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
 - I noticed in concatenation, that using the syntax varied. Sometimes it was written `var snackCount = "I have " + quantity + " " + snacks;` where quantity and snacks were separated and snacks was not fully wrapped. In another example it was written `var snackCountConcat = "I have " + quantity + snacks "!"` where they were put together within the quotes. Obviously they both come out in the console correctly, but why would the syntax differ?
