/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
  constructor(author, content, timeStamp){
    this.author = author;
    this.content = content;
    this.timestamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = []
  }
  like() {
    this.numberOfLikes++;
  }
  comment(comment){
    this.comments.push(comment);
  }
}
var newTweet = new Tweet('me', 'I like pickles', 'Monday');
console.log(newTweet);
newTweet.comment('I also like pickles');
newTweet.comment('garlic is my favorite');
console.log(newTweet);
newTweet.like();
newTweet.like();
console.log(newTweet);
