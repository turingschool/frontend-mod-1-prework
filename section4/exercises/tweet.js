/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author,
    this.content = content,
    this.timeStamp = timeStamp,
    this.numberOfLikes = numberOfLikes,
    this.comments = comments
  }
  addLikes(number) {
    this.numberOfLikes = this.numberOfLikes + number;
  }
  addComment(string) {
    this.comments.push(string);
  }
};

var tweetyBird = new Tweet("littlebird32", "I tought I taw a putty cat", "13:00", 34, ["you did, you did, you did see a pussy cat"]);
console.log(tweetyBird);

var socraTweet = new Tweet("philosophiatimee", "The unexamined tweet is not worth tweeting", "1:00", 1006, ["leave us alone", "<3"]);
console.log(socraTweet);

var tweenTweet = new Tweet("im12yearsold", "that party was lit af", "16.00", 9, ["tldr"]);
console.log(tweenTweet);

tweetyBird.addLikes(4);
console.log(tweetyBird);

socraTweet.addComment("a retweet should be tweeted as a tweet in itself, not as a mere means to another retweet");
console.log(socraTweet);
