## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I tend to get unreasonably anxious about asking questions-- I feel a little embarrased, especially whenever I feel like it's a question that I know is simple or that's based on something like "I don't understand this / I think this was communicated in a way I don't get." I usually wait too long, or don't ask the question entirely. Since that has really hurt my learning and understanding ability in the past, I've been challenging myself to reach out and ask questions especially if I'm embarrased by them, and even if I already think I know the answer, asking instead of assuming I do. I feel more comfortable with one-on-one questions still, but I hope to be able to get comfortable asking questions in group settings quickly.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I felt fine about it! It supported my learning by pushing me to do something semi-familiar but not "ingrained in muscle memory" familiar, and the first time I did it I reflexively typed in the wrong directory but was able to figure that out quickly and now know to pay attention to that. It feels a little more nervous on a personal level than following exact directions does, but after completing it I can have confidence that I did it right.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a piece of code that evaluates an expression, then if a condition is met (say, that expression being true), does one task, but if the condition is not met, it does a different task. An example of daily life conditionals can be as simple as deciding whether to eat:
```
if (hungry === true) {
  // eat
} else {
  // do nothing
}
```
An example of a conditional in a web app that I use is probably something like the checkbox function of Google Keep. Checking off a box deletes the line of writing, so the code might look something like:
```
if (checkBoxChecked === true) {
  // delete the item from the checklist
} else {
  // do nothing
}
```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You can add multiple conditions by using `else if` statements chained between the first `if` and the last `else` -- the program will check the expressions in order and stop once it reaches one that is true. It's structured like:
```
if (choiceNumber === 1) {
  // do this thing
} else if (choiceNumber === 2 {
  // do this other thing
} else {
  // do this third thing
}
```
Here, if `choiceNumber = 3`, the computer will check the first statement-- choiceNumber is not 1, so it won't do the first task-- then it'll check the second, for the same result, and then default to the "else" and do the task associated with that condition.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

To check that two conditions are met, you can use the `&&` logical operator to say something like "if this AND this are true, do this task". You can check that either one of two conditions are met by using the `||` operator, for a statement more like "if this OR this is true, do this task". Logical operators evaluate to either true or false, making them perfect for if statements deciding whether or not to run certain code.

1. What questions do you still have about `if` statements and/or functions?

At what point does it become better to use a switch statement rather than chaining `else if`s? I'm not very clear on the distinction between the two, and when which one is better. Also for functions, does it matter where in the file you put the function? If you want to call a function, should you put the function before it, or will the computer basically stop, go, and find it?
