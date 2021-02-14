## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

I have to admit: I've been practicing the Pomodoro technique for a couple of months now. I feel like it has changed my expectations for what I can accomplish in a day, and has impacted how I "chunk" my work. I adjusted the suggested time. (25 minutes) to 35 minutes, as I found myself continually sneaking in "a few more things" which would turn into more and more work and fewer breaks. I'm both more productive and realistic about my workflow.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I loved this exercise! In my previous Pom experiments, I didn't write down my goals, and if I finished something early, would just let myself take an early break. After doing the Pom reading, I started looking ahead to the material for my next Pom if I finished early. I found myself to be very focused (no phone, even!) and motivated to finish my goals. In most instances, I worked faster than I expected.

3. What is an Object, and how is it different from an Array in Javascript?

An object is a way to store UNorganized data in Javascript. While an array is ordered by index, an object is not. An object can also be manipulated/used differently than an array in that it can store very specific, named data in key-value pairs. This data can thus be more complex, often acting as a database. Also, when accessing these key-value pairs, string and dot notation are used rather than index[number].

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

Array
 This data is simple enough to be stored by index (no context needed for a class roster). I would name this array something like studentNames or studentsInClass.

  * List of states and their capitals

Object
This data has more context. There are two strings (state and capitol) to be recorded, which makes for good key-value pairs as well. I would name this object stateData.

  * List of things to pack for vacation

Array
This data doesn't require more information than the name of the item to be packed. It can fit into an array. I would name it something like thingsToPack or vacationItems. Also: an array is described as a list, as is this prompt!

  * Names of all the Instagram accounts I follow

Array
This data would be best as an array, as the only information to be stored are Instagram handles. I would name this followedAccounts.

  * List of student names and their cohort

Object
This data has more context to be recorded, and would make for an excellent object. It could even be an array of objects, I suppose! I would name this object studentData. If it were an array of objects, I would name it turingStudents. the data is related.

  * Ingredients and amount of each ingredient to bake a cake

Object
As this data is relational, I would store it in an object. It would be easier to manipulate if the measurements were vales to ingredient keys, and less likely to get confusing. I would name this object cakeRecipe

  * All my favorite restaurants

Array
Since this is just the names of restaurants, I would organize them into an array. Nothing more complex is needed. I would name it favRestaurants.


5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

In Google Calendar, I, the user, inputs the data for an event, and I think that data could be stored in an "event" object. This is because there's complex and relational data that ties to specific dates, times, and locations of each event. So an event object could look something like this:

walkWithTaylor {
  date: "January 17",
  time: "10:15 AM MST",
  location: "City Park, Denver",
  participants: ["Ashley", "Taylor"],
  hasAlarm: false
}

6. What questions do you still have about classes and/or Objects?

I'm still unsure as to when a class is better to use than a factory object. Does the computer treat them/organize them differently? I'm also just curious on how to actually build something using all of the things we've learned - like how an independent fuction interacts with an object method. Or how to organize a project! I'm sure I'll learn this later.
