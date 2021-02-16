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
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.likes = this.likes+ 1
  }
  addComment() {
    this.comments = this.comments + ", So true!"
  }
};

var tweetOne = new Tweet("mcSneezy21", "I ain't never seen two pretty best friends", "02/10/21, 5:30am", 0, ["Haha",  "Omg", "Hilarious"]);
var tweetTwo = new Tweet("Lifeizgud00", "You're never to old to learn something new", "01/01/21, 12:00pm", 14, ["nice", "adventure is out there!"]);

console.log(tweetOne);

tweetOne.addComment();
console.log(tweetOne);

tweetTwo.addLike();
console.log(tweetTwo);
