## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

The SuperLearner Article was eye opening for me. I am already a regular reader (I love fiction, the New Yorker, and Reddit), eat well (kale is the BEST), and view learning as a life-long process toward personal improvement. I was surprised to read the "Super learners teach others what they know", as I have always been wary of being a "know-it-all". I definitely intend to grow in this way, as teaching others is a wonderful way to understand what I do and don't understand.

2. What are the data types you learned about in this section? In your own words, define each.

I deepened my knowledge of string, number, and Boolean datatypes. Below are my definitions as they pertain to Javascript:

- **String:** a datatype that comprises letters, numbers, and other characters (text) *wrapped in quotes*. "777" and "Hi buddy" are two examples of a string datatype.

- **Number:** a datatype that includes all numbers, including decimals, negatives, and 0. These are represented *without* quotes around them and do not include commas for larger numbers. 100000, -45.99, and 4 are examples of a number datatype.

- **Boolean:** a datatype made up of only two values: true and false. True can mean "is correct", "is true", "yes", or 1 (when comparing different datatypes). False can mean "is incorrect", "is untrue", "no", or 0 (when comparing different datatypes). true == 1, false == 0, true, and false are examples of the Boolean datatype.

3. How would you log the string `"Hello World!"` to the console?

`console.log("Hello World!");`

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

There are two ways to indicate a comment in a Javascript file. // is used for single line or short comments. /* ... */ is used for multi-line comments. The purpose of a code comment is to remind yourself of what you are tryin to achieve with your code or to indicate to other developers your intentions with your code. It is an important part of expressing developer empathy.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is how we save information that can be used later. A variable lets us use this information many times.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

**Co - Star variables:**

```
var username = "ashleyoh61"; (string)
var isLoggedIn = true; (Boolean)
var motivationalQuote = "You have everything that you're seeking within you."; (string)
```

7. In your own words, explain what concatenation is.

Concatenation is one technique for connecting strings and variable values using + signs and quotes to delineate between variable values and string text. Concatenation is often used to print text to the console/user.
**Example:**

```
var name = "Ash"
console.log("My name is " + name + ".");
```

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

Using Co - Star as my example (as for question 6), I think the developers used concatenation (or interpolation) for the greeting message at top of the home page. Perhaps like this:

```
console.log("Good afternoon, " + username + ".");
console.log("Today at a glance: " + motivationalQuote);
```

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

I'm still learning about the Null vs 0 portion of the [comparison operators](https://javascript.info/comparison) reading. I'm specifically wondering how == and > < <= >= work differently. I am also curious about the specifics of how == and === differ. I will be doing some extra googling to understand!

On another note, when is it better to use concatenation vs interpolation? I personally prefer interpolation for readability, but would love to understand an instance of when concatenation is preferable.
