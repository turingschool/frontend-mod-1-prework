/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments. √
- A tweet should be able to increment the numberOfLikes and add to the list of comments. √
Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected. √
node section4/exercises/tweet.js
*/

class Tweet {
 constructor(author, content, timeStamp, numberOfLikes, comments){
   this.author = author;
   this.content = content;
   this.timeStamp = timeStamp;
   this.numberOfLikes = numberOfLikes;
   this.comments = comments;
 }
   addComments(){
   this.comments.push = "Looks awesome :)";
 } increaseLikes(){
   this.numberOfLikes = 103 ;
 }
}

var ericTweet = new Tweet ("Eric", "Weekend Vacations Album", "5:38 PM July 13, 2020", 0, ["Oh, yeah", "Well done!"]);
ericTweet.addComments();
ericTweet.increaseLikes();
console.log(ericTweet);

var janethTweet = new Tweet ("Janeth", "Fish Recipe", "7:01 PM January 03, 2019", 17, ["Mmmm, looks great"]);
janethTweet.addComments();
janethTweet.increaseLikes();
console.log(janethTweet);

var roxTweet = new Tweet ("Rox", "Live Session Video", "10:33 AM December 12, 2020", 95, ["Amazing", "Sounds good!", "Great Job"]);
roxTweet.addComments();
roxTweet.increaseLikes();
console.log(roxTweet);
