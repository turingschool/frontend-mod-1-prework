/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberLikes, numberComments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberLikes = numberLikes;
    this.numberComments = numberComments;
};
addLike() {
    this.numberLikes + 1;
  };
addComment() {
      this.numberComments + 1;
    };

var tweet107 = new Tweet("wmcguire18", "text", "20:47", 11, 9);
console.log(tweet107);

var tweet108 = new Tweet("wmcguire18", "text", "21:15", 16, 10);
console.log(tweet108);

var tweet109 = new Tweet("wmcguire18", "image", "22:00", 500, 1);
console.log(tweet109);
