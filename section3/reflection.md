## Section 3 Reflection

#### 1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

- set explicit, SMART goals (e.g. maybe some meta goals related to developing a growth mindset? I may think I am already disposed to seek out challenges, but lets see how much better I enact this supposed disposition when I *commit* to specific, measurable guidelines regarding the coding challenges I will expose myself to)
- learning to program is a major opportunity to develop and practice a growth mindset


#### 1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

I already demonstrate a growth mindset in my optimism about learning and in my welcoming of struggle. I tend to assume that the answer to "could I be good at that?" is a "yes!" (no matter the nature of the *that*). I also tend to deliberately pursue activities that are difficult because I associate that difficulty, to an extent, with their value, and when I come face to face with challenging content, I assume I can handle it, and I quickly seek resources to get me through.

All that said, I don't always follow through on the potential created by my optimism. Even though I understand that pretty much anything is possible given the right amount of the right kind of hard work, I often neglect that kind of work (routine practice, dedicated studying, etc). I have not built up a lot of discipline or skill when it comes to this kind of 'grind,' because I have spent time pursuing things things that were possible *without* much work. Or, more accurately, though many of my accomplishments in life have required hard work, it was always work that came "naturally", work that I did well with less effort than those around me. Especially when it comes to learning, I have always gotten by, and even done exceptionally, without struggle. I have often been at the top of my class, the student who writes the best essay without ever revising it, who aces the test without studying, who understands the material without thinking very hard, etc. I know that much of my (easily won) successes here *are* the result of growth, provided to me at a young age by engaging parents with high expectations who surrounded me with books.  Nevertheless, the validation I have consistently received for what *seem* like fixed traits (e.g. "intelligence", writing ability, creativity) has instilled in me a little piece of a fixed mindset, has made me most proud of things that don't feel like my own choices.

Still, I have overcome this side of myself a bit by setting expectations based on standards far higher than those common in my immediate circles. Since I was a teenager (or younger), I have always operated on the assumption that the things I am praised for are, if not undeserving, at least underwhelming compared to what is possible. An 'A' on a paper was, for me, pretty meaningless, especially if I didn't believe in the paper's ideas; a prize was just a prize, unless it meant I'd won my *own* game against myself. I've tried to evaluate my work relative to professors rather peers, relative to mentors or those at the top of a field I am entering into; this is not in order to pressure myself with maniacally high standards, but to make sure I am judging myself with integrity, against my own dreams and expectations rather than my peers'.

Still, sometimes my lack of discipline/skill at the nitty gritty stuff (the study, memorize, put in the time stuff) collides with my high expectations to disastrous results, leading me to overpromise and underdeliver and disappoint myself and others. Knowing the truth and the usefulness of the beliefs that make up a growth mindset is one thing -- acting effectively on those beliefs is another.

#### 1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

*Chipotle App:*
```
var burritoOrder = ["double chicken","fajitas","pinto beans","lettuce","pico de gallo", "corn", "cheese"];
```
This information is likely stored as an array (rather than as a single string) because the customer is asked to select and customize each item of their burrito independently, and an array provides flexibility to add/delete/modify individual ingredients.
I imagine that the array would be defined using other variables, e.g.:
```
var beanSelection = "pinto beans";
//var beanSelection = "black beans"
//var beanSelection = "double black beans"
//var beanSelection = "double pinto beans"
//var beanSelection = "no beans"

burritoOrder[3] = beanSelection
```
Once defined, the array is printed as a single string on the "cart" page of the app under the name of the person who the burrito order corresponds to (name provided as input by customer).


#### 1. In your own words, explain what an Array method is.

An array method is an instruction that has the computer alter the contents of an array variable and/or use that contents to run certain text, to manipulate a different variable, etc.

#### 1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

We use loops to repeat a method many times, without having to call it up every time.
When used with an array, a loop can repeat a method for every item of an array (or a subset of the items in the array), and can have alternate outputs depending on the item of the array corresponding to a given iteration.

#### 1. If you had to teach a 5 year old about loops, how would you explain it?

A loop is an action that repeats over and over again, as many times as you tell it to. But it doesn't have to be the same every time: you can tell a loop to change little things about itself every time it repeats. Maybe it's a song that you sing for every person in the class, but you use the name of the person you're singing to. Or it's a birthday card you make the same way every time, except you change the name and age in the birthday message:

"Happy *9th* Birthday, *Michelle*!"
"Happy *81st* Birthday, *Grandmother*!"
"Happy *1st* Birthday, *Charlie*!"
"Happy *5th* Birthday, *Me*!"

Now you fill in the spaces:
"Happy [  ] Birthday, [          ]!"

#### 1. What questions do you still have about Arrays and loops?

- are there any loop initiators besides `i++`?
- when (in actual development contexts) would I use a loop that iterates according to the length of one array but using the content of a different array? For example:

```
var lastTenUSPresidents = ["Johnson","Nixon","Ford","Carter","Reagan","Bush","Clinton","W Bush","Obama","Trump"]
var yearsPresidentChanged = [1963, 1969, 1974, 1977, 1981, 1989, 1993, 2001, 2009, 2017];
for (var i = 0; i < lastTenUSPresidents.length; i++) {
  if (yearsPresidentChanged[i+1] - yearsPresidentChanged[i] < 4 && lastTenUSPresidents[i] != "Trump") {
    console.log(lastTenUSPresidents[i] + " served one partial term from " + yearsPresidentChanged[i] + " to " + yearsPresidentChanged[i+1]);
  } else if (lastTenUSPresidents[i] === "Trump"){
      console.log(lastTenUSPresidents[i] + " is currently serving his first term, which began in " +  yearsPresidentChanged[i]);
  } else if (yearsPresidentChanged[i+1] - yearsPresidentChanged[i] === 4){
    console.log(lastTenUSPresidents[i] + " served one full term from " + yearsPresidentChanged[i] + " to " + yearsPresidentChanged[i+1]);
  } else if (yearsPresidentChanged[i+1] - yearsPresidentChanged[i] > 4 && yearsPresidentChanged[i+1] - yearsPresidentChanged[i] < 8){
    console.log(lastTenUSPresidents[i] + " served one full term and one partial term from " + yearsPresidentChanged[i] + " to " + yearsPresidentChanged[i+1]);
  } else if (yearsPresidentChanged[i+1] - yearsPresidentChanged[i] === 8){
    console.log(lastTenUSPresidents[i] + " served two full terms from " + yearsPresidentChanged[i] + " to " + yearsPresidentChanged[i+1]);
  }
}
```
