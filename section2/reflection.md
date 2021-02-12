## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

   * I think I tend to ask questions too late. I have definitely spent hours trying to figure something out that I could've understood more quickly had I asked sooner.


1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

   * I suppose I felt a little bit uncomfortable at first searching for things on my own, but over time especially by compiling my understanding from multiple resources, I felt like I had a greater understanding of the material than I would have if I had been told exactly how to do something.


1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

   * A conditional statement is a line of code which allows a computer to make a choice on which code to execute based on if a condition evaluates to true or false.

   * _Daily Life Example:_ Deciding whether or not to take a break in the evening is dependent upon whether or not I feel like I had a productive day. If I had a productive day then I take a break. If not, then I don't.

   * _Web App Example:_ YouTube autoplay is an example of a conditional. If the user clicks a button stop autoplay then autoplay will not run. If the user does nothing, then autoplay will continue.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

   * In order for multiple scenarios to play out in a line of code, JavaScript uses the `if` `else if` and `else` keywords.

      1. JavaScript will read the `if` statement. If it evaluates to `true`, then it will execute the code block associated with the `if` statement.

      1. If the statement evaluates to `false`, then it will skip the code block and move on to the `else if` statement (if there is one).

      1. If the `else if` statement evaluates to `true`, then the code block associated with it will run.

      1. If it is `false`, then JavaScript will move on to either the next `else if` statement if there is one, or the `else` statement.

      1. If none of the other conditions are true, then the `else` statement will run and the code block associated with it will too.


1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

   * In order to see if two conditions are met, it is necessary to combine conditions together using Boolean Logic Operators including `&&` or `||`

   * `&&` is asking "Is 'this' **and** 'this' true?" This operator will evaluate the whole condition to `true` if both conditions on either side are `true`. If one of the statements is false, then it will evaluate to `false`. If both are `false` then the whole statement is `false`

   * `||` is asking "Is 'this' **or** 'this' true?" This operator will evaluate the whole condition to `true` if either or both conditions are `true`. If both are `false` then the whole statement is `false`

1. What questions do you still have about `if` statements and/or functions?

   * My remaining question is whether or not you can chain together multiple if statements together instead of using logical operators. I know that you can do nested else if statements but I am wondering if you can see if 2 conditions are met using multiple if statements before moving on to a block of a code:
   ```
   if (condition1 = true);
      if (condition2 = true);
        code block
        else
          code block
      else
        code block
```       
