## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It might be a question more of getting used to using the Pomodoro technique more than anything else, but I kind of prefer a more flexible / less structured break schedule. I feel a lot more productive when I'm allowed to just really dig in and get into things and focus on them and knock out the work, and I feel more thoroughly distracted / relaxed when I take longer but less frequent breaks.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I had to set my intentions a little vague, just "work on the project for 30 minutes" to feel like I was accomplishing something, because I don't have a great sense of timing when it comes to individual code files. I felt more distracted getting up and breaking so frequently-- I wasn't able to effectively use my break or concentrate while I was working, so I ended up modifying it significantly halfway through to be my usual style of longer chunks of time working + longer breaks, just more intentional than random. That worked a bit better.

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a data type that uses key-value pairs, as opposed to arrays which contain lists of values. It's sort of like an object contains multiple other variables with their own values inside of it, while arrays are one variable with several values. Objects are frequently instances of a class as well-- a unique example of a format / recipe, while arrays cannot be built from a factory / constructor.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class: An array would better store it, as it would just be a list. You're not having to store anything associated with those students, like school year, grades, etc., just the names, so it functions fine as an array of values.
  * List of states and their capitals: Here an array of objects would probably work best-- you can make an array of State objects, and each of those states would have a "capital" property. This works best with objects in use because you not only have to keep track of each item in the list, but an associated property of the item.
  * List of things to pack for vacation: An array would work better, as again, it's just a list of individual items, and you don't need to remember any of the data around those items or their properties -- like how many, what brand they are, anything like that, just the straightforward list.
  * Names of all the Instagram accounts I follow: An array would hold this better, as just like above, it's just a list of individual items, and you don't need to use any of the properties associated with the accounts, just a flat list of names.
  * List of student names and their cohort: This would work best using objects, since like the states example, you're not just listing names, but also a property associated with those names-- in this case, the Student class could have a "name" and "cohort" value.
  * Ingredients and amount of each ingredient to bake a cake: This would work best as an object, as you can have key/value pairs set up that allow you to check specific values needed. For example, the instance of the Cake class that you're working on could have a value pair of sugar: 1 cup, that lets you know the value associated with this specific cake's sugar quantity, as opposed to a different cake that you make later on. 
  * All my favorite restaurants: This depends on what you're using the list for, but as is (just a list of favorites), an array would work better, since it's again a flat list of values, without needing to know anything about things associated with those resturants. If you were using this list as a way to keep track of them, you could use objects to keep track of address, type of food, etc., but as is array is simpler.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values? 

I think most websites probably use objects for functionality, but one example is the Google Keep app. It may have a class like Note, with a structure something like this:
```
class Note {
 constructor(type, title, content, archived, inTrash) {
  this.type = type;
  this.noteTitle = title;
  this.noteContent = content;
  this.isArchived = archived;
  this.inTrash = inTrash;
 }
 
 archiveNote() {
  this.isArchived = true;
 }
 
 deleteNote() {
  this.inTrash = true;
 }
}

var myNote = Note("Blank", "Grocery List", "Eggs Rice Carrots", false, false);
```
This isn't a perfect example-- I imagine it's more complex, and there might even be nested objects (like, rather than "Blank" or "Checkbox" being strings they may be objects that dicate how a note functions, and there's probably more methods, but it's helpful to think about.

1. What questions do you still have about classes and/or Objects?

I'm again a little shakier on classes / objects than some of the stuff earlier on, but feel that I generally have the gist of them. One question is when is creating one-off objects useful? It seems like for the vast majority of cases, it's a better idea to create a class with dynamic values and declare individual instances, rather than just declaring one object without creating a class.
