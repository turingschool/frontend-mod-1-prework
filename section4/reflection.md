## Section 4 Reflection

**1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?**
I tried following the regularly suggested Pomodoro times and did not like it. My workflow felt interrupted at the 25 minute mark. I think I prefer to work in 45-60 minute chunks and/or reach a natural stopping point before taking a break. Although 25 minutes might not be right for me, I do like the routine of taking short breaks, relatively frequently. Especially working remote, this allows me a chance to wash some dishes, fold some laundry, or just play with my dog for a little bit!

**1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?**
I liked setting an intention for the time, though in this case the intention was pretty clear ("When back from break, go to the next section and continue working"). Setting that clear-cut intention made it easier to avoid distractions. In my personal life, I do a pretty good job of establishing small goals/priorities for the day, so this felt similar. In the case of a larger Turing project in future, I am a bit nervous about establishing an intention for more amorphous tasks, but hopefully I'll be able to latch onto at least one small thing to start with!

**1. What is an Object, and how is it different from an Array in Javascript?**
An Object is a way of storing complex data, similar to an Array. The main difference is that you can only access the data in an Array by position [0,1,2, etc] whereas with an object, you can use strings to access the data- like a database.

**1. For each set of data, would an array or object be better to store it? Explain your choice.**

  * List of all of the students in class: An Array would be best for this since all of the data is the same type, strings of names
  * List of states and their capitols: An Object would be best for this since there are two separate "things" we want to access: the state, and the capitol city.
  * List of things to pack for vacation: An Array would be best for this because the list has to do with one discrete task- a vacation. There is very clear "theme" to the data.
  * Names of all the Instagram accounts I follow: An Array would be best for this because it is one type of simple, string, data.
  * List of student names and their cohort: An Object would be best for this because we want to link two different types of data together for each student.
  * Ingredients and amount of each ingredient to bake a cake: An Object would be best for this because we are storing a LOT of different data in the recipe and might want to change parts of it.
  * All my favorite restaurants: An Array would be best for this because it is a list.

**1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?**
An application I use frequently is Mountain Project (a database of outdoor climbing areas worldwide). There are many nested layers of classes, instances and objects within the app. I can look up information about Colorado/Clear Creek Canyon (area)/The Graveyard (sub-area)/Dia de los Muertos (route) and for each route see the following information:
```js
//Every route has a name, a type, a difficulty, a star rating, a description, photos, and comments
Class ClimbingRoute {
  constructor(name, type, difficulty, stars, description, comments){
    this.name = name;
    this.type = type;
    this.difficulty = difficulty;
    this.stars = stars;
    this.description = description;
    this.comments = comments;
  }
};

var diaDeLosMuertos = new ClimbingRoute ("Dia De Los Muertos", "Sport", "5.12a", 4, "Short slab, pull a roof, three-move crimp crux", "THIS WOULD BE 5.4 AT THE GUNKS")

console.log(diaDeLosMuertos)
```

**1. What questions do you still have about classes and/or Objects?**
WHAT IS `this`? 😳 I watched a couple videos (that claimed to be the "simplest description ever") and still have no idea. 
