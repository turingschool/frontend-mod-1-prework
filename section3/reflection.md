## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

I've been readying about the growth mindset a lot over the last couple of years. What stood
out the most in the 2-part blog post was how programming and growth mindset have a symbiotic
relationship. Strengthening your skills in programming will help you develop your growth
mindset, and vice versa. The things you must to do to become better at one or the other are
complimentary. For example, code reviews are common practice and help you grow as a coder.
Receiving feedback openly, and seeing your mistakes as opportunities to learn are a huge
part of the growth mindset overall, therefore coding can help strengthen your growth mindset.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

I've been working on this a lot. I think I currently demonstrate the room to grow, and experience and practice areas of the growth mindset. I've applied this idea of "room to grow" in my career, my marriage, and now here at Turing as I embark on this incredible journey. Just a few years ago, I would have been sitting at a thankless job, miserable, and convinced that I was stuck doing that job - or something else like it - for the rest of my life. I wouldn't be here at Turing without the learning to grow while learning to have a growth mindset.

I'm aware that in the past I have been reluctant to ask for help; whether it be with a problem, money, etc., I did NOT like having to ask. I've also grown in this area, although I try to be conscious enough to notice that it can creep back in as a problem.

3. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

DoorDash menus that display certain items during certain times of the day. Breakfast menus items in the morning hours, lunch and dinner items after noon. The time of day the application is being used by the user will return a different array of menu items.
EX. Diner menu accessed at 09:00 will return the breakfast array.

```js
var breakfast = ["Pancakes", "Waffles", "Chknwaffles", "EggsBenedict"]
```

4. In your own words, explain what an Array method is.

An array is a data structure that holds elements of the same type and can be used to easily sort and search a large number of the elements that it holds.

5. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

A loop allows you to tell a program to repeat a script until a set condition returns false, at which point the script will stop running. This allows you to avoid repeating large amounts of code when a script needs to run more than once. When used with an array, the program will check the condition against each element in the array until the condition returns false. Since an array can hold many elements of the same type, it saves time and laborious coding to set up a loop as opposed to coding the instructions to run a script each time it needs to run.

4. If you had to teach a 5 year old about loops, how would you explain it?

Let's say there's a lollipop factory that makes a HUGE pile of lollipops everyday. Some days the lollipops are made a solid color; other days the lollipops are made with swirls of color. We learn there may be some swirly lollipops being made on the solid color lollipop making day, and we need to find them - and QUICK! We look at the lollipop pile and it's twenty feet tall! How will we ever find a couple of swirly lollipops in this massive pile?!

If we had a loop built into our lollipop making assembly line, as the lollipops move down the line each one would be checked by our lollipop loop machine. The machine would check the lollipop: it a solid color lollipop? If the answer is yes or TRUE, the lollipop continues down the line and the next lollipop is moved to the lollipop loop machine. Each time the result is true that the lollipop is a solid color, the conveyor belt moves forward bringing the next lollipop to the loop machine to be checked. This process will continue until our lollipop loop machine determines FALSE - the lollipop is not a solid color, it's a swirly color! The conveyor belt stops and the lollipop is removed and set aside. At the end of the day there's still a HUGE pile of solid color lollipops - nineteen feet tall to be exact - BUT we also have the one foot pile of swirly lollipops that we were looking for.

5. What questions do you still have about Arrays and loops?

Is there a convention for choosing how to write a conditional: ``(i = 0; i <= 10; i++)`` versus writing ``The (i = 0; i < 11; i++)`` when both produce the same output?
