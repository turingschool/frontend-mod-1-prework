## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

*I probably err on the side of waiting too long, especially if the working environment places a lot of emphasis on self-sufficiency. I'm really glad to have read these posts because my lesson 1 impression was heavy on the self-sufficiency and left me pretty unclear about who it was okay to ask questions of and when. I feel much more clear now, and I am trying to recalibrate.*

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

*I felt fine having to go back and look for things I couldn't remember (like how to run a file in node). When that happens, it's a reminder to me that I probably want to put it in my notes. As for learning about functions from other sources, I also felt okay--it's helpful to see a variety of resources. The uncomfortable thing is feeling isolated in the learning process because there isn't much discussion yet. I expect that is a limited time problem that will resolve as students get to know each other better and get more comfortable using Slack.*

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

*A conditional statement is a statement that is conditioned on something being true or false. Everyday examples are things like "If you're thirsty, drink water" or "If the dishwasher is finished running, empty it." An example in web applications is a password check. If a password matches the account login, then it opens. If not it throws and error message.*

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

*So, an if statement alone just says if a defined thing is true, take a specific action. However, if there are a series of conditions that need to be considered you can use an if else if structure which looks like...*

```javascript
if (dishesDone === true) {
  console.log('put dishes away');
} else if (dishesLoaded === true) {
  console.log('start the load');
} else {
  console.log('please do the dishes');
}
```
*The program reads this is order. It checks the first condition--if the dishes are done. If so, it executes the code inside the related curly braces then it continues (doesn't look at any of the other conditions). However, if the first condition isn't met, it checks the second. If the second condition is met--if the dishes are loaded in the dishwasher--it executes the code in related curly braces then continues. However, if none of the conditions are met, it executes the code in the last set of curly braces (following "else").*

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

*You can use a logical operator--&&--to determine if two conditions are met. That operator tells the computer that if condition 1* and *condition 2 are met, then run the associated block of code. If you want the program to check that at least one of two conditions is met, you can use || which is the logaical operator for* or.

1. What questions do you still have about `if` statements and/or functions?

*In the if-statements.js exercise, why would it be 'ideal' to use a logical operator on the quarters problem (do I have enough quarters for gumball)?*
