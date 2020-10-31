## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It felt a little different. It was a bit more organized and purposeful.


1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I've used the pomodoro technique before (although not consistently) so I expected it to go well, but I was still surprised by exactly how much it helped me focus and maintain a sense of where I was in relation to my larger goals. My time estimates were sometimes very very good and sometimes way off!


1. What is an Object, and how is it different from an Array in Javascript?

Objects and arrays are totally different things, but both can store data. An object is an instance of a class. In other words, it's a specific example of a type of thing. It stores attributes as key/value pairs and also includes methods that act on those attributes. Its attributes/properties don't have an inherent order. An array is an ordered list of items, where each "item" can have any data type, and the items appear and are referred to in a certain order. An object can include one or more arrays as one of its properties.


1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    **Array**, because this is just a list

  * List of states and their capitals
    Seems like the best data type here would be like an array but with key/value pairs as each item in the list. I bet that data type exists but I'm not sure what it's called. But for now, I'll go with **object**, because this is more than just a list: each state is paired with a capital in a key/value pair.

  * List of things to pack for vacation
    **Array** because this is just a list

  * Names of all the Instagram accounts I follow
    **Array** because this is just a list

  * List of student names and their cohort
    **Object** for the same reason given in the states/capitals example: each item is a key/value pair

  * Ingredients and amount of each ingredient to bake a cake
    **Object** for the same reason as above: each item is a key/value pair

  * All my favorite restaurants
    **Array** because this is just a list


1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

In Google Maps, there may be a `map item object` that holds information about different destinations on the map. Possible keys and their values: `location: 41.35N 53.98W`, `streetAddress: "123 Main St"`, `phoneNumber: 555-555-5555`.


1. What questions do you still have about classes and/or Objects?

In the exercise `objects.js`, I at first misunderstood the directions to `// Change the value for at least one of your animal keys`. I thought it was asking me to change the *name of the key* in one of my key/value pairs, and I googled a lot to figure out how to do that. I gave up after 5 minutes when I realized that I was actually being asked to change the *value associated with* one of my animal keys, which is pretty straightforward. So my question now is, is there an easy way to change a *key name* in an object literal?

Is there a way to create an object literal and have a key with no assigned value (the value would be undefined)
? Not able to figure that out with a quick google.
