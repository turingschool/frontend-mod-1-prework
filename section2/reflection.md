## Section 2 Reflection

#### 1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I think I'm somewhere in between. I tend to be very quick to use google/other digital resources at hand to work through technical difficulties, but I often don't put in the effort to formulate and ask more substantive questions of *human* resources.

I feel pretty uncomfortable asking technical questions of other people, mostly because it feels much faster to look them up. I do recognize, though, that we may get more than we bargain for (in a good way) when we use human beings as a technical resource rather than always turning to google.

#### 1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I enjoyed using outside resources and found the exercise tasks very intuitive. I honestly didn't notice you had removed any supports until I saw this question.

#### 1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional is an if-then statement, which describes the relationship between two claims/actions for which one is sufficient to the other's being true (or being instructed). According to a conditional, the first part, the antecedent, is sufficient for but not necessary to the truth/carrying out of the second part, the consequent. Hence, the consequent is the *consequence* of the antecedent. The consequent is necessary to but not sufficient for the truth/carrying out of the antecedent.

I continually refer to the "truth" OR "carrying out" of each statement, because
conditionals can describe a relationship of truth values (as they do, for instance, in philosophical logic), but in programming, their consequents are often *imperatives* for the computer. They tell the computer to make the world fit the conditional, rather than using the conditional to describe what is already true of the world. So, in programming, a conditional statement serves as a qualified instruction: 'do THIS THING given that THIS OTHER THING is true'

Examples -

daily life:
If it rains today, then I will not go on a run.

Web app - google weather search:
If localWeather is assigned to "sunny", then display sunIcon.

#### 1. How do you add multiple conditions to an `if` statement? In your own words, explain how the program reads them and determines what to do.

*If I want to add multiple conditions for one consequent:* I can connect conditions with the `&&` symbol, which turns each condition into the conjunct of a conjunction. All conjuncts must be evaluated to `true` for the computer to execute the consequent of the conditional.

*If I want to add different conditions, each with a different consequent:* After writing the initial condition and it's consequents as an `if` statement, you can iterate conditions as `else if` statements that take the same form. Once your `if` and `else if` conditions and their negations map out all of logical space you are interested in conditioning upon, you can add an `else` condition, which is satisfied if and only if none of the preceding conditions are satisfied.  

The computer evaluates the truth value of each condition, beginning with the initial `if`. If a condition evaluates to `true`, the computer executes the accompanying consequent, and does not execute any of the following `else if` or `else` conditionals. If a condition evaluates to `false`, the computer moves on to evaluate the next conditional statement, and so on, until it finds a condition that is satisfied. If all of the `if` and `else if` conditions evaluate to `false`, then the consequent of the `else` statement is executed.

#### 1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

You can log the boolean output of the conjunction of two conditions with:
`console.log(condition1 && condition2)`

You can log the boolean output of just one condition with:
`console.log(condition1)`

#### 1. In your own words, what is the purpose of a function?

A function allows you to write a block of code an reuse it over and over again, potentially with new inputs and resulting outputs (like variables let us reuse a piece of information).

#### 1. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.

Parameters represent potential function inputs: they are variables pre-assigned to the data that we will pass into a function each time we run it.Arguments are the specific data we end up passing into the function.

```
function workingHours(hoursPerDay, daysPerWeek) {
  console.log(hoursPerDay * daysPerWeek);
};
//hoursPerDay and daysPerWeek are the parameters

multiplyIt(10, 5);
//10 and 5 are arguments
```

#### 1. What questions do you still have about `if` statements and/or functions?

- I'd like to learn about how you decide whether to define a variable within or outside of the scope of a function: when is it unhelpful to define the variable independently? is the decision often based on convention more than functionality?

- I'd like to learn about functions that act to change the key features of other functions: e.g. function that changes the parameter/scope of another function (or maybe itself? -- what kinds of useful self-referential functions are there?)
