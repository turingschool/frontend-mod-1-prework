## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

The SuperLearner article gave me a little more confidence about starting Turing and starting to learn code for the very first time. A key takeaway for me was that anyone can learn anything with the right technique and mindset. I already read quite a bit, but I think I need to shift my focus to reading more about coding specifically, especially in the month up to starting Turing. Another thing I need to practice is taking more breaks when working and learning; I need to space out my learning time. I want to start doing more of teaching what I know to others/explaining the concepts I know, because after reading this article it's a great way to retain information. One thing I might add is repetition, repeating new syntax of code over and over again to practice writing it.  

2. What are the data types you learned about in this section? In your own words, define each.

We learned about `String`, `Number`, and `Boolean` data types.
A `String` is data type that consists of letters, numbers, and special characters all wrapped in quotes (can be double or single quotes but must start and end with same).
Example: `"Hello", 'hello', '207-307-671'.`
`Number` data type handles all numbers; positive, negative, zero, and decimals. When writing bigger numbers don't include the commas. Examples: `47, -5, .14`
A `Boolean` data type is either true or false. You can think of boolean as true meaning on/1/yes and false meaning off/0/no respectively. Can be used for yes/no questions, or turning something on/off.
Examples: `true, false`


3. How would you log the string `"Hello World!"` to the console?

First by creating a variable and declaring it to store the string.
Then using `console.log('variableName')` to print the result to the console.
```JavaScript
var string = "Hello World!";
console.log(string);
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

// double backslashes are used to denote single line comments
/* denotes the beginning of a multi-line comment, must end comment with */
The purpose of code comments are to allow you to write comments or explanations about the code you are writing, and they will be ignored by JavaScript so they won't show up in your output/console. Code comments can also be used to de-activate parts of code so they are ignored.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable stores a value, and you can resuse that value in other places or change the value. To declare a varaible in JavaScript you need to use the variable keyword `var` assign a variable name then use an assignment operator `=` and a variable vaule.
A variable is like a box, where you can open it to see what's inside, or put something into to, or take whatever is inside of the box out and replace it with something else.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

For lack of insight, I'll use Instagram.
Instagram would most likely use a `userName` variable that would be a string data type that would have a value of your personal user name to login.
Instagram would most likely use a `password` variable that would be a string data type that would have a value of your personal password to login.
Instagram would most likely use a `isLoginCorrect` variable that would be a boolean data type that would have a value of true/false based on if you entered the correct user name and password.

7. In your own words, explain what concatenation is.

Concatenaion means to join together. In JavaScript we use concatenation to join string data types together. However we did some examples of concatenation where we joined string and number data types together, but JavaScript converted the number data type into a string while joining so the output was one joined string data type.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?
Using the amazon website, developers probably used concatention when they recommend similar items to the ones you have purchased. They usually print your name (taken from your username or profile name) and display items similar to the one(s) you have recently bought. Such as if Bob bought a new computer on amazon, the next time Bob logs in to amazon he might see a window that says "Bob, people frequently purchased this mouse and keyboard with the laptop you just purchased".

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

I have questions about variables with different data types interacting with eachother. For instance how would a variable with a boolean data type interact with a variable with a number datatype, because concatention wouldn't work in this instance. This isn't really a question, but I wonder how JavaScript interacts with an actual website? I can't wrap my brain around the work I've done so far and how it relates to a website (a typical website I'm used to seeing), most likely because I've never coded before and the fact of creating a website seems crazy to me!
