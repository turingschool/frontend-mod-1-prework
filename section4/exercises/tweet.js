/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
}
updateTweet() {
  this.content = "self help";
}
addComment() {
  this.comments = "WOW!";
}

};

var twitterTweet = new Tweet("John","DIY","3pm", 12, "great project!");
console.log(twitterTweet);
twitterTweet.updateTweet();
console.log(twitterTweet)
var newTwitterTweet = new Tweet("mary", "crafts", "2pm", 500, "So talented!");
console.log(newTwitterTweet);
var newestTwitterTweet = new Tweet("Dan", "unboxing", "2am", 1000, "Awesome product!");
console.log(newestTwitterTweet);
newestTwitterTweet.addComment();
console.log(newestTwitterTweet);
