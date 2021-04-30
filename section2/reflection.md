## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

In my everyday life, I normally ask a lot of questions and don't worry too much about being seen as dumb. In my professional life, I am usually more reserved in my question asking. I worry more about my coworkers thinking I am dumb and don't deserve my position. So in my professional life, I usually wait too long to ask questions and struggle more which makes me doubt myself more. Since starting mod0 I have been trying to pay more attention to how long I am struggling and I am going to start setting a timer, as one of the articles suggested, so that I don't get trapped too long and waste too much time.

2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I was confused more at first and felt unsure of my work. I was uncomfortable with the fact that I slowed down as I went back and forth rechecking my work and googling more questions. I think it supported my work by giving me practice of reading thoroughly to gain as much information from an article as possible. It also supported my work by giving me practice of the steps needed to teach myself some programming skills which I will have to do plenty of in the future.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is based on a if/then/else concept. It says that *if* a condition is met, *then* your code executes one or more statements, *else* your code does something different. A daily life example would be: **If** I have milk (milk === true) **then** I eat cereal. **If** the condition of milk is not met or false (milk === false) **then** something different like **else** I skip cereal.  An example of where a conditional is probably used in a web application I use would be: when saving your log in information on a web. **If** you click the little box that says *save* after typing in your information **then** the site will save your information to automatically show up when your computer logs onto the page. **If** the condition of *clicking the save box* is not met/false **else** a different code block runs instead. In this case, **else** would tell the page _not to_ save your typed in information to your computer identifying info.    

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You would use a logical operator. Example:

```
var cats = 4;
var dogs = 3;

if (cats === 4) && (dogs === 3) {
  console.log("You have the perfect amount of pets!");
}   else if (cats <= 3) && (dogs !== 3) {
   console.log("You need more pets!");
}   else if (cats >= 5) && (dogs !== 3) {
  console.log("You have too many pets!");
}   else {
  console.log("Your pets got lost!");  
}
```

The program is reading the first `if` statement to determine if it is *true*, do the inputs from the user match the assigned values that it has been given. If the numbers match both then the code runs as written. If the input does not match both values then it takes a different path. It will check "is the input less than or equal to 3?" If yes, then it runs the code block given and continues the script. If no/false then the input is tested again with a new condition "is the input more than or equal to 5?" If yes, condition met, then the 3rd code block is run. If false or no then the program tests again. Because the program has already tested for exact match, less than/equal to and more than/equal to, any thing else (text, special character, etc) that is inputted will execute a code that says "Your pets got lost!"  

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

A flowchart is available to use/draw before even typing one line of code. You could also use logical operators of && (logical and operation) and || (logical or operation).

1. What questions do you still have about `if` statements and/or functions?

I am still confused about how to clearly distinguish between arguments and parameters. Are parameters ONLY in the function declaration?

Do logical operators always have to be done in the set of four?

If I forget to run a file in node, can I fix that after I have completed the sections work?
