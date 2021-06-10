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
  };
  addComment(comment) {
    this.comments.push(comment);
  };
  addLike() {
    this.numberOfLikes++;
  };
};

tweet1 = new Tweet('Bob', 'So, how \'bout them Eagles?', 1203, 4, ['Yeah, they\'re crushin\' it!']);
console.log(tweet1);
tweet1.addComment('Can\'t wait till the next game!');
tweet1.addLike();
console.log(tweet1);

tweet2 = new Tweet('Sally', '[insert enraged soundbyte about something here]', 1632, 138, []);
console.log(tweet2);
tweet2.addComment('I\'m so angry about this too!');
tweet2.addLike();
console.log(tweet2);
