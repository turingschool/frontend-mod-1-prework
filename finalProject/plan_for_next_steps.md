### I'm going to work on
1. applying JavaScript to a project I've had in mind for a while called the *Ideological Woodchipper*

    - I've set up a remote repo for this project, so it will also be a great way to practice the git workflow: https://github.com/kellydinneen/ideological_woodchipper

2. method practice

    - learn a string method every Monday
  
    - learn a number method every Wednesday
  
    - learn a boolean method every Friday
  
    - learn an array method every Saturday
  
    - write a function that applies all four new methods every Sunday

3. building a reading list to supplement Turing.

    - I will build this as well as structure my reading notes through GitHub, so I'll be using this as an opportunity to play with GitHub features: https://github.com/kellydinneen/readings-turing-2010
  
    - On the list already: *Design Patterns: Elements of Reusable Object-Oriented Software*, *The Design of Everyday Things*, *How the Mind Works*,

4. typing and keyboard shortcuts

    - 15 min / day

5. compiling project ideas

    - 2 ideas/day

### (Minimum) Work Schedule:
```
var workDays = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"];
var datesUntilStart = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4]
var daysLeftInSeptember = datesUntilStart.length - 4
var weekdayHours = [9, 11];
var weekendHours = [10, 13];

console.log("I have " + datesUntilStart.length + " days until Mod 1 starts. Until then, this is my practice schedule:");
console.log("  ");

for (var i = 0; i < datesUntilStart.length; i++) {
  if ((i === 0 || (i % 7 === 0)) && i <= daysLeftInSeptember) {
    if (i === 0) {
      console.log(" ------------------- WEEK 1 ------------------- ");
    } else if (i === 7) {
      console.log(" ------------------- WEEK 2 ------------------- ");
    } else if (i === 14) {
      console.log(" ------------------- WEEK 3 ------------------- ");
    }
    console.log(workDays[0] + ", September " + datesUntilStart[i] + ": work " + (weekdayHours[1] - weekdayHours[0]) + " hours from " + weekdayHours[0] + " to " + weekdayHours[1]);
  } else if ((i === 2 || (i - 2) % 7 === 0) && i <= daysLeftInSeptember) {
    console.log(workDays[1] + ", September " + datesUntilStart[i] + ": work " + (weekdayHours[1] - weekdayHours[0]) + " hours from " + weekdayHours[0] + " to " + weekdayHours[1]);
  } else if ((i - 2) % 7 === 0 && i > daysLeftInSeptember) {
      console.log(workDays[1] + ", October " + datesUntilStart[i] + ": work " + (weekdayHours[1] - weekdayHours[0]) + " hours from " + weekdayHours[0] + " to " + weekdayHours[1]);
  } else if ((i === 4 || (i - 4) % 7 === 0) && i <= daysLeftInSeptember) {
      console.log(workDays[2] + ", September " + datesUntilStart[i] + ": work " + (weekdayHours[1] - weekdayHours[0]) + " hours from " + weekdayHours[0] + " to " + weekdayHours[1]);
  } else if ((i - 4) % 7 === 0 && i > daysLeftInSeptember) {
      console.log(workDays[2] + ", October " + datesUntilStart[i] + ": work " + (weekdayHours[1] - weekdayHours[0]) + " hours from " + weekdayHours[0] + " to " + weekdayHours[1]);
  } else if ((i === 5 || (i - 5) % 7 === 0) && i <= daysLeftInSeptember) {
      console.log(workDays[3] + ", September " + datesUntilStart[i] + ": work " + (weekendHours[1] - weekendHours[0]) + " hours from " + weekendHours[0] + " to " + (weekendHours[1] - 12));
  } else if ((i - 5) % 7 === 0 && i > daysLeftInSeptember) {
      console.log(workDays[3] + ", October " + datesUntilStart[i] + ": work " + (weekendHours[1] - weekendHours[0]) + " hours from " + weekendHours[0] + " to " + (weekendHours[1] - 12));
  } else if ((i === 6 || (i - 6) % 7 === 0) && i <= daysLeftInSeptember) {
      console.log(workDays[4] + ", September " + datesUntilStart[i] + ": work " + (weekendHours[1] - weekendHours[0]) + " hours from " + weekendHours[0] + " to " + (weekendHours[1] - 12));
  } else if ((i - 6) % 7 === 0 && i > daysLeftInSeptember) {
      console.log(workDays[4] + ", October " + datesUntilStart[i] + ": work " + (weekendHours[1] - weekendHours[0]) + " hours from " + weekendHours[0] + " to " + (weekendHours[1] - 12));
  } else {
      console.log(" * day off *");
    }
  }
```

### Work station:

 - sitting at coffee shop table during store's closed hours (wednesday)
 - sitting at upstairs desk all other hours (monday, friday, saturday, sunday)

### I will document this plan and my progress:

 - initial plan is documented *here*, in this markdown
 - daily schedule is documented on Sunsama (a calendar/time management web app)
 - progress on all items will be documented in github as a project in my Mod 0 repo: https://github.com/kellydinneen/mod-0/projects/2

### Do any stakeholders in your life know about this plan? (The answer needs to be yes by the time you answer this...)

 - yes: my partner

### What personal items/events are important to you during this time? How are you going to make sure those are not neglected? (Hint, block time on the calendar for them!)

 - exercise: I will be practicing the same exercise schedule that I plan to follow during Turing
 - my newsletter: I will block out 30 hours/week to work on this and set it up ahead of time for October and November
 - Ulysses and William James bookclubs: will block out time to do readings
 - Philosophy: will create manageable reading regimen - 30 min/day
 - running coffee shop: will designate 45 min, 3 days/week when I can design food items for shop
