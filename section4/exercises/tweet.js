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
 plusComment(commentAdd) {
  this.comments.push(commentAdd);
 }
 plusLike(likeAdd) {
  this.numberOfLikes.push(likeAdd);
  console.log(likeAdd.length);
 }
 countLikes(likeCount) {
  console.log(numberOfLikes[1++])
 }
}

var tweetCount = new Tweet("Hello World");
tweetBird.plusComment();
tweetBird.plusLike(1);
console.log(tweetBird);
//completely lost on this
