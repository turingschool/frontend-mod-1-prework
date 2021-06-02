/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(name, tweet, time, likes, comments) {
    this.author = name;
    this.content = tweet;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  addLike(){
    this.numberOfLikes = (this.numberOfLikes + 1);
  }
  addComment(){
    this.comments = (this.comments + " 'Rock on, dude!' ");
  }
}
var myFirstTweet = new Tweet ("Renee", "Hello Twitter World", "05/27/21 10:31am", 0, ", 'Hey girl!' ");
console.log(myFirstTweet);

myFirstTweet.addLike();
console.log(myFirstTweet);

myFirstTweet.addLike();
console.log(myFirstTweet);

myFirstTweet.addComment();
myFirstTweet.addLike();
console.log(myFirstTweet);
