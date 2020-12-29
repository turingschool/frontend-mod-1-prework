/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
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


var tweet1 = new Tweet("@sme", "coding a tweet", "9:47AM MST");

console.log(tweet1);

tweet1.addLike();

console.log(tweet1);

tweet1.addComment("This tweet is boring AF - @fitzy");

console.log(tweet1);

tweet1.addComment("Seriously - @seventhebeagle");

tweet1.addLike();
tweet1.addLike();
tweet1.addLike();

console.log(tweet1);

var tweet2 = new Tweet("@seventhebeagle", "I need my scoops", "4:15PM MST");

console.log(tweet2);

tweet2.addComment("Late scoops are the worst - @sme");

console.log(tweet2);

tweet2.addLike();

console.log(tweet2);
