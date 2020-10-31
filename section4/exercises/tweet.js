/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, text, time, likes, comments) {
    this.author = author;
    this.content = text;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes++;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }

}

var firstTweet = new Tweet("Alicia", "Hello Twitter world!", Date.now(), 5, ["Hello to you too", "wazzup", "Welcome"]);
console.log("Here is the first tweet:");
console.log(firstTweet);

console.log("\nLet's add a couple of likes and add a new comment and see what happens:\n");
firstTweet.addLike();
firstTweet.addLike();
firstTweet.addComment("Welcome to the Twitter party!");
console.log(firstTweet);

console.log("\nNow let's set up a few more instances of the Tweet class:\n");

var secondTweet = new Tweet("Bob", "Here is a profound thought: hmm.", Date.now(), 987, ["This really made me think!", "You are brilliant.", "I'm going to retweet this every day so people will think I'm smart."]);
console.log("Here is the second tweet:");
console.log(secondTweet);

var thirdTweet = new Tweet("Cassandra", "Stop arguing, everyone!", Date.now(), 2, ["No way", "Arguments are the best"]);
console.log("\nHere is the third tweet:");
console.log(thirdTweet);

var fourthTweet = new Tweet("Dani", "Plants are the best", Date.now(), 456, ["Salad thinks otherwise", "But what does your cat think?", "I agree", "I disagree", "Just so you know, this isn't an original thought. A famous Stoic philosopher once said the same thing"]);
console.log("\nHere is the fourth tweet:");
console.log(fourthTweet);

console.log("\nAnd now as a final test, we'll try adding some likes and comments to these tweets. The updated Tweet instances look like this:\n");
secondTweet.addLike();
secondTweet.addLike();
secondTweet.addLike();
secondTweet.addComment("Hmm.");
thirdTweet.addLike();
fourthTweet.addComment("Green is good");
fourthTweet.addComment("What about fungi?");
console.log(secondTweet);
console.log(thirdTweet);
console.log(fourthTweet);
