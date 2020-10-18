## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I definitely wait too long to ask questions. I usually prefer to work independently and solve problems on my own, because I enjoy problem solving and the satisfaction of resolving something without needing help. I think my hesitation to ask questions has made me better at find resources on the internet as well. But this isn't always the most pragmatic or efficient approach. As Kathryn's article says, Google provides us with "broad, sweeping results for specific, subtle questions." Asking questions to real people allows us to provide much more context around whatever issue we're facing. And this allows us to solve problems much faster. Solving a problem quickly is more important than avoiding a dumb question due to embarrassment or personal pride.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I think the exercises in this section definitely forced me to figure things out on my own a lot more. By reviewing the provided examples, I'm usually able to figure out how to do the proceeding exercises but there were fewer examples in this section. I like to try and figure things out myself first just to gauge my mastery of the material and see if I can infer how code will or should behave. After that, I usually just need to look up some syntax. But I do feel like I'm gradually getting a feel for the language and how to solve new challenges based on what I've learned so far.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a block of code that provides for multiple possible outputs depending on a set of values and/or variables. One output is dependent on a specific set of conditions or parameters being met. Another output is dependent on a different set of conditions of parameters. In prose, conditional statements amount to if x, then y or else z.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

You need to use logical operators such as && and || to add multiple conditions to an if statement in Javascript. The pizza-making exercise in this section was a good example of this. In order to make a pizza, two things must be true: you must have sauce, and you must have at least two cups of flour.

````
if (cupsOfFlour < 2 || hasSauce == false) {
  console.log("I cannot make a pizza");
} else {
  console.log("I can make a pizza");
}
````
The computer interprets the above code as follows:
If cupsOfFlour is less than two OR if hasSauce is false, then the console is instructed to print the string "I cannot make a pizza." In other words, if you have less than two cups of flour OR if you don't have sauce then you cannot make a pizza. In any other scenario the console is instructed to print the string "I can make a pizza"

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

You can run simple conditional statements using comparison operators to see if certain conditions are met. For example, if I want to see if the number of teachers is greater that 5, I run the following code:

```
var numberTeachers = 6
console.log(numberTeachers > 5)
// expected output will be true, telling me that this condition has been met.
```
We can also use logical operators to see if two conditions have been met. For example, to see if the number of teachers is greater than 5 AND the number of students is greater than 20:

```
var numberTeachers = 6
var numberStudents = 19
console.log(numberTeachers > 5 && numberStudents > 20)
// expected output will be false, telling me that one of those conditions has not been met.
```

1. What questions do you still have about `if` statements and/or functions?

Is there a way to enter values for variables on the command line interface rather than in the javascript? How do we get users to supply the value of variables so the program can then perform the required task based on that input? How can we gameify the bear scenario in the decision-making.js exercise?
