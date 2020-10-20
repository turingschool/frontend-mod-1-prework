## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?


One point from the Growth Mindset article and video that resonated with me was having the belief that that you can
improve your coding skills with effort and practice. There are times when doing these exercises for mod 1 prework,
where I feel like I've already learned so much and can figure out the problems. There are other times where I
feel like an imposter and can't figure out problems right away. I need to develop a better mindset, and understand
that learning a completely new concept, such as coding, takes tons of practice and effort, and that I should
try enjoy the process of figure out concepts and getting stuck. Another point that resonated with me was to track
my own progress and not others. Seeing how far other people already are in the prework on slack, and their general
understanding of concepts can be a bit demoralizing. I need to focus more on my own progress, and celebrate how much
I have learned and how much I am currently learning. I need to stop worrying about others progress and understanding,
because everyone learns at different speeds, and maybe others have a more solid background in coding.


2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?


I feel that I currently demonstrate a Growth Mindset in that I understand that experience and practice
take time. I wasn't born able to write to code, nor do I have any experience with writing code. I understand
that coding is a skill, and requires lots of practice and experience. Also, I feel like I'm not a quitter,
so when I get stuck on something, I do my best to figure it out or ask questions. I understand that if I give
up, I won't learn anything. I need to start developing a Growth Mindset when it comes to seeking out challenges.
Currently, I feel like I complete problems where I understand how to get an answer. Once I finish all the mod 1 prework
I need to go back and try to challenge myself to write better code and seek out more challenging problems. There is
always room to grow and practice, and I shouldn't be satisfied with what I know now.


3. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.


An example of where developers probably use `arrays` is in your saved contacts/address book in Gmail. Developers most
likely use an `array` to store the list of email address that you have saved in your contacts. It's probably more
complicated and detailed than this, but this might be how that array looks:

```JavaScript
var savedContacts = ["ahthomps1@gmail.com", "turing.io@gmail.com", "bobjohnson@yahoo.com", "hi@123.net"];

```

4. In your own words, explain what an Array method is.


An `array method` is an action that can be performed on the array. For example the `.reverse()` `method` will
sort the defined array alphabetically (if `strings`), numerically (if `numbers`), etc..
So if you had:

```JavaScript
var array = ["D", "A", "C", "B", "E"];
console.log(array.sort());

//returns: ['A', 'B', 'C', 'D', 'E']
```


5. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?


The purpose of a loop is to perform an action a specific number of times. For example if we were to use
a `for` loop, the code will check a condition, if it evaluates to `true` then it will run again, this will
repeat until condition evaluates to `false`. We would use a loop with an array when we want to perform some
type of action/condition on the elements inside the array a certain amount of times. Loops work great for
evaluating conditions on the elements in an array, and make things much easier when handling arrays with
a large number of elements. If you had an array with 1000 elements, and you wanted to log each element to
the console, using a loop would execute this very simply. If you didn't use a loop, you would have to log
each individual element to the console and have 1000 lines of code. You wouldn't want to use a loop with
an array if the array length is unknown or the array is constantly changing.


6. If you had to teach a 5 year old about loops, how would you explain it?


A loop is an action performed a certain amount of times. For example, if you had 4 dirty dishes in the sink
and wanted to clean them, the actions would be: use sponge to scrub dirty dish, then rinse off dish and put in
drying rack. You would repeat this process on the next dirty dish, and loop through these actions until all
4 dirty dishes are clean. Once the forth dish is clean then the loop (of actions) stops, because there are
no more dishes left to be cleaned.


7. What questions do you still have about Arrays and loops?


In a loop, I wonder what you do when you don't know where the end of the loop should be? For
example if you had an array that stored a users pulse every minute, that array would be constantly
changing. I'm not sure how you would run a loop on that array because there is no definite end.
