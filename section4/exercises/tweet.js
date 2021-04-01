/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
 constructor(author, content, datetime, numberOfLikes, comments) {
   this.author = author;
   this.content = content;
   this.timeStamp = datetime;
   this.numberOfLikes = numberOfLikes;
   this.comments = comments;
 }

 updateLikes(numberOfLikes) {
   this.numberOfLikes += 1
 }

 addComments(comments) {
  this.comments.push("Hello!");
 }
};
var tweet1 = new Tweet("Natalie", "Happy Day!", "Mar 31", 0, ["Love this!"]);
tweet1.updateLikes();
tweet1.addComments();
console.log(tweet1);

var tweet2 = new Tweet("Panda", "Hi!", "Dec 12", 1, ["Hi to you!"]);
tweet2.updateLikes();
console.log(tweet2);
