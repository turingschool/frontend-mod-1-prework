## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

There are my big takeaways from the Super Learner article. To be an effective learner, you have to:

* Read - No secret here. Reading makes you smarter. After reading Fahrenheit 451, I recently rediscovered my love of reading and gained a new appreciation for reading as a path to enlightenment. But because reading can be such an active exercise, it’s often less appealing than a more passive activity such as watching TV. This is a habit I’m constantly trying to workaround.
* Be open-minded - Be willing to view learning as a lifelong process. Be receptive to different thought models and perspectives. Your thinking must be flexible, you must be able to adapt your thinking.
* Collaborate - Work with colleagues to learn the same material, or by teaching newly learned concepts to someone else. Teaching allows you to test your knowledge of new concepts and identify areas of weakness that you can then focus on. I collaborate well with others, but collaboration is not something I seek out on my own and this is something I will definitely need to work on.
* Take neurobiology into account - At a purely functional level, the brain needs the right nutrition and the right amount of rest in order to function effectively. Eating and resting are simple strategies to improve learning that can easily get overlooked since we don't necessarily think of our brain in the same way we think of muscles or other organs. I was a psychology major in college, so I certainly appreciate this. But putting it into practice requires a deliberate effort!

Part B - Exercises

2. What are the data types you learned about in this section? In your own words, define each.

* String - A datatype consisting of letters, numbers and special characters. In JavaScript denoted by “quotation marks”
* Number - A data type consisting of integers or decimal numbers
* Boolean - A data type with a value of either true or false

3. How would you log the string `"Hello World!"` to the console?

````
var string = "Hello World!"
console.log(string)
````

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

````
// In JavaScript, code comments are inert non-reactive statements within the code base denoted by two backslashes. They can be used to include developer notes that won’t affect the code, or they can be used to deactivate/reactivate sections of code to observe their effects on output.
````

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is an expression that allows us to store values of different datatypes and then re-use or edit those values repeatedly throughout the code base. Your score on a video game like Space Invaders is a variable. The number of points you have is stored and saved as you're playing the game, but it needs to be continually updated as you earn more points.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

Any banking app would likely have the following variables:

````
var accountName //string
var accountBalance //number
var sendEmailNotifications //boolean
````

7. In your own words, explain what concatenation is.

Concatenation is a programming term meaning "join together." Variables of different data types can be joined or concatenated (am I conjugating that word correctly?) into a single output string using the + operator in JavaScript.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

When I look at credit card offers on CreditKarma.com, I see phrases like "Your awesome scores could help you get more rewards, Cameron." That's a concatenation of a constant phrase with the variable of the user's name. In JavaScript this would look like:

````
var username = "Cameron";
Console.log("Your awesome scores could help you get more rewards, " + username + " .");
````

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

We'll probably get into this at a later stage, but I'm curious to see how JavaScript console outputs relate to HTML and CSS and what role this console plays in determining the appearance and functionality of a web application. Are these console outputs just processes that take place in the background based on inputs provided by the user?
