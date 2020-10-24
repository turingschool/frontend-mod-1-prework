## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

- [x] **_Steve Calla: I'm generally fine asking questions. I'm pretty sure I'm not the only one with a dumb question or with a similar thought. My tendency is to want to give it a try prior to asking my question (as stated on the readinds) so as I've been going through Mod0 and Mod1 Prework, I've found that it's super useful to be slightly ahead of the class. In this way, I can more quickly understand the lesson as put forth by the instructor and ask questions based on investing time vs initial exposure to the material. I've also spent a lot of time coding in SQL among other languages so I understand how to dig deep into the black hole of wasted time both with buggy code as well as going off topic. It will be great to have resources in the form of classmates or instructors available to provide guidance when the time is right!! And, finally I think in most instances both the person asking and the person answer get something out of the interaction including a different perspective and/or deeper knowledge of the subject matter at hand._**

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

- [X] Didn't provide instructions for node. **_That was okay. We've done it enough now that it makes sense without additional prompting._**
- [x] Learn about functions with less support. **_All good. I've been pursing additional resources as necessary, and I enjoy the pursuit of learning involving a combination of research and hands on work to learn._**

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

- [x] What is a conditional statement? **_A conditional statement determines what to do based on a set of criteria. If I do X then Y will happen or if I do Z then T will happen._**
- [x] Give one example of a daily life conditional? **_In daily life an example of a conditional statement is as follows. If my friend asks me to go to the movies I can say yes or I can say no. If I say yes, then I will go to the movie with my friend on a specific date and time to be agreed upon. If I say no, I will not go to the movie with my friend. There are other considerations that can involve more qualified decision make such as asking what movie is playing or how much it costs or where the movie is playing that might enter into the consideration set._**
- [x] Give one example where a conditional is probably used in a web application you use? **_The example I like to use is the availability of a hotel bookings. When I go onto expedia.com to book a hotel room I have to input my checkin and checkout date. In this case the web application and supporting backend resources must determine if the room is available on the checkin date, checkout date and the dates between checkin and checkout._**

1. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

- [x] How do you add multiple conditions to an if statement? **_To add multiple conditions to an if statement use an else or an else if hierarchy (additional levels of conditionals). An if statement without an else or else if statement evaluates the initial if conditional as true or false. If the conditional is true, the code will execute the instructions. If the conditional is false, the code will not execute the if statement action. When additional conditionals are necessary then use else or else if. If the conditional evaluates to only true or false, then an else statement will do. If there are 3 or more conditionals (assuming a logical condition isn't necessary; to be discussed later) then an else if structure is necessary. As seen in the example below which includes three levels. Level 1 is the if conditional. Level 2 is the else if conditional and level 3 is the else conditional. If level 1 if is true the code will execute this action (in this case log XXX). If false it will evaluate the else if conditional. If true it will execute the else if action. And finally if both the if and else if are evaluated as false the code will execute the else statement._**

```JavaScript
/*change var statements below to adjust the results*/
var ifStatement = true
var elseIfStatement = true
var elseStatement = true

if (ifStatement) {
  console.log("if statement is true!!")
} else if (elseIfStatement) {
  console.log("if statement is false and else if is true");
} else {
  console.log("if statement is false, else if is false thus else statement is executed");
}
// */
```

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

- [x] What tools are available to check that two conditions are met? **_A developer can determine if two conditions are met by building an appropriate if, else if, else conditional. A more elegant method however is to use logical operators. In this case if we want to test if "2>1 AND 3>2" we can replace "AND" with the symbols "&&". In might look like this... console.log(2>1 && 3>2) which would return true in this case because both 2 is greater than 1 and 3 is greater than 2. If either condition or both conditions are false then the result would return false. Depending on the desired action the true or false indicator could be used to execute or not to execute a block of code._**
```javascript
//using the and logical operator
console.log(2>1 || 3>2) //result true
console.log(2>1 || 3<2) //result true
```

- [x] Or if you want to check that 1 of 2 conditions are met before running a block of code? **_A developer can determine if two conditions are met by building an appropriate if, else if, else conditional. A more elegant method however is to use logical operators. In this case if we want to test if "2>1 OR 3>2" we can replace "OR" with the symbols "||". In might look like this... console.log(2>1 || 3>2) which would return true in this case because both 2 is greater than 1 or 3 is greater than 2. If either condition is true then the result would return true (meaning one condition is true and the other is false). If both conditions are false, it would return false. Depending on the desired action the true or false indicator could be used to execute or not to execute a block of code._**
```javascript
//using the or logical operator
console.log(2>1 || 3>2) //result true
console.log(2>1 || 3<2) //result true
```
1. What questions do you still have about `if` statements and/or functions?

- [x] Ad Hoc Questions? None at this time.
