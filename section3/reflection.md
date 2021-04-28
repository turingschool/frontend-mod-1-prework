## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?
- The basic difference between Fixed Mindset and Growth Mindset:
    - Fixed - the belief that your strengths today will be your strengths in the future and even more so that your weaknesses today will be your weaknesses in the future. That your weaknesses are innate whether because of your genetics, how you were raised, or whether you are an INTJ or a ESFP those strengths and weaknesses are fixed and it is your job to find a job in which you can use those strengths and won't be dragged down by your weaknesses.
    - Growth - what am today is not what I will be tomorrow. Even further what I am THIS MORNING is not what I will be THIS EVENING. I have the power to grow and improve and though my family was my family, my academic history is my academic history, they do not stop me from growing and doing whatever I feel will bring myself, my family, and my community a more joyful, empowered life with less pain and more fulfillment.
  -You can always learn anything. This is simple sentence, but a powerful concept.
  -You should never compare yourself to anyone else: everyone has their own speed; don't compare yourself to the speed of others
  -Track your progress to see how much you have grown. Set goals but remember that progress is progress and your rate of progress is not as important as the fact that there is progress.


1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
I'd heard the phrase Growth Mindset before, and likely its rough definition at the same time, but couldn't accurately explain in my own words the concept. I'm embarrassed to say that I viewed the phrase as a bit of a cliche like something you'd read in a self help book, but would be too broad or lofty to have a practical application. I was wrong. In these last two weeks a fixed mindset has continually slipped in. I would say that because of my passion for cycling and coaching cycling I know deeply how people can grow with consistency, determination, and good guidance. One of the reasons I love cycling so much is because it is so easy to track progress. In 2015 I took a threshold cycling test and my threshold was measured 180 Watts and then two months later after training with a coach was 205 Watts. Now for the last two years, despite a busy work schedule, it has stayed in the 300 Watts to 320 Watts range. This growth of 50% in few 3 years (much of it happening over a single season) was mind blowing to me. It did a really good job of destroying a fixed mindset. I believe strongly that the people I coach in cycling can improve as well. I know that year os experience, age, and genetics will always play a role, but I firmly believe with consistency, a strong "why"/motivation, and good coaching growth is not just impossible but inevitable.

I still need to fully and deeply understand the same growth mindset concept for learning to be a software developer. Just like in cycling (likely to a lesser degree though) genetics, how you were raised, and academic history can all play into how quickly learning can happen in learning to code.  But just like how I would never believe an overweight, person in there 60s, with little athletic background cannot improve at cycling and see great progress, I would never believe that a person without a technical background or parents in technical backgrounds could not learn to code. Yet, even if I consciously know that coding is like cycling, improvement is inevitable with consistency, motivation, and good coaching, I find myself slipping up and asking people if they've always bit in to computers or asking a coworker who's spouse is in the field if they are "naturally that nerdy tech person." I can sense that I still need convincing that that someone who doesn't fit the cliche tech worker mold can succeed in the field.


1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.
Training Peaks is an app I use to analyze my cycling workouts. A Training Stress Score (TSS) is given based on the time at each power zone. To calculate and display this TSS a list of data would have to be captured and referenced. An array could contain the time at each of the power zones and thus make this calculation and the corresponding display of it possible. If I deleted a portion of my workout maybe because my power meter wasn't functioning correctly during that window the array could be automatically altered and the result could be changed automatically.

1. In your own words, explain what an Array method is.
An array method changes or reports information about an array. It is a "method" to utilize or change the data contained in the array. For example the pop and shift changes an array by removing data, the push and unshift changes the array by adding data. The length method analyze the array and reports the total number of elements.

1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?
- Loops check a condition and if the condition is true then a code block will run. Then this will 'loop' so that the condition is checked again. If it is true again the code block will run again. It will only stop at the moment the condition is not true.
- 'For Loop' - running code a specific number of times, the condition is a form of a counter
- 'While Loop' - do not know how many times the code should be run, the condition is something other then a counter
- 'Do While Loop' - like 'While Loop' but guarantees one pass through the curly brackets as a minimum

1. If you had to teach a 5 year old about loops, how would you explain it?
"Lets say you want to write out a message saying 'Hi' to each of your stuffed animals. We would first list all the names of your stuffed animals: Sassy, Pumpkin, Ellie, and Pluto. Then you could write out for each of the name: "Hi <name>! I love you!" Or we could have a computer do it for us. A loop would allow us to wrote out our message,"Hi <name>! I love you!", and each time through plug in a different stuffed animal name and would stop when we ran out of name. That would be a loop - that repeating cycle where we change something each time like the name or just repeating it as the same!"

1. What questions do you still have about Arrays and loops?
- How common is the "new array" code used? Is it a more basic application or more advanced?
- It works just fine the way it is but it would almost make a bit more sense if the incrementor/updator was after our code like: `for (var i = 2; i < 7) {console.log('Happy Birthday ${names[i]}'i++);}`. In this way it would truly run in a circle like a loop. I was curious why is wasn't like that. I'm totally ok with the answer being: "it just isn't."
