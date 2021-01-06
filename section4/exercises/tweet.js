/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.timeStamp = Date.now();
    this.numberOfLikes = 0;
    this.comments = [];
  }

  addLike() {
    this.numberOfLikes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

}

var tweet1 = new Tweet("@TysonMcNutt", "New Year new me.");
var tweet2 = new Tweet("@realDonaldTrump", "I have never seen a thin person drinking  Diet Coke.");
var tweet3 = new Tweet("@codinghorror", "My favorite three words? \n NOTHING SCHEDULED TODAY")

tweet1.addLike();
tweet1.addLike();
console.log(tweet1);

tweet2.addComment("https://www.instagram.com/p/BF4raEHmhag/?utm_source=ig_embed");
tweet2.addComment("LMAO SMH");
console.log(tweet2);

tweet3.addLike();
tweet3.addComment("I heard that");
console.log(tweet3);
