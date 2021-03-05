## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It felt better, I feel like I could work longer than I normally could and I feel much less strained than I did before, when
taking classes.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I realized that writing down what I should be doing and looking at the paper, before I start a work session helped prevent
me from getting distracted. I stayed on task more and it was easier to chunk tasks, because I usually only wrote one thing
down for each Pomodoro time chunk. I think it still took me a little more time to do stuff than I would've liked
but I think I realize that I'm okay with that limitation. I'm being much more friendly to myself and I was able to accomplish
a lot. It helped boost and build some self confidence, that I can accomplish a lot, but at the same time I didn't over burden
myself or get anxious, which was super cool.

1. What is an Object, and how is it different from an Array in Javascript?

An object is an instance of class that represents something in the real world. It has properties and behaviors (functions/methods). It can be used to model real world things. An array more specifically is a list. It can contain many different data types. However, it is like a list of data that is somehow tied together.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    __An Array__ because this is a list of all students, you don't really need to know anything else about them or make them do something.
  * List of states and their capitals
    __An Array__ because although these could be listed in a key value pair inside an object, this data doesn't change nor do you
    need to make it do a behavior.
  * List of things to pack for vacation
  __An Array__ because this is just a list of stuff that you take with you on your vacation.
  * Names of all the Instagram accounts I follow
  __An object__ because each instagram account can followed, unfollowed, has its own followers, can make posts etc.
  * List of student names and their cohort
  __An Array__ because this is a class example of a list of students and the data is not necessarily being manipulated,
  you can just as easily add to an array or manipulate it with array methods, without creating the overhead of an object.
  * Ingredients and amount of each ingredient to bake a cake
  __An array__ because you could just as easily sort everything within an array by looking up the ingredient and the amount required if that was stored as a pair. I was going to say an object at first though.
  * All my favorite restaurants
    __An object__ best represents a restaurant, because each restaurant can have properties like a menu. They can have behaviors
    like open, close, etc. So an object works best.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

A quick example that I can think of is a `shoppingCart object` it could have some of the following properties & methods, as well as example values:

```
* taxPercentage = 8;
* total = 21.99;
* hasFreeShipping = false;
* items ['1 Photo Pack', 'Mascara','Battery Pack']
* clear();
* checkout();
```


1. What questions do you still have about classes and/or Objects?
 I'm curious if you can invoke two methods on the same line.
