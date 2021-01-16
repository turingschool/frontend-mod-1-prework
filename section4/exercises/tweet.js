/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments){
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
  }

  addLike(){
    this.numberOfLikes = this.numberOfLikes + 1;
  }

  addComment(){
    this.comments.push("Hey there just wanted to add a seudo comment!");
  }

}
var tweet1 = new Tweet("Bob", "Hi I'm Bob.", "1pm", 0, ["comment1", "comment2", "comment3"]);
var tweet2 = new Tweet("Sal", "Howdy I'm Sal.", "1:12pm", 2, ["comment1", "comment2", "comment3"]);
var tweet3 = new Tweet("Tom", "Hey I'm Tom.", "2:30pm", 7, ["comment1", "comment2", "comment3"]);
var tweet4 = new Tweet("Tim", "Hello I'm Tim.", "3:10pm", 3, ["comment1", "comment2", "comment3"]);
var tweet5 = new Tweet("Andrew", "I like cats!", "4pm", 1, ["comment1", "comment2", "comment3"]);
var tweet6 = new Tweet("Ashish", "I like curry!", "5:45pm", 10, ["comment1", "comment2", "comment3"]);
var tweet7 = new Tweet("Tino", "Check out my stream!", "1:08am", 348, ["comment1", "comment2", "comment3"]);

tweet1.addLike();
tweet3.addLike();
tweet5.addLike();
tweet7.addLike();

tweet2.addComment();
tweet4.addComment();
tweet6.addComment();

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);
console.log(tweet4);
console.log(tweet5);
console.log(tweet6);
console.log(tweet7);
