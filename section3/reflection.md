## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

- The idea of setting S.M.A.R.T. goals was new to me but also resonated, generally - I'm a habitual list maker, and using this approach will definitely help me keep my goals structured and manageable.

- I felt the same way about the other acronym - the Zone of Proximal Development (ZPD).  I've never heard it referenced or defined directly, but it's a concept I think we're all aware of at least on a subconscious level, and is definitely worth pulling to the forefront.  It's important to challenge oneself - working slightly outside the comfort zone - but not to reach so many rungs above that the material is completely incomprehensible and the effort is bound to be discouragingly fruitless.

1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

- Lately I think I've been best about *seeking out challenges* - I completed Sections 1 and 2 of the Mod 1 pre-work before Mod 0 began, and I've started reading the Duckett "JavaScript & jQuery" book from the beginning, which I plan to finish by the end of the month.  I'm hoping to continue this habit of taking on extra material into Mod 1 and beyond, time permitting of course.

- I can be very scatterbrained (ADHD student here...), so the main area I need to improve upon is *focusing on the process*.  Instead of just haphazardly throwing darts at the wall until something sticks, it's important for me to be mindful of exactly what approaches I'm taking and systematically work through problems, heeding a specific methodology and tracking what works and what doesn't.  Similarly, it's easy for me to view hours and hours of troubleshooting a problem as "wasted time," and it will be important for me to remember that oftentimes the process of debugging (and not giving up) is itself the process of learning.

1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

- The **Letterboxd** web/mobile app - which is a sort of social media / film database hybrid - likely creates an array every time a user creates a list of movies.  For example, if I were to start a new list entitled "Favorite Movies 2020," the site would declare an empty array based on this title, probably inside an object containing my specific username/data.  Then, each time I add/remove a film to/from this list, I'm actually adding/removing an **element** (and its corresponding **index number**) to/from the array, therefore redefining the `length` property.    

e.g.
```
//create the array
var favoriteMovies2020 = new Array('Mank',
                                   'Host',
                                   'Tenet');
//change an item in the list
favoriteMovies2020[2] = 'Soul';
```

1. In your own words, explain what an Array method is.

- An array method is an action that can be performed on an array object; it is used to modify the contents of an array.

1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

- The purpose of a loop is to repeatedly follow a sequence of instructions and execute an action(s) if a specific condition(s) is met.  

- We would use a loop in conjunction with an array when we want to cycle through the contents of a given array and either use or modify the array elements.  A loop is always going to use/modify some sort of variable or variables, so if we aren't looking to use/modify an array's data we'll be using another variable, whether it be an integer, number, string, Boolean, etc.  This need not be a previously declared variable though; in some cases the variable will be something new, like a placeholder *n* or index/counter *i*, to be used proprietarily within the loop in order to set a condition and/or execute a specific action.

1. If you had to teach a 5 year old about loops, how would you explain it?

- Here's a super topical analogy that all my fellow youths should be able to understand/relate to...

Let's say you login to **Fortnite**, and you want to play online.  So you go into the multiplayer lobby, hit "Join Game", and at first you're the only one on the player list, so it tells you to wait while it finds more players.  So it tries again, and finds some more players - now it's you and three other people.  Good start, but the system won't start your game unless there are at least 50 players connected. So this happens over and over - with a few more players added each time - until it finally  hits that magical 50-player minimum.  Game time!  Well, guess what?  All that happened because your copy of Fortnite was coded to use a **loop** when you join multiplayer.  By trying over and over until it found 50 players, it was looping through a set of instructions and waiting to start the game until the right conditions were met.  Thanks to that cool loop you're allowed to go into battle and do a cool dance or something!  

1. What questions do you still have about Arrays and loops?

I guess I'm just wondering about a few terms that we haven't yet touched on but that I've seen referenced in a few places, i.e. `let`, and a couple other keywords I forget the names of, but that also seem to be used in place of a `var` declaration.  I'm sure we'll get there, but that caught my eye!
