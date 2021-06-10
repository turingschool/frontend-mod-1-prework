## Section 4 Reflection

#How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

_Not drastically? I've been working in smaller chunks up until this point as I find it helps me work more quickly - helpful since I can tend to be slow and overthink when a project seems vast and impenetrable. I've been able to dive in and mostly cruise through the pre-work._

_I'd say that setting the timer is a bit of an adjustment. I tend to like to find natural stopping places (section breaks or whatever) so it felt weird to stop for a break in the middle of something. I know it's been said that playing around with time intervals is ok, so I'd be curious to hear if setting kind of approximate intervals based on the project layout is also ok._

_Another thing I'm curious about - I've been using somewhat longer breaks than normal Pom and using them to get thru microtasks I'd need to do in the day anyway, and I'm wondering if that seems better or worse. I do think it kind of evens out since it helps me get over procrastination hurdles and just frees up time later in the day._

#Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

_I did find that writing down the task for the coming interval naturally led to me scanning over the relevant section with more of a mind for what I'd need to get done, what else that would entail, how long it might take, where to best split up the work timewise. I also found that when I wrote down the next task just before taking a break, it helped me set up to dive right into that task after the break._

_As far as actually estimating the time needed, I feel like I don't have much of a sense of that just from looking over the section. I've mostly been trying to start tackling things ASAP. Definitely would like to develop that time estimation skill as we proceed._

#What is an Object, and how is it different from an Array in Javascript?

_An object is a list of properties and their values, stored in pairs within the object. Values stored in arrays are not paired or named with properties. (Maybe you could consider index position to be a property of sorts, but in arrays this is based on numerical order and not, as with an object, on an assigned custom name)._

_At least in what we've done so far, array methods have been predefined in JavaScript, whereas object methods have been functions that the programmer creates with a constructor._

#For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

  _Array - seems like a simple list of names would be perfect unless you were taking attendance or something needing to pair a name with a value_

  * List of states and their capitals

  _Object - state & capital make for logical key-value pairs_

  * List of things to pack for vacation

  _Array - presumably everything packed is going in the same suitcase or vehicle so there's no need to pair every item_

  * Names of all the Instagram accounts I follow

  _Array - probably no need to pair names and handles, plus since followers are a fluid category the built-in array methods are ideal for adding and subtracting accounts_

  * List of student names and their cohort

  _Object - we are pairing a student with their cohort, or considering the cohort number as a property of studenthood at Turing_

  * Ingredients and amount of each ingredient to bake a cake

  _Object - pair the name of each ingredient with the amount of that ingredient called for in the recipe_

  * All my favorite restaurants

  _Array - all restaurants presumably share the common property of being my favorites_


#In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

_Any kind of online shopping websites could make use of objects to store a purchase history._
```
this.orderNumber = ##########;
this.date = month/day/year;
this.items = [x, y, z];
this.orderTotal = $$$;
this.shippingAddress = address,
this.paymentMethod = [method, card/account number];
this.hasShipped = false;
```

#What questions do you still have about classes and/or Objects?
_- Are there many predefined methods for Objects as there are for Arrays?_
_- What kind of scope do Objects tend to have in practice, and how frequently will I use them as a developer on a day-to-day basis? (although I'm sure it depends on the project/industry)_
