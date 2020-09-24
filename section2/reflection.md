## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

* I think I do a little of both, too soon and too late. I have a fear that I'm going too deep or too shallow when I'm googling stuff, so sometimes I jump to asking my peers before I ask Google. I'm a little intimidated by some of the google results that I get knowing that they may come back a little over my head. Conversely, I also have a fear of pestering my community. I feel very comfortable asking questions, but I don't feel so comfortable googling around. When I ask a peer questions (more so in person than virtually) I feel like I can ask follow up questions or stress that I could really use an ELI5. When you do that with google, sometimes you're really just googling what you need to google, and it can be somewhat exhausting.

* Another thing I need to consider is that, running off one of the blog posts, I think I understand the value of my time, but sometimes forget to consider the value of others' time. This is an especially significant factor in a work environment where there is an actual number value assigned to at least a part of our respective times' values. So, it would probably be best to find a balance and at least give 'googling what I need to google' a shot before I interrupt someone else's workflow. I think the 20-30 minutes rule from the blog posts is a good place to start, and after a little experience, I'm sure I can reevaluate and adjust the rule periodically.  

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

* Learning functions felt a little more like learning by doing. We get a decent amount of that through the homework and pre-work assignments, but learning functions like this felt like a step towards taking off the training wheels. Y'all still provided the resources so we weren't entirely on our own, but we had to take the information that was provided and figure out how to recreate it and then manipulate it.  

* I really appreciated the step-by-step stuff in the previous lessons, but most of it has been taught to us in the class sessions and of course in the previous assignments. So I think that it is reasonable to expect that we either know it, or know how to find those instructions that we have certainly read through before. It took away the option to go through the motions and required us to rely on ourselves to whatever degree was necessary for each individual. Of course, we do always have the safety net provided by our peers and instructors when we just can't seem to get it, so we know that we're never entirely on our own which I find comforting and empowering.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

* A conditional statement is basically a script that gives the computer options in its next step and how to decide which option to go with (conditions). If I have one hour of free time in my day, I might consider what I have scheduled at the end of that hour to decide what I will do with that hour of free time. If I have to go to work in an hour, I might consider a shower and a shave, but if I have a phone call with a friend in an hour, I might decide to get in a quick workout instead.

* When I use Instagram to view a private profile, Instagram might have a conditional that looks something like:
```
if (permissionGranted === true) {
  allow access; ///or whatever the correct command would be///
} else{
  deny access;
}
```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

* `if` statements are initially written the same way for one condition as for many conditions.
```if (condition === met) {
  command(output);
  }
```

* To add more conditions, we would use `else if`.
```if (condition === met) {
  command(output);
} else if(condition === not met) {
  command(differentOuput);
}
```

* If we wanted to command an output for the scenario that none of the conditions set out are fulfilled, then we would use `else`.
```if (condition === met) {
  command(output);
} else if(condition === not met) {
  command(differentOuput);
} else {
  command(thirdOutput);
}
```

* The computer reads `if` statements like a flowchart. It reads each condition and outputs the first statement whose conditions are met, skipping any conditions that follow.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

* I believe this question is asking about logical operators. If I wanted to check that two conditions are met, I would use `&&` between the two conditions. `&&` requires that both of the conditions are met. If I wanted to check that 1 of 2 conditions where met, I would use `||`. `||` requires that *at least* one of the two conditions on either side of the operator is met.

1. In your own words, what is the purpose of a function?

* A function is like a variable in that you are assigning a larger idea to a shorter, more efficient name. But in a variable, you are assigning a value, and in a function, you are assigning a block of code, usually multiple statements. Essentially a function takes a block of code that a programmer would like to use multiple times, and makes it so that they would only have to type the name that they have assigned to that block of code instead of the entire block. An added bonus is that the function is somewhat flexible to the various values that the programmer would like to use each time they would call the function.

1. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.

* A parameter is a value or a pseudo-variable assigned in `()` when the function is first declared. An argument is used when the function was assigned a pseudo-variable and not a specific value, and the function is called on with a value to assign to that pseudo-variable.(I hope that I am correct in assuming that in correct terminology a parameter is not a variable, but I think that it acts similarly to one when arguments assign values to them. That's why I called it a pseudo-variable.)

* In this function, the parameter is `name` and the arguments are `'James'` , `'Earl'`, and `'Jones'`.

```
function greetMe(name) {
  console.log('Hello,' + ' ' + name);
}

greetMe('James');
greetMe('Earl');
greetMe('Jones');
```

* I like to think of this as the function declaring that there is a name and each time I called the function, I *argued* that the name is James, Earl, and Jones, respectively.

1. What questions do you still have about `if` statements and/or functions?

* I'm sure that I could just google this, but when a function has an undefined parameter, how would an argument work with assigning values to an undefined parameter? Would you have to assign a different parameter each time? Is that still considered an argument? 
