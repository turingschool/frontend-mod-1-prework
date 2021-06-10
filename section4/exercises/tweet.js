/*
In the space below, add to the existing skeleton of a Tweet class.

- X A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- X A tweet should be able to increment the numberOfLikes and add to the list of comments.

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
  incrementLikes(num) {
    this.numberOfLikes += num;
  }
  addComments(newComment) {
      this.comments.push(newComment);
  }
};

var firstTweet = new Tweet("Nolan", "Hey sick it\'s my first tweet holler", "4:20 AM", 82, ["hey man we love you", "lets goooooo", "literally noone cares broh"]);
console.log(firstTweet);

firstTweet.incrementLikes(141);
firstTweet.addComments("sup its Snoop Dogg come hang");
console.log(firstTweet);

var secondTweet = new Tweet("Guy Fieri", "Welcome to Flavortown. Population: you.", "6:15 AM", 13000000, ["yes", "im in", "yes", "yes", "yes my lord", "fuck yeah", "🐐🐐🐐", "yes"]);
secondTweet.incrementLikes(87000);
secondTweet.addComments("no? sike YASSSS");
console.log(secondTweet);

var thirdTweet = new Tweet("Steve Harwell", "Some", "3:01 PM", 480, ["body", "once", "told", "me", "the", "world", "is", "gonna", "roll", "me"]);
thirdTweet.incrementLikes(58000);
thirdTweet.addComments("i");
thirdTweet.addComments("aint");
thirdTweet.addComments("the");
thirdTweet.addComments("sharpest");
thirdTweet.addComments("tool");
thirdTweet.addComments("in");
thirdTweet.addComments("the");
thirdTweet.addComments("shed");
console.log(thirdTweet);
