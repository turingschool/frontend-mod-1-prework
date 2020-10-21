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
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }
  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1
  }
  addComment(comment) {
     comment = this.comments.push(comment)
     //addingComments is the parameter for this function. addincComment set to equal this.comment(and this will add the argument you fill in!)
   }
}

var firstTweet = new Tweet("steven", "Hi this is my first Tweet!", "12:56 PM", 0, [])
var secondTweet = new Tweet("John", "Big news coming out today.", "5:33 AM", 2, [])

console.log(firstTweet);
firstTweet.addLike();
firstTweet.addLike();
console.log(firstTweet)
firstTweet.addComment("Please work");
console.log(firstTweet);
firstTweet.addComment("So happy for you!");
console.log(firstTweet);
secondTweet.addComment("I think I know what it is.");
console.log(secondTweet);
secondTweet.addLike();
secondTweet.addLike();
secondTweet.addLike();
console.log(secondTweet);
secondTweet.addComment("I hope it's what I think it is.");
console.log(secondTweet);
