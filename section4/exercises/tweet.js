/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.comments = comments;
  this.numberOfLikes = 0;
}
addNumberOfLikes(newLike){
  var countLikes = this.numberOfLikes + newLike;
  this.numberOfLikes = countLikes;
}
addComments(newComment) {
  this.comments = this.comments.concat(newComment);
}
};
var commentOne = ['YASS QUEEN!!'];
var commentTwo = ['You can do this!'];
var commentThree = ['Boom!'];
var commentFour = ['Girl power!'];
var firstTweet = new Tweet('Anna', 'Beep Beep! OMW to become a programmer!','06/01/21 10:08',
'');
firstTweet.addComments(commentOne);
firstTweet.addNumberOfLikes(8);
console.log(firstTweet);

firstTweet.addComments(" " + commentTwo + " " + commentThree);
firstTweet.addNumberOfLikes(12);
console.log(firstTweet);

firstTweet.addComments(" " + commentFour);
console.log(firstTweet);
