## Section 2 Reflection

*1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?*

I usually feel a little intimidated asking questions. I am worried I am missing something super small that would make me
look like an idiot even asking the instructor. I tend to wait too long to ask questions in fear of being a little
embarrassed. I know I am going to have to get over this to be successful at Turing but also not over rely on the instructor.
I hope Turing will teach me the skills to find answers on my own successfully and confidently.

*2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?*

I personally had to revisit section 1 to refresh myself on how to run a file with node. It felt a little more challenging
not having the exact instructions to read from but I knew, in this case, where to look to refresh myself. I also had to
google why some of my if functions were not working in the terminal as expected. It was a little uncomfortable but I was
able to find what I needed in this case with relative ease. I wonder how intense finding what I need on google will be when I am dealing with more complex functions. Finding the answer on my own felt great because I didn't have to ask the instructor
and waste their time when I spent sometime finding it myself.

*3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.*

A conditional statement is code that checks the current status of a script. It compares 2 or more values using the comparison operator which returns a value of true or false.

```
//Daily life conditional:
if (time > 600) {
  console.log("Time to wake up");
}
else {
  console.log("It is sleepy time!")
}

//Twitch app conditional:
if (userOnline === true) {
  console.log(userName + " is now live!");
} else (userOnline === false) {
  console.log(userName + " is offline.");
}
```



*4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.*  

To add multiple conditions to an 'if' statement, first declare the 'if' statement followed by a condition. If the condition
in the if statement returns a false value, the script will move to the next line of the statement, marked with 'if else'. The
script will then evaluate the condition after the if else statement. If that condition returns a false value, it will then evaluate any other 'if else' statements. If those conditions also return as false, then the script will default to the last line of code 'else' and execute whatever script proceeds the 'else' statement.  



*5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?*  

The logical operator ''&&'' is available to us as developers to check that two conditions both conditions are met. If we want to check if 1 of 2 conditions are met, we can use the logical operator "||".    


*6. What questions do you still have about `if` statements and/or functions?*
  
I am still a little fuzzy on the argument vs parameter distinction. What is the difference between a argument as a variable
and a parameter? To me they seem quite similar.    
