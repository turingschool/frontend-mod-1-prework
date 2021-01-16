/*

> 3 speckled frogs sat on a log 
> eating some most delicious bugs.  
> One jumped in the pool where its nice and cool,
> then there were 2 speckled frogs.
>
> 2 speckled frogs sat on a log 
> eating some most delicious bugs.  
> One jumped in the pool where its nice and cool,  
> then there was 1 speckled frog.
>
> 1 speckled frog sat on a log 
> eating some most delicious bugs.  
> One jumped in the pool where its nice and cool,  
> then there were no more speckled frogs!

## Required

Make your program print the rhyme above for *10* frogs, with attention to where language changes. Notice the very small differences between what should be printed out when 3, 2 or 1 frog is sitting on a log.
*/
change1 = 10
change2 = 9
change3 = 8
var poem = [`${change1} speckled frogs sat on a log eating some most delicous bugs. One jumped in the pool where its nice and coool, then there were ${change2} speckled frogs.
${change2} speckled frogs sat on a log eating some most declicous bugs. One jumped in the pool where its nice and cool, then there was ${change3} speckled frogs. 
${change3} speckled frog sat on a log eating some most delicous bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!`] 

for (var i = 0; i < 10; i++) {
    console.log(poem)
}

 