## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

N/A for now -- could not access the article.

2. What are the data types you learned about in this section? In your own words, define each.

The data types I learned about in this section were numbers, strings, and booleans. Booleans are binary true/false variables -- they can either be true or false. Numbers in Javascript apply to all floats and integers -- any number, whole or decimal point, negative or not, will be a number variable. And strings are pieces of text data.

3. How would you log the string `"Hello World!"` to the console?

`console.log("Hello, World!");`

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

The characters you can use to indicate a comment in Javascript are `//` and `/* comment */`. The former is for inline comments, and the latter is for multi-line comments. The purpose of a code comment is to make your code more readable to you and other developers-- you can keep track of input/output, clarify what a function or variable is for, say how a function does something, etc.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a piece of data, or information, that the computer needs to remember for use later. For example, there are 10 plants in this room right now that need to be watered, so the computer might save the number 10 as a variable. But then, when I water one of the plants, now only 9 of the plants need to be watered, so the computer needs to be able to remember that number, so it can change that number from 10 down to 9.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

An app I use fairly frequently is Etsy. Three variables that it probably needs to use are sellerName (a string, holding the name of the shop selling the item), itemPrice (a number, holding the price of the item you're purchasing), and hasGivenRating (a bool, telling whether or not you've rated the item that you bought).

7. In your own words, explain what concatenation is.

Concatenation is the act of essentially adding strings and data pieces together to make a bigger string. You can use a `+` operator, much like how you'd add two numbers, to combine two strings, or to combine a variable with a string.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

Using Etsy as an example again, the app will sometimes have little banners over a series of reccommended items that say things like "Hey Dean, check out these new products!". I'm guessing there, they have to use concatenation to add my name (a variable) to their prebuilt message using something like `"Hey " + userName + ", check out these new products!";`.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

I think I'm understanding most of what we've done so far pretty well, and am more just curious about how this will apply when we get into more complex data types like arrays and objects. I am curious as to the relationship between concatenation and interpolation -- which one came first? Was interpolation developed as a faster way to achieve concatenation, or was concatenation developed as an easier-to-write way to do simple interpolation? Also, how exactly does the computer know what's a string vs. boolean vs. number when it comes to Javascript, as they're all declared just using "var"? I assume it has something to do with translating it down to a lower-level language and/or just recognizing it based on the value, because it will tell you you can't do things with certain variables.
