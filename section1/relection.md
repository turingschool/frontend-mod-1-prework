## Section 1 Reflection

*1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?*

I realized that many of the things on this list are things which I have done in the past, but am no longer actively doing. I used to read a lot, and I'd add to this idea that writing often helps process ideas. I used to have a very active journaling practice, and reflecting on my own past, I believe I was more clear-headed when I was writing and reading often.

I also like the idea of learning as a process, as it makes the notion seem more lasting. There should never be an end goal when it comes to learning. I have experienced this as well, during my massage and esthetics practice. I was always interested in the newest skincare trend, or practicing new massage techniques. It made the work a lot more fun when I always had something new to try out. In the same vein, I learned a lot about these techniques by teaching them to my peers at the spa.

Taking breaks is a new thing for me! I have in the past had something of an all or nothing approach to my studying, meaning I'd cram everything in at once, usually spending an entire weekend day getting everything done. It's a marginally effective strategy, and I'm slowly adapting to doing a little at a time. It's been helpful that the tasks and reading kind of lend themselves to that kind of timing. This is helping me develop a routine, structuring my day around tasks to complete and fitting my life things into the breaks.

*2. What are the data types you learned about in this section? In your own words, define each.*

**Numbers** : Any numeric value, including negative numbers and floats. Large numbers are written without commas. Integers represent whole numbers, negative or positive, and zero. Floats represent fractions or decimal point numbers.

`ex: 3  -47  45298  0.8743`

**Strings** : Strings consist of numbers, letters, and/or special characters and are denoted by quotation marks. Either double or single quotations may be used, but the formatting must remain consistent.

`ex: "Hello, I am a string!"
"867-5309"`

**Booleans** : These are 'true' or 'false' evaluations and are helpful in determining which script should be run. Questions are asked that will return either a 'true' or 'false' response.

`ex: 3 === 6 (false)
5 <= 7 (true)`

*3. How would you log the string `"Hello World!"` to the console?*

`console.log("Hello World!")`

*4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?*

Code comments should ideally clarify the intent of the code, and/or make it easier to understand. They can also be used to block a line of code from being recognized by the JavaScript interpreter.

Code comments have two recognized formats in JavaScript. Inline comments, denoted by //, or block comments, denoted by /* (text) */.


`// *This is an inline comment. If in a line of code, this will prevent the remainder of the line from being interpreted.

/* *This is a block comment.
These are often used to provide descriptions.* */
`

*5. In your own words, what is a variable? How would you explain it to a 5 year old?*

A variable is like a box. If you are playing a game, imagine having five different boxes. Now imagine that each box contains a different toy. When you want a certain toy, you can choose the number of the box. You can then play a game that will choose the box depending on which toy you want to use, OR you can play with all the toys by putting them in the order you want and taking out each toy individually.

*6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?*

iNaturalist - The top of the "Me" page lists the username, so I'd guess there's a `var userName = ""` associated with that. Then the listing of observations contains the common name and location of the entry. These could possibly be represented by `var commonName = ""` and `var locationOfObservation = ""`.

*7. In your own words, explain what concatenation is.*

Concatenation is the operation of joining strings end to end. The operator is a `+`. Multiple strings and/or variables can be joined together in a `console.log()` operation.

*8. Think of a site or app you use frequently. Where do you think the developers used concatention?*

In iNaturalist, there is an "Activity" section, which displays suggestions made on my observations. It lists the `var userName + "suggested an ID: " + var commonName + var dateOfSuggestion`

*9. What questions do you still have about the work we've done so far? (not having a question is not an option)*

I'm curious if there is a difference between an interpreter and a compiler? I've heard both terms used and don't really understand the distinction, or if there is one.
