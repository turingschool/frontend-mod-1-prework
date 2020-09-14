## Section 1 Reflection

#### 1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

*What I already do:*
- I value process over product: I really enjoy learning, and pursue curiosities even when they don't clearly contribute to specific professional/creative outcomes.
- I like to read and am fairly skilled at reading comprehension even with difficult texts, but lately I have been bad at systematically making time for it.
- I frequently find formal opportunities to teach what I am learning (over the last 5 years I have always been at least one of the following: teacher, teaching assistant, tutor, coach, group leader). However, I don't always take advantage of more informal opportunities to teach/explain that are born out of collaboration/conversation with peers, mentors, and friends.
- I do believe in my capacity to learn anything with hard work (i.e. growth mindset), and this means that I am not easily daunted by any particular subject matter. However, I may over emphasize my intellectual *traits* rather than my choices when I predict or reflect on successes. I think I am liable to conflate *understanding* and *retention*, feeling that the former gets me the latter for free, when really (at least for me), long-term retention is the only one that requires heavy lifting.
- I'm pretty active (and I'm young!) so I take the health of my brain for granted, but I can definitely improve on the consistency with which I take care of myself.

*What's wrong with or missing from the article*
- I agree that valuing the learning journey for its own sake is important, but shouldn't we also ask, in order to pin down what makes learning effective: *what is learning for*? I'll admit that, for myself, I don't consider Elon Musk or Mark Zuckerburg to be learning role models. I am interested in emmulating learners who have a more profound understanding of why their learning (and its products) matter, who have a deep sense of humility and joy surrounding learning, who are intimately acquainted with what they *don't* know, and who can defend the methodology behind their ideas as well as the ideas themselves. I absolutely agree that learning is great, but I also think that it can get wrapped up in itself, becoming an ego-journey of self-improvement for which efficiency and volume trumps all ... you know, the world of playing audiobooks at triple speed while reading the newspaper and running a zoom call and riding a peloton. I think that whether learning is "super" depends at least in part on what it's for, which determines *what* is worth learning in the first place.
- I think that "read a lot" is a better goal than not reading at all, but it's an incomplete goal -- we also need to be discriminating about what we read and how we read it.

   - There is too much written word in the world for even the most prolific readers to get through a fraction of it. I don't know that there's a formula for choosing the right things to read, but I do think one can get better at it. I think we can (a) be quick to put books down - rather than feel wedded to anything we've read the inside cover of; (b) be willing to skim books for which skimming is sufficient; (c) seek counterpoints rather than validation (reading to validate oneself is, if not epistemically perilous, at least redundant)...I imagine there are many other tips for choosing readings wisely, and most of them will depend on the subject matter. Programming, for instance... where do I start!?

   - There are many different ways to read depending on your goal. You could read a hundred books a year but remember nothing from them. You could read a hundred books and remember thousands of facts but be unable to apply/synthesize. You could read a hundred books and out of them think up 30 amazing product ideas, but remember very few of their details and form no opinions about which of their ideas are credible or true. Anyway, what I really need to learn, on my journey towards superlearning, is *how* best to read, not *how much*.

- I don't think a list of learning tips is complete without something on metacognition. I imagine that "superlearners" are not all people who follow one set of rules for learning. Rather they are people who pay attention to their own minds and embrace learning strategies and regimens that push them but play to their strengths.

*so, Goals*
- Read (well!) at least one book (or equivalent) per week during my Turing program, and at least two books over each inter-module break

    - maintain reading lists in my Turing notebook

    - organize reading lists by category, and let there be variety, because cross-pollination is useful

    - choose one book (or equivalent collection of readings) to focus on starting each Sunday

    - pencil at least one hour of reading into my daily schedule

    - set up a collection of analog reading notes in Turing notebook or other

    - set up monthly review/synthesis pages in reading notes

    - translate reading to actionable project ideas by including an "ideas" section in my notes for every book
