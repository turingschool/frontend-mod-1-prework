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

updateNumberOfLikes() {
  this.numberOfLikes = this.numberOfLikes + 1;
  console.log(this.numberOfLikes)
}
updateComments(newComments) {
  this.comments.unshift(newComments);
  console.log(this.comments)
}
}
var julianaTweet = new Tweet("Juliana", "dog information", "4.9.21-12:02 PM", 5, ["Cute", "Thanks for the info!", "Wow!"]);
console.log(julianaTweet)

julianaTweet.updateNumberOfLikes();
console.log(julianaTweet);

julianaTweet.updateComments("Juniper sounds amazing!");
console.log(julianaTweet)
