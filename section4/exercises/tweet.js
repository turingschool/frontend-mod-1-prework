/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addComment() {
    this.comments.push("This is an added comment!");
  }

  newLike() {
    this.numberOfLikes++
  }

}

var cameronsFirstTweet = new Tweet("Cameron Mackintosh", "This is the content of my first tweet", "3:2OPM 10/25/20", 0, []);
console.log(cameronsFirstTweet);

cameronsFirstTweet.addComment();
console.log(cameronsFirstTweet);

cameronsFirstTweet.newLike();
console.log(cameronsFirstTweet);

// ------------------------

var cameronsSecondTweet = new Tweet("Cameron Mackintosh", "Life is a daring adventure or nothing at all", "3:32PM 10/25/20", 0, []);

console.log(cameronsSecondTweet);
cameronsSecondTweet.newLike();
cameronsSecondTweet.addComment();
cameronsSecondTweet.newLike();
cameronsSecondTweet.newLike();
console.log(cameronsSecondTweet);
// prints original object, increases numberOfLikes from 0-3, adds one string to the comments array, prints revised Object
