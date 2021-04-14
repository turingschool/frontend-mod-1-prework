## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

This article resonated with me in a lot of ways. I already look at life as a process and try to label difficult experiences as an opportunity to grow and better myself. I thought the article hit a lot of great points, but one of my favorite was the altogether message of keeping your mind and body right in order to maximize your performance abilities through food. Besides spending time exercising the brain, the body needs to grow as well. It's kind of a symbiotic relationship where one can't fully function without the other, the mind and body. I *try* to eat healthy and get some sort of physical activity in every single day whether its hitting the stationary bike or cruising the skatepark. Just something to get my heart rate up and even clear my mind. I also really thought that creating space to walk away from work and to take breaks is very important. Just like the mind and body, there is a balance needed between work and relaxation/play to get the best results out of yourself.

In the future, I want to become a more avid reader. Currently, I will read a few books per year. It actually is something I really enjoy doing, but somehow don't find myself doing it enough.

If there was something I would add to this, I believe it would be that super learners are persistent. Just like how the article touched on things being a process and having a growth mindset, part of that equation is not giving up and being persistent in your pursuits.

2. What are the data types you learned about in this section? In your own words, define each.

 - **Number**: Any integer including negatives and decimals. In JavaScript a number does not get wrapped with quotes when defined.
 - **String**: A sequence of characters surrounded by quotes (either double or single quotes is fine), usually used to represent text rather than numbers. The set of characters can also contain spaces and numbers, though.
 - **Booleans**: Binary data types that have only **two** possible values of *true* and *false*. These values can also be represented with *yes* or *no* or *1*'s and *0*'s.


3. How would you log the string `"Hello World!"` to the console?

```JavaScript
$ console.log("Hello World!");
```

OR

```JavaScript
var message = "Hello World!";
console.log(message);
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

 - **Characters used:** `//` - For a single-line comment; `/* ... */` - For a multi-line comment.

Comments have multiple purposes. They can be used to prevent certain lines of code from running, to leave messages about what is happening in the code itself for other developers to read, and to keep code neat and organized.



5. In your own words, what is a variable? How would you explain it to a 5 year old?

A *variable* is the name given to a memory location which is used to store values. In `JavaScript` a variable means anything that can vary or change. We can always set a value to a variable and change that value later.

I would describe the term *variable* to a five year old like this:

Let's start by thinking of the word *food*. There are so many different types of food to name, but they can all be classified as just *food*. So, lets say our variable is *food*, and lets give it a value of **cheeseburger**. Now lets say we were super hungry, but we don't want a **cheeseburger**, we want a **hotdog**! Lets change our value of *food* from **cheeseburger** to **hotdog**. Now we still have our variable of *food*, but we've changed it from a **cheeseburger** to a **hotdog**. So, a *variable* is really just a name we give to describe something. Both **cheeseburgers** and **hotdogs** can be thought of as *food*, so the  *value* (or what the food is) can always be changed. Just like how we can decide in real life what type of food we want. Did this make sense or are you just hungry now?

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

**App**: youtube

**Variables Probably Used:**

 - Variable: "searchField" ; This would probably hold a `string` data type.
 - Variable: "numberOfViews" ; This would hold a `number` data type.
 - Variable: "like" or "dislike" ; these could be a `Boolean` data type.

7. In your own words, explain what concatenation is.

Concatenation is combining a string, text, or other data in a series without any gaps. Essentially, it means to "smash" together into one.

An example would be: the concatenation of "kick" and "flip" would be "kickflip". `Notice how there aren't any spaces in between 'kick' and 'flip'`. In order to concatenate and have spaces or gaps between data, a space must be entered into the code.
```JavaScript
var x = "kick";
var y = "flip";
// this exacmple is to concatenate without a spaces
console.log(x + y);
// this example is to concatenate the variables together and add a spaces
console.log(x + " " + y);
```

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

**App**: youtube

**Concatenation Use**:

- When a user makes a search but spells a word wrong and the app displays "did you mean" + "*the corrected spelling of the word*".
  - **Side Note**: This corrected spelling must come from somewhere else that I have not yet begun to try and learn yet, but it actually seems like a really interesting topic to explore!

**EXAMPLE:**

You go to youtube and want to watch *skateboarding*, but accidentally misspelled it and typed *skatboarding* in the search bar. Youtube will bring up a text under the search area that says `Did you mean: skateboard`.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

- How does all of this stuff we just learned (variables, interpolation, data types, and concatenation) get brought together and build the code for a site, app, or program? I am very excited to learn about how all of these pieces fit together!
