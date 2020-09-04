## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

  * Read a lot: I am curious about developing technologies and new processes, and I enjoy reading about advances (and also sci-fi).
  * Learning is a process: I'm a big fan of the word "yet".
  * Growth mindset: Thinking that you know all you'll need to know is arrogant. There's always more to learn and there's always a possibility that old data was wrong.
  * Teach others: You don't truly understand something unless you can explain it in simple terms.
  * Care for your brain: Eat good food, get sunlight, move around, go to therapy, play with friends.
  * Take breaks: Change your scenery set a timer, stand up and stretch.

2. What are the data types you learned about in this section? In your own words, define each.
  * String: a series of characters that can be stored as a var and returned. Surrounded by single or double quotes. Alphanumeric, symbol, space, special characters.
  * Number: Integer or Float. An integer is a whole number, can be positive or negative, and can be 0. A float is a number with a decimal point, can be positive or negative, and can be 0.0. Numbers can have operations done to them, like add, subtract, multiply, divide, modulo.
  * Boolean: Either true or false. Lowercase words, used in if/then statements.
  * Array: Represents a collection of things - usually things that are the same data type. Surrounded by brackets, and separated by commas.
  * Object: Contains other data types - surrounded by curly brackets. Can be used to set multiple vars at once.

3. How would you log the string `"Hello World!"` to the console?
```JavaScript
console.log('"Hello World!"');
```

  * I could also set a var greeting and assign "Hello World" to that var, and then call it with console.log, but that takes more steps.

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
  * A one-line comment is offset by // at the beginning. A multi-line or inline comment is offset by */ at the start and /* at the end. A comment is a note for future developers who will look at the code. It should be helpful information regarding what the code does.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
  * A variable is something that you want the computer to remember, so you can refer to it later. Everyone's name is a variable. If no one had names, we would find it very hard to talk about other people. But since we have names, we can say "when you want to speak about this person, you can use the word 'Elsa'".

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
  * Idle clicker mobile games likely use integers to track the user's level, and floats to track the amount of money they're generating at any time. If you enter your name and it refers back to you with your name, that would be a string. If you haven't unlocked a certain level, it could use a Boolean to see whether you can access that level.

7. In your own words, explain what concatenation is.
  * Concatenation is when you list things one after another. It uses the + between elements and returns a string. It can be used to combine more than one var into a single string.
```JavaScript
var catName = "Hammer";
var catAge = 10;
console.log(catName + " is " + "catAge")
// expected return Hammer is 10
```

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
  * When you create a mail merge, you are concatenating fields from a spreadsheet into a single table cell in Word.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
  * If you set a var to a certain data type, can you change that data type later?
