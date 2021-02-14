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
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes++
  }
  addComment(addComment) {
    this.comments.push(addComment);
  }
}

var tyTweet = new Tweet("Ty Holter", "You betchum bobcats!", "2:17 PM MST", 4, ["Wow! I love bobcats!", "As if...", "I like your attitude"]);

tyTweet.addLike();

tyTweet.addComment("Go Ty! You tell 'em!");

console.log(tyTweet);

var ashTweet = new Tweet("Ash Oh", "I'm no scaredy cat!", "5:40 AM MST", 88, ["Humble brag, much", "no way! you're a scaredy RAT!", "I believe in you!"]);

ashTweet.addLike();

ashTweet.addComment("I'll see you tomorrow!");

console.log(ashTweet);

var ratTweet = new Tweet("JuneBugTheRat", "mOrE ChEErIoS, PlEaSE", "6:17 PM MST", 10999, ["JuneBugTheRat is the modern day Nostradamus", "I've never met such a sentient rodent", "JuneBugTheRat for president 2024!!!!11"]);

ratTweet.addLike();


console.log(ratTweet);
