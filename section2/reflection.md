## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
  * When I have to ask a question, I do my best to gather all the information I have, and pose as simple a question as possible, including backup when it's helpful. I don't want to waste anyone's time (including myself) with an incomplete question. Sometimes just compiling the information and writing out the question will help me answer it, and it sometimes points to a completely different question.

2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
  * There were only a couple places where I had to stop and think about where I'd had instructions on how to do something. And, honestly, sometimes I just tried what I thought was right - like using node to run a file from terminal. I was relatively sure it was correct, so I tried it before looking it up. Having to search my internal file cabinets (and my notes, of course) is a good way to make sure all this new information is organized.

3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  * A conditional statement is one that looks to see if a condition or set of conditions is satisfied, then returns a true/false.
  * I make tea every morning, and the electric kettle has a thermostat in it. When the water gets to the temperature I've set, the light changes from green to red and the heating element turns off.
  * Probably the most common conditional in web apps is some sort of "is this user logged in?" conditional. If you're not logged in, you have the option to log in or sign up, and if you are logged in, you see your profile picture.  

4. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.
  * If your "if" statement could have multiple outcomes that you want different results for, you use "else if". The program comes to the first "if", decides if it conditions are met, and if not, it goes to the first "else if". If that one's conditions are not met, it goes to the next "else if", and so on. When you've run out of specific conditions you'd like to check for, you use one last "else" and if none of the "if" or "else if" conditions were met, the program outputs from the "else" statement.

5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  * You can use logical operators, && (and) and || (or). The && checks to see if both conditions are met, and if they are, it returns "true". The || checks to see if one of two conditions are met, and if so, it returns true. && returns "true" if all conditions are "true", and || returns "false" if all conditions are "false".

6. In your own words, what is the purpose of a function?
  * A function would be used if you want to be able to call a block of code multiple times - like if you have a calculator on your page that adds the two numbers that are input, you don't have to reload the page each time you want to calculate a new sum. You can instead pass the two new numbers (arguments) into the function and get the new sum.

7. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.
  * A parameter is a variable within a function. An argument is the value passed to that variable. You'd use parameters and arguments just like in the calculator example above, where you want to be able to do the same thing multiple times without having to write the code out multiple times or reload the page.

```JavaScript
var numerator = ""
var denominator = ""

function divide( numerator, denominator ) {
  console.log ( numerator / denominator )
}

divide ( 4, 2 );
divide ( 10, 2 );
divide ( 100, 10);
```
  * The parameters are "numerator" and "denominator", and the arguments are the numbers in pairs ( 4, 2 ), ( 10, 2 ), ( 100, 10 ).

8. What questions do you still have about `if` statements and/or functions?
  * I feel like I should have questions, but that I won't know what they are until I use all this more.
