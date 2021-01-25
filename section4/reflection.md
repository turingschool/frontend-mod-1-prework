## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
I didn't do the best job following the Pomodoro technique.  I have no excuse but I am still working.. After work, I try to learn as much as I can and typically only have a few hours a day to focus on coding.  I do take breaks though just not regularly.  On my days off, I have much better luck!  I find the 25 mins to be to quick for me; I prefer 45mins - 1hour work time then a short break.  The breaks have helped me stay focused.  Stepping away from the computer for a few minutes just gives my mind a little rest instead of cramming and not necessarily absorbing material as well.  


1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
In terms of setting intentions, I like to work through one thing at a time or one part of a section (in regards to the pre-work).  When I started working, I would just tell myself I want to get through this one section and then go from there.  I didn't give myself a strict time limit of a goal just because I have been trying to do my best at understanding what I'm doing.  But, when I was getting stuck for too long, I did ask for help so I could move on.  If I was able to get through a section and had more time to put into the next assignment, I would start on it.  Sometimes I didn't get through a section as planned and had to leave it for the next day.  
Overall, the act of being purposeful and setting intentions did keep me more focused because I had that goal of finishing in a certain time frame.  What helped also was at the beginning of each section on the pre-work there was an eta for the entire section.  However, I did still get distracted with google and find myself reading about random things.  Being purposeful and this planned in regards to getting assignments completed is something I didn't consciously practice in my undergrad (although, I wish I had) so there is some adjusting.  


1. What is an Object, and how is it different from an Array in Javascript?
An object is a way to store data.  Unlike in an array where you use only index positions to store data, in an object you can use strings.  


1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - Array; because it's going to be a simple list of only names.
  * List of states and their capitals - Object; because there is more than one value which is better stored in an object.
  * List of things to pack for vacation - Array; because it's most likely a general and straight forward list.
  * Names of all the Instagram accounts I follow - Array; because it's just a list for names of accounts only, if it was requiring more information, then an object.
  * List of student names and their cohort - Object; because there are 2 values for each element making it easier to store and use from an object.
  * Ingredients and amount of each ingredient to bake a cake - Object; because it has
  a more intricate set of data.
  * All my favorite restaurants - Array; because each element is a single value.


1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
Vasa fitness - one of my gym apps.  There is a 'badge tracker' section on the home page; that would be an example of an Object in the application.  The keys are probably named something like checkInsPerMonth, weekendWarrior, and weeklyVisits.  And the values could be '5', 'true'/'1', and '2'.
```Javascript
class BadgeTracker {
  constructor(checkInsPerMonth, weekendWarrior, weeklyVisits) {
  this.checkInsPerMonth = checkInsPerMonth;
  this.weekendWarrior = weekendWarrior;
  this.weeklyVisits = weeklyVisits;
  }
}
var update = new BadgeTracker(5, true, 1);
console.log(update);
```


1. What questions do you still have about classes and/or Objects?
-In my tweet.js file, I feel like my code is long to get to the results.  I'm wondering if I overlooked something and there's a more direct way to add comments rather than typing each one out and labelling them differently?