- Use Turing as an opportunity to become more consistent in my healthy choices (if I'm not careful, it could easily be a time when I let them slip)

    - pencil at least one hour of exercise into my daily schedule, including quick movement breaks

    - do at least one outdoor, recreational activity every weekend

    - make and shop for a (rough) meal plan every week so that I ensure I'm eating well
- Answer at least one of my peers' questions on slack every week (teaching to learn), and ask at least one question *of* my peers every week (they need teaching opportunities too)
- Measure my practice when it comes to small skills and memorization

    - create tracking pages for keyboard shortcut practice, typing practice, and vocabulary review

    - make a note of it when I avoid any practice opportunity by taking the easy way out (e.g. copy and pasting code)


#### 2. What are the data types you learned about in this section? In your own words, define each.

- **number**: positive, negative, whole or decimal numbers, which are recognized by the computer for their numerical value (not the unicode value of each character)
- **string**: a series of characters between quotes, single '' or double "". They can be manipulated using comparison operators to result in boolean values, but only according to the unicode of each individual character, not according to their semantics in e.g. natural language.
- **boolean**: 'true' or 'false' value. can be assigned to variables, but will also result from statements that the computer recognizes as true or false, like statements using comparison operators between two numbers or two strings.

#### 3. How would you log the string `"Hello World!"` to the console?
```
console.log("Hello World!")
```

#### 4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
```
// I would write a one line comment after two backslashes
/* I would write a multiple line comment sandwiched between backslashes and
asterisks */
/* Comments can be used as notes/reminders for the programmer,
as explanations/labels to make code more readable, or as a temporary
way to de-activate lines of code */
```

#### 5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a storage place for information. Sometimes a chunk of information is very long and complicated, so while we want to use it many times, we don't want to have to remember it/write it all out every time. For instance, maybe a star is 12478457882895828829945992882 lightyears away, and I need that number to figure out the distance of other stars, figure out my space travel ETA, figure out how bright the star will seem to me, etc. But I don't want to re-type that number every time! Instead, I can give it a simple name:`var starDistance = 12478457882895828829945992882`
Then, when I want to use that value again, I just have to remember to type the variable name 'starDistance'.

#### 6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

*Strava* app

```
var activityType = [string]
var activityDistanceInMiles = [number]
var averageHeartBPM = [number]
```

#### 7. In your own words, explain what concatenation is.

Combining multiple variables, using the plus sign ('+'), to form a single string.

#### 8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

*https://Patreon.com*

As the subtitle for each creator page, Patreon concatenates the string `"is creating"` with the name of the page and a string entered by the creator that describes their work:`pageName + " is creating " + descriptionOfWork`

At the bottom of a creator page, Patreon concatenates a prewritten string with the number of locked posts on the page:`"By becoming a patron, you'll instantly unlock access to " + numberOfPatreonExclusivePosts + " exclusive posts."`


#### 9. What questions do you still have about the work we've done so far? (not having a question is not an option)

- **Why** is it that we program the content, the style, and the interactivity of a web page using three different languages and in different files? Is it just convention (i.e. if I really wanted to, could I program all of the textual content for a webpage using JavaScript)? Are there other software development contexts for which a single language is sufficient? How did the three web development languages and the current standard of progressive enhancement come about? Was HTML invented before CSS and CSS before JavaScript?

- Relatedly, **what** sets JavaScript apart from other languages? Why is it the preferred language for coding the behavior of webpages (rather than back-end languages like Ruby or other front-end languages like React)?

- Generally, outside of a programming context, I think of variables as important because they store *dynamic* information/information at multiple intersections with other variables. For instance, in a neurobiological study on circadian rhythms, we might study the sleepTime of cockroaches relative to their lightExposure. In this case, sleepTime has a different value for each cockroach. And lightExposure is different for each cockroach...I guess I'm still figuring out **how/if** variables in JavaScript can be used to store many different/dynamic values, because a long line of re-assignments seems like a pretty inefficient way to tabulate data. Maybe I'm just wrong in thinking of scientific variables as analogous to JavaScript variables?
